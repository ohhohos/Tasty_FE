import styled from 'styled-components'

export const HeaderContainer = styled.div`
background-color: white;
width: 100%;
position: sticky;
top: 0;
z-index: 11; 
.header {
  width: 90%;
  display: flex;
  margin: 10px auto 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  &-logo {
    
  }
  &-nav {
    display: flex;
    gap: 20px;
  }
}
`