import { useState } from 'react'

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

const defaultImageOption = imagesOptions[0]
const defaultQuality = 80
const defaultFormat = defaultImageOption.id

export default function Configuration({ children }) {
  const [quality, setQuality] = useState(80)
  const [format, setFormat] = useState(defaultImageOption.id)
  const [renderProps, setRenderProps] = useState({
    quality: defaultQuality,
    format: defaultFormat
  })

  return (
    <>
      <div className="flex flex-row items-end gap-x-4">
        <Input
          label="Quality"
          name="quality"
          defaultValue={80}
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
        <Button onClick={() => setRenderProps({ quality, format })}>
          Render
        </Button>
      </div>
      {children(renderProps)}
    </>
  )
}
