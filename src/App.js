import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'

import useQuote from './hooks/useQuote'

import Header from './Header'
import QuoteCard from './QuoteCard'
import Button from './Button.js'
import Footer from './Footer'

export default function App() {
  const {
    newQuote,
    bookmarkedQuotes,
    getNewQuote,
    bookmarkQuote,
    deleteBookmark,
  } = useQuote()

  return (
    <AppWrapper>
      <Header />

      <ContentWrapper>
        <Switch>
          <Route exact path="/">
            <QuoteCard quote={newQuote} onClick={bookmarkQuote} />

            <Button onClick={getNewQuote}>Get new Quote</Button>
          </Route>
          <Route exact path="/bookmarks">
            {bookmarkedQuotes.map((quote) => (
              <QuoteCard
                key={quote.id}
                quote={quote}
                onClick={() => deleteBookmark(quote.id)}
              />
            ))}
          </Route>
          <Route exact path="/add"></Route>
        </Switch>
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  )
}

const AppWrapper = styled.div``

const ContentWrapper = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-rows: 200px auto;
`
