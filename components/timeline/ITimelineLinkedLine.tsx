import styled from 'styled-components'

const ITimelineLinkedLine = () => {
  return (
    <StyledLinkedLines>
      <div />
      <div />
    </StyledLinkedLines>
  )
}

const StyledLinkedLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  div {
    width: 2px;
    background-color: #474747;
  }

  div:first-child {
    height: 32px;
  }

  div:last-child {
    height: 8px;
  }
`

export default ITimelineLinkedLine
