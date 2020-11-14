import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Quote } from './assets/quote-outlined.svg'
import quote_filled from './assets/quote-filled.svg'

import { ReactComponent as Bookmarks } from './assets/bookmarks-outlined.svg'
import bookmarks_filled from './assets/bookmarks-filled.svg'

import { ReactComponent as Add } from './assets/add-outlined.svg'
import add_filled from './assets/add-filled.svg'

export default function Footer() {
  return (
    <NavContainer>
      <NavButton exact to="/">
        <Quote className="quote" />
        Discover
      </NavButton>
      <NavButton exact to="/bookmarks">
        <Bookmarks className="bookmarks" />
        Bookmarks
      </NavButton>
      <NavButton exact to="/add">
        <Add className="add" />
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
const NavButton = styled(NavLink)`
  margin: 5px;
  border: none;
  background-color: transparent;
  padding: 4px 12px;
  display: grid;
  place-items: center;
  gap: 2px;
  text-decoration: none;
  color: black;
  font-size: 70%;
  font-weight: 300;

  &.active .quote {
    background-image: url(${quote_filled});
  }

  &.active .bookmarks {
    background-image: url(${bookmarks_filled});
  }

  &.active .add {
    background-image: url(${add_filled});
    fill: transparent;
  }
`
