import styled from 'styled-components/macro'
import { ReactComponent as Bookmark } from './assets/bookmark_border.svg'
import bookmark_filled from './assets/bookmark-filled.svg'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default function QuoteCard({ quote, onClick }) {
  return (
    <QuoteCardWrapper
      isBookmarked={quote.isBookmarked}
      className={quote.isBookmarked ? 'bookmarked' : ''}
    >
      <Bookmark
        className={`bookmarkIcon + ${quote.isBookmarked ? 'bookmarked' : ''}`}
        onClick={onClick}
      />
      <time>{dayjs(quote.date).format('MMM. Do, YYYY')}:</time>
      <blockquote>"{quote.text}"</blockquote>
    </QuoteCardWrapper>
  )
}

const QuoteCardWrapper = styled.div`
  margin: 10px;
  padding: 20px;
  box-shadow: 0 5px 16px #0004;
  display: grid;
  gap: 15px;
  border-radius: 5px;
  position: relative;

  &.bookmarked {
    background-color: lightgray;
    box-shadow: 0 2px 5px #0002;
    margin: 20px;
  }

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
    fill: black;

    &.bookmarked {
      background-image: url(${bookmark_filled});
    }
  }
`
