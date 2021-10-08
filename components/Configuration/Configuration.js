import { useState } from 'react'

import Input from '../layout/Input'

export default function Configuration({ children }) {
  const [quality, setQuality] = useState(80)
  return (
    <>
      <div className="grid gap-4 grid-cols-4">
        <Input
          label="Quality"
          name="quality"
          defaultValue={80}
          placeholder="Enter quality value"
          onChange={(e) => setQuality(e.target.value)}
        />
      </div>
      {children({ quality })}
    </>
  )
}
