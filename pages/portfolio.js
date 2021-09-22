import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {projects} from '../constants/constants'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Lindy Lim</title>
        <meta name="description" content="portfolio website" />
      </Head>

        <div className={styles.grid}>
          {
            projects.map((project, id) => {
                return (
                    <a href={project.link} target="_blank" className={styles.card} key={id}>
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                    </a>
                );
              }
            )}
        </div>

    </div>
  )
}
