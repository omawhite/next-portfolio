import type { NextApiRequest, NextApiResponse } from 'next';
import { config } from '@/lib/oauth2';
import { AuthorizationCode } from 'simple-oauth2';

const renderBody = (status: string, content: Object) => `
  <script>
    const receiveMessage = (message) => {
      window.opener.postMessage(
        'authorization:github:${status}:${JSON.stringify(content)}',
        message.origin
      );
  
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    
    window.opener.postMessage("authorizing:github", "*");
  </script>
  `;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code;
  const { host } = req.headers;

  const oauthClient = new AuthorizationCode({
    client: {
      id: process.env.OAUTH_CLIENT_ID,
      secret: process.env.OAUTH_CLIENT_SECRET,
    },
    auth: {
      tokenHost: `https://github.com`,
      tokenPath: `/login/oauth/access_token`,
      authorizePath: `/login/oauth/authorize`,
    },
  });

  try {
    const accessToken = await oauthClient.authorizationCode.getToken({
      code,
      redirect_uri: `https://${host}/api/callback`,
    });
    const { token } = oauthClient.accessToken.create(accessToken);

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
