const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=e1635bb6cf544f28a1aa7c4844000ff7&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
function Login(){
    return (
        <div>
                <a className="btn btn-success btn-lg" href = {AUTH_URL}>
                    Login With Spotify
                </a>
        </div>
    )
}
export default Login