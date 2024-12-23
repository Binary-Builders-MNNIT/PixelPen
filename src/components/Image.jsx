import { IKImage } from "imagekitio-react"

const Image = ({src, className, w, h, alt}) => {
  return (
    <IKImage 
        className={className}
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        path={src}
        loading="lazy"
        alt={alt}
        width={w}
        height={h}
        lqip={{ active: true, quality: 20 }}
        transformation={[
          {
            width:w,
            height:h,
          },
        ]

        }
    />
  )
}

export default Image
