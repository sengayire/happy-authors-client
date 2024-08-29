import Image from "next/image"
import React from "react"

type Props = {}

export default function ArticleImage({}: Props) {
  return (
 <div className="">
  <Image
    src="/card-image.webp"
    width={500}
    height={500}
    alt="Picture of the author"
    className="rounded-xl"
  /></div>
  )
}