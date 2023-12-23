import Link from "next/link";

export default function RedPants(){
    return (
        <>
          <h1>Calça vermelha - R$79,99</h1>
          <ul>
            <li><Link href="/products/pants">Voltar</Link></li>
          </ul>
        </>
      );
}