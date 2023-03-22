import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from '../components/Hero'
import Job_board from '../components/Job_board'


export default function Home() {
  return (
    <>
      <Head>
        <title>Job Board</title>
        <meta name="description" content="One board, many jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/x" />
      </Head>
      <main className={styles.main}>
        
        <Hero />
        <Job_board />

      </main>
    </>
  )
}
