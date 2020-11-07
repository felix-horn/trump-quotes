import styled from 'styled-components/macro'

import { ReactComponent as Quote } from './assets/quote-outlined.svg'
import quote_filled from './assets/quote-filled.svg'

import { ReactComponent as Bookmarks } from './assets/bookmarks-outlined.svg'
import bookmarks_filled from './assets/bookmarks-filled.svg'

import { ReactComponent as Add } from './assets/add-outlined.svg'
import add_filled from './assets/add-filled.svg'

export default function Footer() {
  return (
    <NavContainer>
      <NavButton>
        <Quote />
        Discover
      </NavButton>
      <NavButton>
        <Bookmarks />
        Bookmars
      </NavButton>
      <NavButton>
        <Add />
        Add
      </NavButton>
    </NavContainer>
  )
}

const NavContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  border-top: solid 1px #ededed;
  background-color: #ffffffee;
  display: flex;
  justify-content: space-between;
`
const NavButton = styled.button`
  margin: 5px;
  border: none;
  background-color: #ffffffee;
  padding: 4px 12px;
  display: grid;
  justify-items: center;
  gap: 2px;
  font-size: 70%;
  font-weight: 300;

  &.active {
    background: skyblue;
  }
`
