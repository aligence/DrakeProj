const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();
app.post('/login'), (req, res) =>{
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173/callback',
        clientId: 'e1635bb6cf544f28a1aa7c4844000ff7',
        clientSecret: 'd2114d03781c4b328b2756a755f81d49'
    })

    spotifyApi.authorizationCodeGrant(code).then(data=>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expriresIn: data.body.expires_in
        })
    })
    .catch(()=>{
        res.sendStatus(400)
    })
}
