import React, { useEffect } from 'react'
import axios from "axios"
function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(()=>{
    axios.post('http://localhost:5173/callback',{
        code,
    })
    .then(res =>{
        console.log(res.data)
    })
  },[code])
}

export default useAuth