import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav({children}) {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/" >Home</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact" >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}