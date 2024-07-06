import { FC } from 'react'
import styled from 'styled-components'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import IFormErrorMessage from './IFormErrorMessage'

type IFormItemInputProps = {
  label: string
  name: string
  register: UseFormRegister<FieldValues>
  errorMessage?: string
}

const IFormItemInput: FC<IFormItemInputProps> = ({
  name,
  label,
  register,
  errorMessage,
}) => {
  return (
    <StyledIFormItemInputWrapper>
      <label>{label}</label>
      <input {...register(name)} />
      <IFormErrorMessage message={errorMessage} />
    </StyledIFormItemInputWrapper>
  )
}

const StyledIFormItemInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    height: 32px;
    border: none;
    border-radius: 4px;
    padding: 0 4px;
    background-color: #262626;
  }
`

export default IFormItemInput
