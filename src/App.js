import styled from 'styled-components/macro'
import QuoteCard from './QuoteCard'
import useQuote from './hooks/useQuote'
import { ReactComponent as Reload } from './assets/reload.svg'

function App() {
  const {
    newQuote,
    bookmarkedQuotes,
    getNewQuote,
    bookmarkQuote,
    deleteBookmark,
  } = useQuote()

  return (
    <Wrapper>
      <QuoteCard quote={newQuote} onClick={bookmarkQuote} />

      <NewQuoteButton onClick={getNewQuote}>
        <Reload className="reload" /> Get new Quote
      </NewQuoteButton>

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
  font-family: 'Roboto', sans-serif;
`
const NewQuoteButton = styled.button`
  z-index: 200;
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

  .reload {
    fill: #4885ed;
  }

  &:hover > .reload {
    transition: transform 1s;
    transform: rotate(-180deg);
    border: none;
  }
`
