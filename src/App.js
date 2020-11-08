import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import PageQuote from './PageQuote'
import PageBookmarks from './PageBookmarks'
import PageAdd from './PageAdd'

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
