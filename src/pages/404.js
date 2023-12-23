import Link from "next/link";

export default function NotFound(){
    return(
        <>
            <h1>404</h1>
            <p>Parece que esta pagina não existe</p>
            <Link href='/'>Voltar</Link>
        </>
    )
}