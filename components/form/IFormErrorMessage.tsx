import { FC } from 'react'
import styled from 'styled-components'

type IFormErrorMessageProps = {
  message?: string
}

const IFormErrorMessage: FC<IFormErrorMessageProps> = ({ message }) => {
  if (!message) return <></>
  return <StyledErrorMessage>{message}</StyledErrorMessage>
}

const StyledErrorMessage = styled.p`
  color: #c10000;
`

export default IFormErrorMessage
