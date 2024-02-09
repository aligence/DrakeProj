import React, { useState, useEffect } from 'react';

const About = ({ code }) => {
  const CLIENT_ID = "e1635bb6cf544f28a1aa7c4844000ff7"
const CLIENT_SECRET = "d2114d03781c4b328b2756a755f81d49"
const [accessToken, setAccessToken] = useState("");
  
  useEffect(() =>{
    //API Acces Token
    var authParam ={
      method: 'POST',
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' +CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParam )
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  },[]) 
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/albums', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        });
        if (response.ok) {
          const data = await response.json();
          setAlbums(data.items);
        } else {
          console.error('Failed to fetch albums:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, [accessToken]);

  return (
    <div className='bg-white h-screen w-screen'>
      <div className='border-4 w-11/12 h-full border-black m-auto '>
        <h1>View The Discography Below</h1>
        <ul>
          {albums.map(album => (
            <li key={album.id}>{album.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
