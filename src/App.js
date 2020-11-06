import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import getQuotes from './services/getQuote'
import QuoteCard from './QuoteCard'

function App() {
  const [quote, setQuote] = useState({})
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([])

  useEffect(() => {
    getNewQuote()
  }, [])

  function getNewQuote() {
    getQuotes().then((data) =>
      setQuote({
        date: data.appeared_at,
        text: data.value,
        id: data.quote_id,
        isBookmarked: false,
      })
    )
  }

  function bookmarkQuote() {
    setBookmarkedQuotes([...bookmarkedQuotes, { ...quote, isBookmarked: true }])
  }

  function deleteBookmark(idToBeDeleted) {
    setBookmarkedQuotes(
      bookmarkedQuotes.filter((quotes) => quotes.id !== idToBeDeleted)
    )
  }

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
`
