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
  },
  {
    id: 'avif',
    label: 'avif'
  }
]

const fitOptions = [
  {
    id: 'clip',
    label: 'clip'
  },
  {
    id: 'clamp',
    label: 'clamp'
  },
  {
    id: 'crop',
    label: 'crop'
  },
  {
    id: 'facearea',
    label: 'facearea'
  },
  {
    id: 'fill',
    label: 'fill'
  },
  {
    id: 'fillmax',
    label: 'fillmax'
  },
  {
    id: 'max',
    label: 'max'
  },
  {
    id: 'min',
    label: 'min'
  },
  {
    id: 'scale',
    label: 'scale'
  }
]

const findOption = (options, optionId) =>
  options.find(({ id }) => id === optionId)

export default function Configuration(props) {
  const router = useRouter()

  const defaultQuality = props.quality
  const defaultHeight = props.height
  const defaultWidth = props.width

  const defaultImageOption = findOption(imagesOptions, props.format)
  const defaultFitOption = findOption(fitOptions, props.fit)

  const [quality, setQuality] = useState(defaultQuality)
  const [width, setWidth] = useState(defaultWidth)
  const [height, setHeight] = useState(defaultHeight)
  const [format, setFormat] = useState(defaultImageOption.id)
  const [fit, setFit] = useState(defaultFitOption.id)

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
          label="Fit"
          options={fitOptions}
          placeholder="Please select fit format"
          defaultValue={defaultFitOption}
          onChange={(value) => setFit(value.id)}
        />

        <Input
          label="Width"
          name="width"
          defaultValue={defaultWidth}
          placeholder="Enter width value"
          onChange={(e) => setWidth(e.target.value)}
        />
        <Input
          label="Height"
          name="height"
          defaultValue={defaultHeight}
          placeholder="Enter height value"
          onChange={(e) => setHeight(e.target.value)}
        />
        <Select
          label="Image format"
          options={imagesOptions}
          placeholder="Please select image format"
          defaultValue={defaultImageOption}
          onChange={(value) => setFormat(value.id)}
        />

        <Button
          onClick={() => {
            router.push({
              pathname: '/',
              query: { quality, format, width, height, fit }
            })
          }}
        >
          Render
        </Button>
      </div>
    </>
  )
}
