import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import ITimelineLinkedLine from './ITimelineLinkedLine'

export type ITimelineListItemProps = {
  title: string
  description: string
  isLast: boolean
  profileSrc: string | null
}

const ITimelineListItem: FC<ITimelineListItemProps> = ({
  title,
  description,
  isLast,
  profileSrc,
}) => {
  const defaultProfile = '/public/icons/default_profile.jpg'

  return (
    <StyledTimelineContainer>
      <StyledImagAndLineWrapper>
        <StyledImageProfile
          src={profileSrc ?? defaultProfile}
          alt='default image'
          width={24}
          height={24}
        />

        {!isLast && <ITimelineLinkedLine />}
      </StyledImagAndLineWrapper>

      <StyledTimelineDescriptions>
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </StyledTimelineDescriptions>
    </StyledTimelineContainer>
  )
}

const StyledTimelineContainer = styled.div`
  display: flex;
  gap: 16px;
`

const StyledImagAndLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const StyledImageProfile = styled(Image)`
  border-radius: 50%;
`

const StyledTimelineDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-size: 16px;
    font-weight: medium;
  }

  p {
    font-size: 16px;
    font-weight: regular;
    color: #ababab;

    @media (max-width: 431px) {
      font-size: 14px;
    }
  }
`

export default ITimelineListItem
