import { useState } from 'react'
import styled from 'styled-components/macro'

import useQuote from './hooks/useQuote'

import QuoteCard from './QuoteCard'

export default function PageAdd() {
  const { bookmarkedQuotes, deleteBookmark } = useQuote()

  const [newQuote, setNewQuote] = useState({})

  function addQuote() {
    return
  }

  function handleChange(event) {
    return setNewQuote({ ...newQuote, [event.target.name]: event.target.value })
  }

  return (
    <PageAddWrapper>
      <FormWrapper onSubmit={addQuote}>
        <h1>Add your own Quote</h1>
        <label>
          <span>Quote: </span>
          <input
            type="textarea"
            name="text"
            onChange={handleChange}
            value={newQuote.text}
          />
        </label>
      </FormWrapper>
    </PageAddWrapper>
  )
}
const PageAddWrapper = styled.div``

const FormWrapper = styled.form``
