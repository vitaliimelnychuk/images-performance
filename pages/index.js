import { useRouter } from 'next/router'

import Head from 'next/head'
import ImageList from '../components/ImageList'
import Configuration from '../components/Configuration'

export default function Home() {
  const { query, isReady } = useRouter()

  if (!isReady) return <>loading...</>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Image performance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20">
        <div className="container mx-auto grid gap-4 grid-cols-1">
          <Configuration {...{ query }}>
            {(imagesConfigutation) => <ImageList {...imagesConfigutation} />}
          </Configuration>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  )
}
