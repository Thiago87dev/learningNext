import Link from "next/link";
// import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await res.json()

  const paths = data.map((todo) => {
    return{
      params: {
        todoId: `${todo.id}`
      }
    }
  })
  return{paths, fallback: false}
}

export default function Todo({ todo }) {
  // const router = useRouter();
  // const todoId = router.query.todoId;

  return (
    <>
      <Link href="/">Voltar</Link>
      <h1>Exibindo a tarefa: {todo.id}</h1>
      <h3>Titulo: {todo.title}</h3>
      <p>
        Comentario: bla bla bla...
        <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentario: ble ble ble...
        <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentario: blo blo blo...
        <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link>
      </p>
    </>
  );
}
