import crypto from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import { config } from '@/lib/oauth2';
import { AuthorizationCode } from 'simple-oauth2';

const randomString = () => crypto.randomBytes(4).toString(`hex`);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { host } = req.headers;

  if (req.method === 'GET') {
    const oauthClient = new AuthorizationCode(config);

    const url = oauthClient.authorizeURL({
      redirect_uri: `https://${host}/api/callback`,
      scope: `repo,user`,
      state: randomString(),
    });

    res.writeHead(301, { Location: url });
    res.end();
  } else {
    res.status(400).send('Invalid request method');
  }
}
