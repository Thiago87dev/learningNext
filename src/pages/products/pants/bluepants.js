import Link from "next/link";

export default function BluePants() {
  return (
    <>
      <h1>Calça azul - R$89,99</h1>
      <ul>
        <li><Link href="/products/pants">Voltar</Link></li>
      </ul>
    </>
  );
}
