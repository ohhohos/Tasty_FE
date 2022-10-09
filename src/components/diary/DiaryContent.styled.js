import styled from 'styled-components'

export const DiaryContentContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
.diary {
  &-content {
    width: 75%;
    &__button {
      width: 33%;
    }
  }
}
`

export const DiaryButton = styled.div`
display: flex;
align-items: center;
width: 100%;
.diary-content_button {
  background-color: white;
  padding: 10px 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  border: solid 0.5px #3f4b59;
  span{
    color: #3f4b59;
    display: flex;
    justify-content: flex-start;
  }
}

`