import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { va as uuid } from 'uuid'
import getQuotes from './services/getQuote'
import { ReactComponent as Bookmark } from './assets/bookmark_border.svg'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import QuoteCard from './QuoteCard'

dayjs.extend(advancedFormat)

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
    setBookmarkedQuotes([...bookmarkedQuotes, quote])
  }

  function deleteBookmark(event) {
    const bookmarkedQuotesAndNewQuote = [...bookmarkedQuotes, quote]
    /* bookmarkedQuotesAndNewQuote.map() */
    console.log('EVENT: ' + event.currentTarget.id)
    setBookmarkedQuotes(
      bookmarkedQuotesAndNewQuote.filter(
        (quotes) => quotes.isBookmarked === true
      )
    )
  }

  return (
    <Wrapper>
      <QuoteCard
        date={quote.date}
        text={quote.text}
        id={quote.id}
        isBookmarked={quote.isBookmarked}
        onClick={bookmarkQuote}
      />

      <NewQuoteButton onClick={getNewQuote}>Get new Quote</NewQuoteButton>
      {/* <div className="bookmarked"> */}
      {bookmarkedQuotes.map((quote) => {
        return (
          <QuoteCard
            className="bookmarked"
            date={quote.date}
            text={quote.text}
            key={quote.id}
            isBookmarked={quote.isBookmarked}
            onClick={deleteBookmark}
          />
        )
      })}
      {/* </div> */}
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: grid;
  font-family: sans-serif;
`

/* const QuoteCard = styled.div`
  margin: 10px;
  padding: 20px;
  box-shadow: 0 5px 16px #0004;
  display: grid;
  gap: 15px;
  border-radius: 5px;
  position: relative;

  time {
    font-size: 0.8rem;
  }

  blockquote {
    font-style: italic;
  }

  .bookmarkIcon {
    position: absolute;
    right: 15px;
    top: 15px;
  }
` */

const NewQuoteButton = styled.button`
  margin: 15px auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  border-color: lightgray;
  box-shadow: 0 15px 20px #0004;
  background-color: white;
  font-size: 1rem;
  z-index: 200;
`
