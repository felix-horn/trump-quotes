import styled from 'styled-components/macro'
import { ReactComponent as Bookmark } from './assets/bookmark_border.svg'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default function QuoteCard({ onClick, date, text, id, isBookmarked }) {
  return (
    <QuoteCardWrapper
      key={id}
      isBookmarked={isBookmarked}
      className={isBookmarked ? 'bookmarked' : ''}
    >
      <Bookmark className="bookmarkIcon" onClick={onClick} />
      <time>{dayjs(date).format('MMM. Do, YYYY')}:</time>
      <blockquote>"{text}"</blockquote>
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
    box-shadow: 0 5px 10px #0004;
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
  }
`
