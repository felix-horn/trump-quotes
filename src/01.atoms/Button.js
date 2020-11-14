import styled from 'styled-components/macro'

export default function Button({ onClick, children }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  z-index: 100;
  box-shadow: 0 7px 15px #a3aab5;
  margin: 15px auto;
  border-radius: 20px;
  border: none;
  height: 40px;
  background-color: white;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #4885ed;

  &:hover > .reload {
    transition: transform 1s;
    transform: rotate(-180deg);
    border: none;
  }
`
