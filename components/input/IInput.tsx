import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'

type ITextInputProps = {
  register?: UseFormRegister<FieldValues>
  name?: string
}

const IInput: FC<ITextInputProps> = ({ register, name }) => {
  if (!register || !name) {
    return <StyledIInput />
  }
  return <input {...register(name)} />
}

const StyledIInput = styled.input`
  height: 32px;
  border: none;
  border-radius: 4px;
  padding: 0 4px;
  background-color: #262626;
`

export default IInput
