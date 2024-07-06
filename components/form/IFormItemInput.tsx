import { FC } from 'react'
import styled from 'styled-components'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import IFormErrorMessage from './IFormErrorMessage'
import IInput from '../input/IInput'

export type IFormItemInputProps = {
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
      <IInput register={register} name={name} />
      <IFormErrorMessage message={errorMessage} />
    </StyledIFormItemInputWrapper>
  )
}

const StyledIFormItemInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export default IFormItemInput
