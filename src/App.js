import styled from 'styled-components/macro'
import QuoteCard from './QuoteCard'
import useQuote from './hooks/useQuote'

function App() {
  const {
    quote,
    bookmarkedQuotes,
    getNewQuote,
    bookmarkQuote,
    deleteBookmark,
  } = useQuote()

  return (
    <Wrapper>
      <QuoteCard quote={quote} onClick={bookmarkQuote} />

      <NewQuoteButton onClick={getNewQuote}>Get new Quote</NewQuoteButton>

      {bookmarkedQuotes.map((quote) => {
        return (
          <QuoteCard
            key={quote.id}
            quote={quote}
            onClick={() => deleteBookmark(quote.id)}
          />
        )
      })}
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  font-family: sans-serif;
`
const NewQuoteButton = styled.button`
  z-index: 200;
  box-shadow: 0 15px 20px #0004;
  margin: 15px auto;
  border-radius: 5px;
  border: solid 1px lightgray;
  background-color: white;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
`
