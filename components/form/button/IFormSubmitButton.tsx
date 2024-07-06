import { useState } from 'react'
import styled from 'styled-components'

const IFormSubmitButton = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = (): void => {
    setClickState()

    setDebouncer()
  }

  const setClickState = (): void => {
    setTimeout(() => {
      setIsClicked(true)
    }, 50)
  }

  const setDebouncer = (): void => {
    setTimeout(() => {
      setIsClicked(false)
    }, 5000)
  }

  return (
    <StyledSubmitButton
      type='submit'
      onClick={() => handleClick()}
      disabled={isClicked}
    >
      Submit
    </StyledSubmitButton>
  )
}

const StyledSubmitButton = styled.button`
  background-color: #262626;
  color: ${(props) => (props.disabled ? '#ababab' : '#fff')};
  border: none;
  height: 42px;
  border-radius: 4px;
`

export default IFormSubmitButton
