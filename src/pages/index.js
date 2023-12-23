import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title> Pagina Home </title>
      <meta name="keywords" content="calça, camisa, boné"/>
      <meta name="description" content="Encontre a melhor roupa para voce"/>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home</h1>
        <Image src="/images/pinguin.png" width={300} height={300} alt="Pinguins"/>
        <ul>
          <li>
            <Link href="/products">Produtos</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
