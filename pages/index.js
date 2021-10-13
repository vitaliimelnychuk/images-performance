import { useRouter } from 'next/router'

import Head from 'next/head'
import ImageList from '../components/ImageList'
import Configuration from '../components/Configuration'

export default function Home() {
  const router = useRouter()

  if (!router.isReady) return <>loading...</>

  const defaultParams = {
    quality: 80,
    format: 'webp'
  }

  const { quality, format } = router.query

  if (!quality || !format) {
    const params = {}
    if (quality) params.quality = quality
    if (format) params.format = format

    const mergedWithDefaults = {
      ...defaultParams,
      params
    }

    router.push({
      pathname: '/',
      query: mergedWithDefaults
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Image performance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20">
        <div className="container mx-auto grid gap-4 grid-cols-1">
          <Configuration {...{ quality, format }} />
          {/* {(imagesConfigutation) => <ImageList {...imagesConfigutation} />} */}
          <ImageList {...{ quality, format }} />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  )
}
