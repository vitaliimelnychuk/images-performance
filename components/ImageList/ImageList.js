/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'

import { imagesUrls } from './data'

const getImageSize = async (imgURL) => {
  const filesize = await fetch(imgURL, { mode: 'cors' })
    .then((response) => response.blob())
    .then((blob) => Math.round(blob.size / 10) / 100)

  return filesize
}

const getImageData = async (
  imageUrl,
  { quality, format, fit, width, height }
) => {
  const source = `${imageUrl}?q=${quality}&fm=${format}&fit=${fit}&w=${width}&h=${height}`
  const size = await getImageSize(source)
  console.log('req')

  return {
    source,
    size
  }
}

const getImagesData = async (params) => {
  const images = await Promise.all(
    imagesUrls.map(async (imageUrl) => getImageData(imageUrl, params))
  )

  const totalSize = images
    .reduce((previousValue, { size }) => previousValue + size, 0)
    .toFixed(2)

  return { images, totalSize }
}

export default function Example({ quality, format, fit, width, height }) {
  const [images, setImages] = useState({ images: [], totalSize: 0 })

  const fetchImages = async (params) => {
    const imagesData = await getImagesData(params)
    setImages(imagesData)
  }

  useEffect(() => {
    fetchImages({ quality, format, fit, width, height })
  }, [quality, format, fit, width, height])

  return (
    <>
      Total: {images.totalSize} Kb
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {images.images.map((image) => (
          <li key={image.source} className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img
                src={image.source}
                alt={image.source}
                className="object-cover pointer-events-none group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {image.size} Kb
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
