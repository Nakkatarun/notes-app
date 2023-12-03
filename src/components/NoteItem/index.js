// Write your code here
import {ListContainer, ListHeading, ListParagraph} from './styledComponents'

const NoteItem = props => {
  const {each} = props
  const {inputText, textAreaInput} = each
  return (
    <ListContainer>
      <ListHeading>{inputText}</ListHeading>
      <ListParagraph>{textAreaInput}</ListParagraph>
    </ListContainer>
  )
}

export default NoteItem
