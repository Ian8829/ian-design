'use client'

import { FC } from 'react'
import styled from 'styled-components'

type IMainContainerProps = {
  children: React.ReactNode
}

const IMainContainer: FC<IMainContainerProps> = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>
}

const StyledMainContainer = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 36px 0;
`

export default IMainContainer
