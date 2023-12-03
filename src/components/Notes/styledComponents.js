// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 100vh;
  width: 100vw;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 40px;
  font-family: 'Bree serif';
  font-weight: 500;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 50%;
  max-height: 30%;
  box-shadow: 0px 0px 10px 0px;
`
export const TextInput = styled.input`
  padding: 8px;
  color: #475569;
  font-size: 18px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  margin-bottom: 10px;
`
export const TextAreaInput = styled.textarea`
  padding: 8px;
  color: #475569;
  font-size: 18px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  height: 50%;
  margin-bottom: 10px;
`
export const FormButton = styled.button`
  color: #ffffff;
  font-size: 17px;
  font-family: 'Roboto';
  padding: 8px;
  border: none;
  outline: none;
  background-color: #4c63b6;
  width: 100px;
  border-radius: 7px;
  align-self: flex-end;
  margin: 10px;
  cursor: pointer;
`
export const NoteItemContainer = styled.ul`
  display: flex;
  flex-direction: ${props => (props.length === 0 ? 'column' : 'row')};
  justify-content: ${props => (props.length === 0 ? 'center' : '')};
  align-items: ${props => (props.length === 0 ? 'center' : '')};
  padding: 10px;
  margin: 20px;
  width: 50%;
  height: 40%;
`
export const NotesEmptyImg = styled.img`
  height: 100px;
  width: 100px;
`
export const EmptyNotesMsg = styled.p`
  color: #334155;
  font-size: 14px;
  font-family: 'Roboto';
`
export const EmptyHeading = styled.h1`
  color: #334155;
  font-size: 17px;
  font-family: 'Roboto';
`
