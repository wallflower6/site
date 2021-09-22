import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Head>
        <title>Lindy Lim</title>
        <meta name="description" content="portfolio website" />
      </Head>
        <hr></hr>
        <p><a href="https://www.linkedin.com/in/lindylim/" target="_blank">LinkedIn</a></p>
        <hr></hr>
        <p><a href="https://github.com/wallflower6" target="_blank">Github</a></p>
        <hr></hr>
        <p><a href="https://codepen.io/wallflower6" target="_blank">Codepen</a></p>
        <hr></hr>
        <p>Email: lindy.lim.2019@scis.smu.edu.sg</p>
    </div>
  )
}