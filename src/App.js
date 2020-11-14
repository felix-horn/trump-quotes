import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'

import Header from './03.organisms/Header'
import Footer from './03.organisms/Footer'
import PageQuote from './04.pages/PageQuote'
import PageBookmarks from './04.pages/PageBookmarks'
import PageAdd from './04.pages/PageAdd'

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={PageQuote} />
        <Route exact path="/bookmarks" component={PageBookmarks} />
        <Route exact path="/add" component={PageAdd} />
      </Switch>
      <Footer />
    </AppWrapper>
  )
}

const AppWrapper = styled.div``
