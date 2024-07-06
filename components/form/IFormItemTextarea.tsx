import { FC } from 'react'
import styled from 'styled-components'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import IFormErrorMessage from './IFormErrorMessage'
import ITextArea from '../textarea/ITextarea'

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

      <ITextArea register={register} name={name} />

      <IFormErrorMessage message={errorMessage} />
    </StyledIFormItemTextareaWrapper>
  )
}

const StyledIFormItemTextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export default IFormItemTextarea
