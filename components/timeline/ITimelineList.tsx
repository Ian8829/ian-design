import { FC } from 'react'
import styled from 'styled-components'

import ITimelineListItem, { ITimelineListItemProps } from './ITimelineListItem'

export type ITimelineListProps = {
  timelineData: Omit<ITimelineListItemProps, 'isLast'>[]
}

const ITimelineList: FC<ITimelineListProps> = ({ timelineData }) => {
  return (
    <StyledTimelineListWrapper>
      {timelineData.map((data, idx) => {
        const isLast = idx === timelineData.length - 1

        return (
          <ITimelineListItem
            key={`${idx}-${data.title}`}
            {...data}
            isLast={isLast}
          />
        )
      })}
    </StyledTimelineListWrapper>
  )
}

const StyledTimelineListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export default ITimelineList
