import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Products() {
  const [bgColor, setBgcolor] = useState();
  const [caminhoImg, setCaminhoImg] = useState("/images/manha.png");
  const [saudacao, setSaudacao] = useState();
  const [horaAtual, setHoraAtual] = useState();
  const [minutoAtual, setminutoAtual] = useState();
  const [segundosAtual, setSegundosAtual] = useState();

  useEffect(() => {
    function updateTime() {
      const currentHour = new Date().getHours();
      const currentMinutes = new Date().getMinutes();
      const currentseconds = new Date().getSeconds();
      setHoraAtual(currentHour);
      setminutoAtual(currentMinutes);
      if(currentseconds < 10){
        setSegundosAtual(`0${currentseconds}`);
      } else{
        setSegundosAtual(currentseconds )
      }

      if (currentHour >= 6 && currentHour < 12) {
        setBgcolor("blue");
        setCaminhoImg("/images/manha.png");
        setSaudacao("Bom dia");
      } else if (currentHour >= 12 && currentHour < 18) {
        setBgcolor("green");
        setCaminhoImg("/images/tarde.png");
        setSaudacao("boa tarde");
      } else {
        setBgcolor("#ffcbdb");
        setCaminhoImg("/images/noite.png");
        setSaudacao("boa noite");
      }
    }

    updateTime();

    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, []);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Image src={caminhoImg} width={300} height={300} alt="manha" />
      <h1>Products</h1>
      <h2>
        Agora são {horaAtual}:{minutoAtual}:{segundosAtual}
      </h2>
      <h2>{saudacao}</h2>
      <ul>
        <li>
          <Link href="/products/shirt">Camisetas</Link>
        </li>
        <li>
          <Link href="/products/pants">Calças</Link>
        </li>
        <li>
          <Link href="/">Voltar</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
