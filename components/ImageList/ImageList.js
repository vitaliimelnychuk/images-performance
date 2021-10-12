/* eslint-disable @next/next/no-img-element */

const host = 'https://images.unsplash.com'
const getFiles = ({ quality, format }) => [
  {
    source: `${host}/photo-1616927366799-d4cab1b7e545?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  },
  {
    source: `${host}/photo-1632222139524-46f1e74c7a00?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  },
  {
    source: `${host}/photo-1633110385650-f7a43ac6fce9?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  },
  {
    source: `${host}/photo-1632071929769-2c42d1c29c6a?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  },
  {
    source: `${host}/photo-1632259699908-793677e7ff13?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  },
  {
    source: `${host}/photo-1633463960820-5be13de85a74?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  },
  {
    source: `${host}/photo-1631649171966-60487005da38?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  },
  {
    source: `${host}/photo-1631490000790-f42d842e7c7a?crop=entropy&cs=tinysrgb&fit=max&q=${quality}&fm=${format}&w=1080`
  }
]

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
