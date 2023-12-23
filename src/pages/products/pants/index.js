import Link from "next/link";

export default function Pants() {
  return (
    <>
      <h1>Pagina de calças</h1>
      <ul>
        <li><Link href="/products/pants/bluepants">Calça azul</Link></li>
        <li><Link href="/products/pants/redpants">Calça vermelha</Link></li>
        <li><Link href="/products">Voltar</Link></li>
      </ul>
    </>
  );
}
