import styled from 'styled-components/macro'

import useQuote from './hooks/useQuote'
import { ReactComponent as Reload } from './assets/reload.svg'

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
      <Button onClick={getNewQuote}>
        <Reload className="reload" />
        Get new Quote
      </Button>
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

const vH = window.innerHeight - 70 - 60

const PageQuoteWrapper = styled.div`
  display: grid;
  height: ${vH}px;
  grid-template-rows: 1fr 50px 100px;
  place-items: center;

  Button {
    align-self: flex-start;
    grid-area: 3;

    .reload {
      fill: #4885ed;
    }
  }
`
const BookmarkedNotification = styled.div`
  align-self: flex-start;
`
