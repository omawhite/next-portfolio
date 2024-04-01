import { AuthorizationCode } from 'simple-oauth2';

export const config = {
  client: {
    id: process.env.GITHUB_ID,
    secret: process.env.GITHUB_SECRET,
  },
  auth: {
    tokenHost: `https://github.com`,
    tokenPath: `/login/oauth/access_token`,
    authorizePath: `/login/oauth/authorize`,
  },
};

/**
 * Creates a new client for OAuth2 Authorization Code grant type.
 * See https://github.com/lelylan/simple-oauth2/blob/master/API.md#new-authorizationcodeoptions
 */
export const createClient = () => {
  return new AuthorizationCode(config);
};

export const renderBody = (status: string, content: Object) => `
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
