import { AspectRatio } from '@radix-ui/react-aspect-ratio'

export default function Video() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/0edsaUPs-OE"
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  )
}
