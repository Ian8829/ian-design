import { FC } from 'react'
import Image from 'next/image'

export type ISimpleCardProps = {
  imgSrc: string
  description: string
}

const ISimpleCard: FC<ISimpleCardProps> = ({ imgSrc, description }) => {
  return (
    <div>
      <Image src={imgSrc} alt='simple card' width={24} height={24} />
      <p>{description}</p>
    </div>
  )
}

export default ISimpleCard
