import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
        <div>
            <Head>
                <title>Lindy Lim</title>
                <meta name="description" content="portfolio website" />
            </Head>

            <div className={styles.container}>
                <main>
                    <p>A third-year Computer Science undergraduate at <a href="https://www.smu.edu.sg/" target="_blank">Singapore Management University</a>, I have a varied range of skills and interests, and am actively seeking internships (for the summer and December breaks) to continue to learn and grow as well as contribute to an organisation.</p>
                    <p>I've had experience / am familiar with:</p>
                    <ul>
                        <li>Web development (HTML, CSS, JavaScript - vanilla, jQuery, React)</li>
                        <li>Game development with Unity</li>
                        <li>Amazon Web Services</li>
                        <li>Building Java applications</li>
                        <li>Python for general programming and data analysis</li>
                        <li>C for general programming</li>
                        <li>Agile practices</li>
                        <li>Databases with MySQL</li>
                        <li>Basic ethical hacking</li>
                    </ul>

                    <br />
                    <p>Additional stuff:</p>
                    <p><strong>Rails Girls</strong></p>
                    <p>Prior to university, I was actively involved with Rails Girls Kuala Lumpur (RGKL). Besides mentoring workshop participants in web development, I organised events for my local city chapter. Fun fact: I also joined Rails Girls London's event as it happened to take place when I was in London for vacation in December 2018. Here are a couple of interviews I have contributed to as part of RGKL:</p>
                    <p><a href="https://blog.surialabs.com/empowering-women-in-tech-rails-girls-kl/" target="_blank">SuriaLabs: Empowering Women in Tech</a></p>
                    <p><a href="https://www.makchic.com/rails-girls-kuala-lumpur-opening-the-world-of-coding-to-girls/" target="_blank">MakChic: Opening the world of coding to girls</a></p>
                </main>
            </div>
        </div>
    </>
  )
}
