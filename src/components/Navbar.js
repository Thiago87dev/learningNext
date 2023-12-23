import Link from "next/link";

import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.link} href="/">Home</Link>
        </li>
        <li>
          <Link className={styles.link} href="/products">Produtos</Link>
        </li>
        <li>
          <Link className={styles.link} href="/todos">Tarefas</Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">Sobre</Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">Contato</Link>
        </li>
      </ul>
    </div>
  );
}
