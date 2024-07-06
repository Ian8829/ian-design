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

const IFormItemTextarea: FC<IFormItemInputProps> = ({
  label,
  name,
  register,
  errorMessage,
}) => {
  return (
    <StyledIFormItemTextareaWrapper>
      <label>{label}</label>
      <textarea {...register(name)} />
      <IFormErrorMessage message={errorMessage} />
    </StyledIFormItemTextareaWrapper>
  )
}

const StyledIFormItemTextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  textarea {
    height: 160px;
    border: none;
    border-radius: 4px;
    padding: 4px;
    background-color: #262626;
  }
`

export default IFormItemTextarea
