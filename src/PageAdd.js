import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'

import useQuote from './hooks/useQuote'

import Button from './Button'
import { ReactComponent as AddComment } from './assets/add_comment-outlined.svg'

export default function PageAdd() {
  const { bookmarkedQuotes, setBookmarkedQuotes } = useQuote()

  const [newCustomQuote, setNewCustomQuote] = useState({
    date: Date.now(),
    text: '',
    id: uuid(),
    isBookmarked: true,
  })

  function addCustomQuote() {
    setBookmarkedQuotes([newCustomQuote, ...bookmarkedQuotes])
  }

  function handleChange(event) {
    return setNewCustomQuote({
      ...newCustomQuote,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <FormWrapper action="/bookmarks" onSubmit={addCustomQuote}>
      <h1>Add your own Quote</h1>
      <label>
        <div>Quote: </div>
        <textarea
          name="text"
          placeholder="Type you quote here."
          onChange={handleChange}
          value={newCustomQuote.text}
          rows="3"
          cols="30"
          required
        />
      </label>
      <label>
        <div>Quote's Date: </div>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={newCustomQuote.date}
          required
        />
      </label>
      <Button>
        <AddComment className="buttonIcon" />
        Add Quote
      </Button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  margin: 20px auto;
  box-shadow: 0 1px 3px #0004;
  border-radius: 5px;
  padding: 20px;
  display: grid;
  gap: 20px;
  justify-items: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  div {
    margin-bottom: 10px;
    font-weight: 300;
  }

  textarea,
  input {
    padding: 10px 20px;
    width: 100%;
    border: solid 1px #ededed;
    border-radius: 5px;
    position: relative;
    background-color: white;

    &:focus {
      border: solid 1px #4885ed;
    }
  }

  .buttonIcon {
    fill: #4885ed;
  }
`
