const carouselCard = () => {
    return (
      <a href="getLocalURL()">
        {/*TODO bind src with the album/artist/song image URRL*/}
        <img className="d-block w-100" src = "resource.imageURL"/>
        <div className="carousel-caption d-none d-md-block">
          {/*TODO: populate h5 with the album/artist/song name-->*/}
          <h5 ></h5>
        </div>
      </a>
    )
  }
  
  export default carouselCard