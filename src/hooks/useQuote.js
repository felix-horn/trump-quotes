import { useEffect, useState } from 'react'
import getQuotes from '../services/getQuote'

export default function useQuote() {
  const [quote, setQuote] = useState({})
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([])

  useEffect(() => {
    getNewQuote()
  }, [])

  return { quote, bookmarkedQuotes, getNewQuote, bookmarkQuote, deleteBookmark }

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
    setBookmarkedQuotes([{ ...quote, isBookmarked: true }, ...bookmarkedQuotes])
  }

  function deleteBookmark(idToBeDeleted) {
    setBookmarkedQuotes(
      bookmarkedQuotes.filter((quotes) => quotes.id !== idToBeDeleted)
    )
  }
}
