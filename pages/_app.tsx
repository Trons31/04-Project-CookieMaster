import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { customTheme, darkTheme, lightTheme } from '../themes'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// TODO: DEFINIMOS LAS PROPS QUE HEREDERAN DE APPPROPS MEDIANTE LA PALABRA EXTENDS TODAS LAS PROPIEDADES QUE TIENE APPPROPS
interface Props extends AppProps {
theme: string; // TODO: DEFINIMOS LAS PROPS THEME QUE VIENEN DE GETINITIALPROPS;
}


function MyApp({ Component, pageProps, theme = 'Dark' }: Props) { // TODO: TIPAMOS LA DESESTRUCTURACION CON NUESTRAS PROPS

  //console.log({rest})

  // DEFINIMOS UN STATE PARA MANEJAR LOS TEMAS CON EL VALOR INICAL DEL TEMA LIGHTTHEME
  const [currenTheme, setcurrenTheme] = useState(lightTheme);

  useEffect(() => {
    // Obtenemos la cookie que nos estan enviando.
    const cookieTheme = Cookies.get('theme') || 'Light';
    
    // Valido la cookie que me envian para poder renderizar el tema respectivo y devolver mi imformacion de acuerdo al cliente
    const SelectTheme = cookieTheme === 'Light'
    ? lightTheme
    : cookieTheme === 'Dark'
    ? darkTheme 
    : customTheme;

   setcurrenTheme( SelectTheme);// TODO: ACTUALIZAMOS LA IMFORMACION DEL STATE QUE MANEJA NUESTROS THEMES CON LA COOKIE VIENE DE LA REQUEST QUE SERA IGUAL A UN TEMA Y ACTUALIZAMOS EL STATE CON EL TEMA QUE VIENE 

  }, [])
  


  return (
    
 <ThemeProvider theme={ currenTheme } > {/*Utilizamos el ThemeProvider propiedad de Material Ui para aplicar nuestros temas e Importamos el tema que vamos a utilizar en nuestra aplicacion */}
  <CssBaseline /> { /* TODO: DEFINIMOS EL CSSBASELINE PARA PODER EJECUTAR LOS ESTILOS DE NUESTRO TEMA */ }
   <Component {...pageProps} />
 </ThemeProvider>
  )
}

// TODO: EN NUESTRO APP PODEMOS LEER LAS COOKIES Y UTILIZAR LAS FUNCIONES: GetStaticProps,GetServerSideProps,GetStaticPaths,IntialProps,

// MyApp.getInitialProps = async( appContext : AppContext) => {

//   // Definimos una constante que almacenara nuestras cookies obtenidas  de la request del context o del ctx de AppContext.
//   const {theme} = appContext.ctx.req ? ( appContext.ctx.req as any ).cookies : {theme: ' Light '};
  
//   //console.log('GetinitialProps: ',cookies);

//   const validTheme = ['Light', 'Dark', 'Custom'];


//   return{
//     // TODO: DEVOLVEMOS EN LAS PROPS QUE LLEGARAN A NUESTRO MYAPP Y PODREMOS OBTENERLAS Y UTILIZAR EL THEME  
//      theme: validTheme.includes(theme) ? theme : 'Dark',
//   }
// }

export default MyApp
