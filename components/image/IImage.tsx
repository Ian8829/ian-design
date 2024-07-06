import { FC, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

type IImageProps = {
  imgSrc: string
  width: number
  height: number
  alt: string
  style?: React.CSSProperties
}

const IImage: FC<IImageProps> = ({ imgSrc, width, height, alt, style }) => {
  const [isFalseImg, setIsFalseImg] = useState(false)
  const defaultImgSrc = '/images/default_img.jpg'

  return isFalseImg ? (
    <StyledIImage
      src={defaultImgSrc}
      alt='default image'
      width={width}
      height={height}
      style={style}
    />
  ) : (
    <StyledIImage
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onLoad={() => {
        setIsFalseImg(false)
      }}
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsFalseImg(true)
      }}
      style={style}
    />
  )
}

const StyledIImage = styled(Image)`
  border-radius: 12px;
`

export default IImage
