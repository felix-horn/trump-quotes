import { useEffect, useState } from 'react'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'
import getQuotes from '../services/getQuote'

export default function useQuote() {
  const [newQuote, setNewQuote] = useState({})
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState(
    loadLocally('bookmarkedQuotes') ?? []
  )

  useEffect(() => {
    getNewQuote()
  }, [])

  useEffect(() => {
    saveLocally('bookmarkedQuotes', bookmarkedQuotes)
  }, [bookmarkedQuotes])

  return {
    newQuote,
    bookmarkedQuotes,
    getNewQuote,
    bookmarkQuote,
    deleteBookmark,
    setBookmarkedQuotes,
  }

  function getNewQuote() {
    getQuotes().then((data) =>
      setNewQuote({
        date: data.appeared_at,
        text: data.value,
        id: data.quote_id,
        isBookmarked: false,
      })
    )
  }

  function bookmarkQuote() {
    const bookmarkedQuotesWithDuplicates = [
      { ...newQuote, isBookmarked: true },
      ...bookmarkedQuotes,
    ]

    return setBookmarkedQuotes(
      bookmarkedQuotesWithDuplicates.reduce((acc, cur) => {
        const accIDs = acc.map((item) => item.id)
        return accIDs.includes(cur.id) ? acc : [...acc, cur]
      }, [])
    )
  }

  function deleteBookmark(idToBeDeleted) {
    setBookmarkedQuotes(
      bookmarkedQuotes.filter((quotes) => quotes.id !== idToBeDeleted)
    )
  }
}
