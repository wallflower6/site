import styles from '../styles/Layout.module.css'
import Nav from './Nav'
// import Meta from './Meta'

export default function Layout({children}) {
    return (
        <>

        <Nav />
        
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}