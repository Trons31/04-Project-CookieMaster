import { ChangeEvent, FC, useEffect, useState } from "react"
import { GetServerSideProps } from 'next'


import axios from 'axios'
import Cokkies from 'js-cookie';
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Typography } from "@mui/material"
import { CheckCircle } from '@mui/icons-material';

import { Layout } from "../components/layouts"

const MenuItem: string[] = ['Light', 'Dark', 'Custom'] 


interface Props { // TODO: DEFINIMOS LAS PROPS PARA PODER DESESTRUCTURAR EL TEMA QUE VIENE DEL SSR SABEMOS QUE LAS PROPS QUE ENVIAMOS DESDE EL SSR LLEGAN A MI COMPONENTE Y LAS PROPS QUE DEFINIMOS.
    theme: string; // TODO: DEFINIMOS UNA PROPERTY DE TIPO STRING, SERA EL TEMA QUE RECIBIREMOS DE LAS COOKIES DEL SSR
}




const ThemeChangePage:FC<Props> = ({ theme }) => {

    //console.log({props})

    const [currenTheme, setcurrenTheme] = useState(theme)

    const onChangeTheme = ( event: ChangeEvent<HTMLInputElement> ) => {
        // TODO: CREAMOS UNA CONSTANTE PARA ASIGNARLE EL VALOR QUE TIENE EL RADIO BUTTON CADA VEZ QUE SEA SELECCIONADO EL VALOR LO SACAMOS DEL EVENT.TARGET 
        const changeTheme = event.target.value;

        setcurrenTheme(changeTheme);
       
        // TODO: AQUI ESTAMOS MANDANDO VALORES A NUESTRAS COOKIES EN EL NAVEGADOR EN ESTE CASO EL TEMA QUE SELECCIONAMOS EN EL RADIO BUTTON 
        Cokkies.set('theme',changeTheme)

    }

    // TODO: Creamos una funcion que llamaremos en el button solicitud con el disparador onClick para que cada vez que se haga click desestructuremos en una constante la data de la respuesta que nos da la peticion get atravez de axios apuntando al api
    const onclick = async() => {
      const { data } = await axios.get('/api/hello') // TODO: Las cokkies viajan por la req entonces es facil obtenerlas ya que estamos ejecutando una req en la funcion onClik de tipo get, realmente no importa el tipo de REQUEST o req o solcitud las cookies siempre van con la req
      console.log(data) // Imprimimos la data
    }

    useEffect(() => {
     // TODO: Utilizaremos el useEffect para obtener la imformacion de nuestras cookies.
     console.log( 'Cookies', Cokkies.get('theme'));
     
     
        
    }, [])
    
     

  return (
    <Layout title="Cambiar tema">
        
        <Card>
            <CardContent  >
                
                <FormControl>
                    <FormLabel>Tema</FormLabel>
                   <RadioGroup
                     value={ currenTheme }
                     onChange={onChangeTheme}
                    >
                       {
                        MenuItem.map( item => (
                            //TODO:_ SIEMPRE QUE UTILIZAMOS MAP DEBEMOS UTILIZAR LA PROPIEDAD KEY EN NUESTRO COMPONENTE LA KEY QUE RECIBE ES EL VALOR DEL ARREGLO
                            <FormControlLabel  key={item}  value={item} control={ <Radio /> } label={ item }  />
                        ) )
                       }
                    </RadioGroup>
                </FormControl>
             
             <Button
             // TODO: funcion para utilizar el Api y traer las cookies
             onClick={ onclick }
             >
                Solicitud
             </Button>

            </CardContent>
        </Card>

    </Layout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  
    const { name =  'theme', theme = 'Light' } = req.cookies;

    // TODO: DEBIDO A QUE LAS COOKIES PUEDEN SER MANIPULADAS POR EL CLIENTE DEBEMOS AGREGAR UNAS VALIDACIONES.

    // TODO: CREAMOS UNA CONSTANTE PARA DEFINIR LOS TEMAS PERMITIDOS QUE VENDRAN DE LAS COOKIES
    const validTheme = ['Light', 'Dark', 'Custom'];
  
    return {
        props: {
            // TODO: Utilizamos el operdor ternario para hacer la validacion si el theme que viene incluye un theme de nuestra validTheme devolvemos el theme de lo contario devolvemos Light
            // variable = (condition) ? expressionTrue :  expressionFalse; == operador ternario
            theme: validTheme.includes( theme ) ? theme : 'Light',
            name
        }
    }
}

export default ThemeChangePage