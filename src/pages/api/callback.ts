import type { NextApiRequest, NextApiResponse } from 'next';
import { renderBody, createClient } from '@/lib/oauth2';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code;
  const { host } = req.headers;

  const oauthClient = createClient();

  try {
    const accessToken = await oauthClient.getToken({
      code,
      redirect_uri: `https://${host}/api/callback`,
      scope: `repo,user`,
    });

    const { token } = oauthClient.createToken(accessToken);

    res.status(200).send(
      renderBody('success', {
        token: token.access_token,
        provider: 'github',
      })
    );
  } catch (e) {
    res.status(200).send(renderBody('error', e));
  }
}
