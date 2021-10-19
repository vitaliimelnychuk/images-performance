/* eslint-disable @next/next/no-img-element */
import { imagesUrls } from './data'
//`${host}/photo-1616927366799-d4cab1b7e545?crop=entropy&cs=tinysrgb&fit=max&&w=1080`

const getFiles = ({ quality, format }) =>
  imagesUrls.map((imageUrl) => ({
    source: `${imageUrl}?q=${quality}&fm=${format}`
  }))

export default function Example({ quality, format }) {
  const files = getFiles({ quality, format })

  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img
              src={file.source}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
