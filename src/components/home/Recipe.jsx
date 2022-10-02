import React from 'react'
import { RecipeContainer } from './Recipe.styled'

const Recipe = () => {
  return (
    <RecipeContainer>
      <div className='recipe-info'> 
        <span>Tasty Recipe</span>
        <span>저희 Tasty를 통해</span>
        <span>디양한 레시피를 만나보세요.</span>
      </div>
      <div className='recipe-img'>
        <img className='recipe-img__1' src='images/recipe1.png' alt='11' />
        <img className='recipe-img__1' src='images/recipe2.png' alt='11' />
        <img className='recipe-img__1' src='images/recipe3.png' alt='11' />
        <img className='recipe-img__1' src='images/recipe4.png' alt='11' />
      </div>
    </RecipeContainer>
  )
}

export default Recipe