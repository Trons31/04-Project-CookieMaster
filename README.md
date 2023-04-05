# New Project
* Siempre que empezamos un nuevo proyecto, borramos todo lo que contiene el index, y el home.module.css de styles, y todo lo de global.css, para realizar nuestros estilos

## INSTALLATIONS NECESARY
* Material Ui : __yarn add @mui/material @emotion/react @emotion/styled__
* Material Ui Icons : __yarn add @mui/icons-material__
* JS-COOKIE : ___yarn add js-cookie ___ + ___ yarn add -D @types/js-cookie  ___

## IMPORTANT 
* la fuente que importamos de Material Ui debemos ponerla o nos recomiendan ponerla en el head de nuestro ___ _document.tsx__ y debemos crearlo con el snippet de nextdocument
## REACT
* los componentes de react siempre van con la primera letra en mayuscula los .tsx 
## NEXT
* Las paginas de next las tenemos que importar por defecto  o con el snippet de : RAFCE nos crea el codigo, y al nombre le damos la notacion al final Page : NombrePage


## COOKIES  
* Las cookies las utilizaremos para que cuando el cliente haga una solicitud, podamos regresar la imformacion especializada basada en lo que el busca, estas siempre viajan bajo request time.

## Layout
* El layout es un componente que creamos muy comun para la mayoria de nuestras paginas y suele tener la siguiente estructura:  el Box que lo contiene el Head que lleva el tiltle luego los componentes de : Navbar y Sidebar , y despues en otra Box renderizamos el cuerpo todo lo que estara dentro del layout que sera el cuerpo de nuestra página


## IMPORTANT SSR,SSG, 
* TODAS LAS FUNCIONES GetStaticProps,GetServerSideProps,GetStaticPaths,IntialProps, TODOS ESTOS SOLO FUNCIONAN SI ESTAMOS UTILIZANDO PAGINAS SI SON NEXTPAGE, O PARA SER MAS PRECISOS LOS COMPONENTES QUE ESTAN DENTRO DEL DIRECTORIO PAGES 

```
import { Box } from "@mui/material"
import Head from "next/head"
import { FC } from "react"

interface Props { // Props que recibira nuestra Layout que sera de tipo FC o functional component 
    title? : string; // Props title que no sera obligatorio para ello ponemos al final de la props : ?
    children?: JSX.Element | JSX.Element[]; // Props para recibir hijos es decir para renderiazar codigo aqui de otros componentes de donde los mandemos a este componente
}

export const Layout:FC<Props> = ({title, children}) => { // Desestrucutramos las props
  return (
    <Box>
        <Head>
            <title></title>
        </Head>

      {/*Navbar */}
      {/* Sidebar */}

      <Box>
        { children }  {/* Renderizazmos los Hijos que recibimos de otros componentes */}
      </Box>

    </Box>
  )
}

```