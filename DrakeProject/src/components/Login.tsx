
const REDIRECT_URI = "http://localhost:5173/";
const scope ='user-read-private user-read-email user-library-read streaming'
const authUrl = new URL('https://accounts.spotify.com/authorize')
const CLIENT_ID = "e1635bb6cf544f28a1aa7c4844000ff7"

async function authDisHoe() {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomValues = crypto.getRandomValues(new Uint8Array(64));
    const randomString = randomValues.reduce((acc, x) => acc + possible[x % possible.length], "");
  
    const code_verifier = randomString;
    const data = new TextEncoder().encode(code_verifier);
    const hashed = await crypto.subtle.digest('SHA-256', data);
  
    const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  
    window.localStorage.setItem('code_verifier', code_verifier);
  
    const authorUrl = new URL(authUrl)
    const params = {
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: scope,
      code_challenge_method: 'S256',
      code_challenge: code_challenge_base64,
      redirect_uri: REDIRECT_URI,
    };
  
    authorUrl.search = new URLSearchParams(params).toString();
    window.location.href = authorUrl.toString(); // Redirect the user to the authorization server for login
  }

function Login(){
    return (
        <div className="bg-black h-full">
            <h1 className="pb-50">To Get More Information, Please</h1>
            <a className="btn btn-lg" onClick={authDisHoe}>
                Login With Spotify
            </a>
        </div>
    )
}
export default Login