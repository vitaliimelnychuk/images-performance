import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import ImageList from '../components/ImageList'
import Configuration from '../components/Configuration'

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [params, setParams] = useState({})

  useEffect(() => {
    const defaultParams = {
      quality: 80,
      format: 'webp',
      fit: 'clip',
      width: 1024,
      height: 768
    }
    if (router.isReady) {
      const mergedWithDefaults = {
        ...defaultParams,
        ...router.query
      }

      setParams(mergedWithDefaults)

      setIsLoading(false)
    }
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Image performance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main className="flex flex-col w-full flex-1 px-20">
          <div className="container mx-auto grid gap-4 grid-cols-1">
            <Configuration {...params} />
            {/* {(imagesConfigutation) => <ImageList {...imagesConfigutation} />} */}
            <ImageList {...params} />
          </div>
        </main>
      )}

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  )
}
