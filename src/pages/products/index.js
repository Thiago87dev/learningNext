import Link from "next/link";

export default function Products(){
    return (
        <>
          <h1>Products</h1>
          <ul>
            <li><Link href="/products/shirt">Camisetas</Link></li>
            <li><Link href="/products/pants">Calças</Link></li>
            <li><Link href="/">Voltar</Link></li>
            <li></li>
          </ul>
        </>
      );
}