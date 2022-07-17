import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { Button, Card } from '../components'

export default function Home() {
  const shouldGetInitialJoke = useRef(true)
  const [joke, setJoke] = useState(null)

  const getJoke = () => {
    fetch('/api/jokes')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data)
      })
  }

  useEffect(() => {
    if (shouldGetInitialJoke.current) {
      shouldGetInitialJoke.current = false
      getJoke()
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Don't laugh challenge</title>
        <meta name="description" content="Don't laugh challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Don't laugh challenge</h1>

      {joke && <Card>
        <p className={styles.description}>
          {joke.text}
        </p>

        <Button onClick={getJoke}>Next Joke</Button>
      </Card>}
    </div>
  )
}
