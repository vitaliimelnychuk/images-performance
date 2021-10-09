import { useState } from 'react'

import Input from '../layout/Input'
import Button from '../layout/Button'

export default function Configuration({ children }) {
  const [quality, setQuality] = useState(80)
  const [renderProps, setRenderProps] = useState({})
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
        <Button onClick={() => setRenderProps({ quality })}>Render</Button>
      </div>
      {children(renderProps)}
    </>
  )
}
