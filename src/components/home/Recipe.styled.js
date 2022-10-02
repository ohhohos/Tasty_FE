import styled from 'styled-components'

export const RecipeContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;

  .recipe {
    &-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-img {
      width: 100%;
      display: flex;
      justify-content: space-between;
      &__1 {
        width: 370px;
        height: 370px;
      }
    }
  }
  
`