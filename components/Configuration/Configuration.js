import { useState } from 'react'
import { useRouter } from 'next/router'

import Input from '../layout/Input'
import Button from '../layout/Button'
import Select from '../layout/Select'

const imagesOptions = [
  {
    id: 'webp',
    label: 'webp'
  },
  {
    id: 'png',
    label: 'png'
  },
  {
    id: 'gif',
    label: 'gif'
  },
  {
    id: 'jpg',
    label: 'jpg'
  }
]

const findOption = (format) => imagesOptions.find(({ id }) => id === format)

export default function Configuration(props) {
  const router = useRouter()

  const defaultImageOption = findOption(props.format)
  const defaultFormat = defaultImageOption.id
  const defaultQuality = props.quality

  const [quality, setQuality] = useState(defaultQuality)
  const [format, setFormat] = useState(defaultImageOption)

  return (
    <>
      <div className="flex flex-row items-end gap-x-4">
        <Input
          label="Quality"
          name="quality"
          defaultValue={defaultQuality}
          placeholder="Enter quality value"
          onChange={(e) => setQuality(e.target.value)}
        />
        <Select
          label="Image format"
          options={imagesOptions}
          placeholder="Please select image format"
          defaultValue={defaultImageOption}
          onChange={(value) => setFormat(value.id)}
        />
        <Button
          onClick={() =>
            router.push({ pathname: '/', query: { quality, format } })
          }
        >
          Render
        </Button>
      </div>
    </>
  )
}
