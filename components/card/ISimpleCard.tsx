import { FC } from 'react'
import Image from 'next/image'

export type ISimpleCardProps = {
  imgName: string
  description: string
}

const ISimpleCard: FC<ISimpleCardProps> = ({ imgName, description }) => {
  return (
    <div>
      <Image
        src={`/images/${imgName}.jpg`}
        alt='simple card'
        width={24}
        height={24}
      />
      <p>{description}</p>
    </div>
  )
}

export default ISimpleCard
