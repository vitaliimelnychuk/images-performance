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

const findOption = (format) => imagesOptions.find(({ id }) => id === format)

export default function Configuration({ children, query }) {
  const defaultImageOption = findOption(query.format) || imagesOptions[0]
  const defaultFormat = defaultImageOption.id
  const defaultQuality = query.quality || 80

  const [quality, setQuality] = useState()
  const [format, setFormat] = useState(defaultImageOption)
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
        <Button onClick={() => setRenderProps({ quality, format })}>
          Render
        </Button>
      </div>
      {children(renderProps)}
    </>
  )
}
