import { Box } from "@mui/material"
import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui";

interface Props { // Props que recibira nuestra Layout que sera de tipo FC o functional component 
    title? : string; // Props title que no sera obligatorio para ello ponemos al final de la props : ?
    children?: JSX.Element | JSX.Element[]; // Props para recibir hijos es decir para renderiazar codigo aqui de otros componentes de donde los mandemos a este componente
}

export const Layout:FC<Props> = ({title, children}) => { // Desestrucutramos las props
  return (
    <>
        <Head>
            <title> { title } </title>
        </Head>

      <nav>
       <Navbar />
      </nav>
     
      {/* Sidebar */}

      <main style={{ padding: '20px 50px' }} > { /* Aqui renderizaremos el cuerpo de nuestra pagina */}
        { children }  {/* Renderizazmos los Hijos que recibimos de otros componentes */}
      </main>

    </>
  )
}
