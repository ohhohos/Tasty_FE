import styled from 'styled-components'

export const MovieContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 95%;
  .movie {
    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 25px;
    }
  }
`