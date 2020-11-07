import styled from 'styled-components/macro'
import useQuote from './hooks/useQuote'
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
      <ContentWrapper>
        <QuoteCard quote={newQuote} onClick={bookmarkQuote} />

        <Button onClick={getNewQuote}>Get new Quote</Button>

        {bookmarkedQuotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
            onClick={() => deleteBookmark(quote.id)}
          />
        ))}
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  )
}

const AppWrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
`
