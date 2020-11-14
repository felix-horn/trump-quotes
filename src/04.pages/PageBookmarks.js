import styled from 'styled-components/macro'

import useQuote from '../hooks/useQuote'

import QuoteCard from '../02.molecules/QuoteCard'

export default function PageBookmarks() {
  const { bookmarkedQuotes, deleteBookmark } = useQuote()

  return (
    <PageBookmarksWrapper>
      {bookmarkedQuotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          onClick={() => deleteBookmark(quote.id)}
        />
      ))}
    </PageBookmarksWrapper>
  )
}
const PageBookmarksWrapper = styled.div`
  display: grid;
  margin-top: 10px;
  justify-items: center;
`
