const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=e1635bb6cf544f28a1aa7c4844000ff7&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
function Login(){
    return (
        <div className="bg-black h-full">
            <h1 className="pb-50">To Get More Information, Please</h1>
            <a className="btn btn-lg" href = {AUTH_URL}>
                Login With Spotify
            </a>
        </div>
    )
}
export default Login