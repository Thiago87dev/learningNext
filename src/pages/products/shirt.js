import Link from "next/link";

export default function Shirt() {
  return (
    <>
      <h1>pagina de camisas</h1>
      <h1>Camisa - R$29,99</h1>
      <ul>
        <li><Link href="/products">voltar</Link></li>
      </ul>
    </>
  );
}
