// Write your code here
import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  FormContainer,
  TextInput,
  TextAreaInput,
  FormButton,
  NoteItemContainer,
  NotesEmptyImg,
  EmptyNotesMsg,
  EmptyHeading,
} from './styledComponents'

const Notes = () => {
  const [inputText, setInputText] = useState('')
  const [textAreaInput, setInputTextArea] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeInput = event => {
    setInputText(event.target.value)
  }

  const onChangeTextArea = event => {
    setInputTextArea(event.target.value)
  }

  const onClickSubmit = event => {
    event.preventDefault()

    const newNotes = {
      id: uuidV4(),
      inputText,
      textAreaInput,
    }

    setNotesList(prevStateList => [...prevStateList, newNotes])
    setInputText('')
    setInputTextArea('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onClickSubmit}>
        <TextInput
          value={inputText}
          placeholder="Title"
          type="text"
          onChange={onChangeInput}
        />
        <TextAreaInput
          value={textAreaInput}
          col="6"
          rows="50"
          onChange={onChangeTextArea}
          placeholder="Take a Note..."
        >
          {}
        </TextAreaInput>
        <FormButton type="submit">Add</FormButton>
      </FormContainer>
      <NoteItemContainer length={notesList.length}>
        {notesList.length === 0 ? (
          <>
            <NotesEmptyImg
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyHeading>No Notes Yet</EmptyHeading>
            <EmptyNotesMsg>Notes you add will appear here</EmptyNotesMsg>
          </>
        ) : (
          <>
            {notesList.map(each => (
              <NoteItem key={each.id} each={each} />
            ))}
          </>
        )}
      </NoteItemContainer>
    </MainContainer>
  )
}
export default Notes
