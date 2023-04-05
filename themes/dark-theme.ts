import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';



export const darkTheme = createTheme({
    palette: {
        mode: 'dark', // La propiedad mode es para el modo que queremos que sea el estilo dark: negro o light: un blanco
            secondary: { // Paleta de color que podemos definir para utilizar en nuestro componentes de material 
                main: '#19857b'
            },
            error: { // Paleta de color error
                main: red.A400
            },
        },

        components: {
            MuiAppBar: { // Llamamos a las propiedades que deseamos combiarle el aspecto que trae por defecto Material Ui,  con el complemento MUI antes del nombre de nuestra propiedad en esta caso MiuAppBar
                defaultProps: { // Aqui colocamos los valores que queremos que tenga nuestro AppBar como la POSITION, ELEVATION entre otros 
                    elevation: 0
                },// Propiedades por defecto que recibe nuestro Appbar como la elevation que es la sombra que sale debajo de nuestro Appbar
                styleOverrides: { // Aqui colocamos los estilos que queremos que tenga nuestro Appbar como el background o el color 
                    root: {
                        backgroundColor: '#4a148c' // Aqui cambiamos el color por defecto de nuestro AppBar
                    }
                }
            },

            
            
        }
});