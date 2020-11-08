import styled from 'styled-components/macro'
import { ReactComponent as Bookmark } from './assets/bookmark-outlined.svg'
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
      <time>{dayjs(quote.date).format(' MMM Do, YYYY')}:</time>
      <blockquote>"{quote.text}"</blockquote>
    </QuoteCardWrapper>
  )
}

const QuoteCardWrapper = styled.div`
  margin: 10px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 1px 3px #0004;
  border-radius: 5px;
  position: relative;
  background-color: #ededed;

  &.bookmarked {
    background-color: white;
    box-shadow: 0 1px 3px #0004;
  }

  time {
    font-size: 0.8rem;
  }

  blockquote {
    font-style: italic;
    margin: 20px;
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
