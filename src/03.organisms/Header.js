import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyled>
      <h2>WTF Quotes by</h2>
      <h1>Tronald Dump</h1>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  z-index: 200;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 70px;
  width: 100%;
  box-shadow: 0 1px 3px #0004;
  background: white;
  padding: 10px;
  display: grid;
  place-items: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1rem;
    font-weight: 300;
  }
`
