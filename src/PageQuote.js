import styled from 'styled-components/macro'

import useQuote from './hooks/useQuote'

import QuoteCard from './QuoteCard'
import Button from './Button.js'
import { useState } from 'react'

export default function PageQuote() {
  const { newQuote, getNewQuote, bookmarkQuote } = useQuote()
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <PageQuoteWrapper>
      <QuoteCard quote={newQuote} onClick={handleClick} />
      {isBookmarked && (
        <BookmarkedNotification>
          Quote has been Bookmarked.
        </BookmarkedNotification>
      )}
      <Button onClick={getNewQuote}>Get new Quote</Button>
    </PageQuoteWrapper>
  )

  function handleClick() {
    bookmarkQuote()
    showBookmarkedNotification()
  }

  function showBookmarkedNotification() {
    setIsBookmarked(!isBookmarked)
  }
}

const PageQuoteWrapper = styled.div`
  display: grid;
  height: calc(100vh - 70px - 60px);
  grid-template-rows: 1fr 50px 100px;
  place-items: center;

  Button {
    align-self: flex-start;
    grid-area: 3;
  }
`
const BookmarkedNotification = styled.div`
  align-self: flex-start;
`
