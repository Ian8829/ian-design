import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'

type ITextAreaProps = {
  register?: UseFormRegister<FieldValues>
  name?: string
}

const ITextArea: FC<ITextAreaProps> = ({ register, name }) => {
  if (!register || !name) {
    return <StyledITextarea />
  }
  return <StyledITextarea {...register(name)} />
}

const StyledITextarea = styled.textarea`
  height: 160px;
  border: none;
  border-radius: 4px;
  padding: 4px;
  background-color: #262626;
`

export default ITextArea
