import React from 'react'
import ReactPlayer from "react-player";
import { MovieContainer } from './Movie.styled'

const Movie = () => {
  return (
    <MovieContainer>
      <div className='movie-info'>
        <span>Cooking Movie</span>
        <span>영상으로 만나면 더 맛있는 레시피</span>
        <span>더 쉽게 따라 해보세요.</span>
        <span>more</span>
      </div>
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=w-VtGjcFhHw"}
        width = "1000px"
        height = "500px"
        playing = {true}
        muted = {true}
        controls = {true}
      />
    </MovieContainer>
  )
}

export default Movie