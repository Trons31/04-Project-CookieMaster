import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../components/layouts/';


const Home: NextPage = () => {
  return (
    /* TODO: TODO LO QUE PASEMOS AQUI SERAN LOS CHILDREN O HIJOS QUE RECIBA NUESTRO COMPONENTE layout */ 
    <Layout> 
      <Typography variant='h4' > Hola mundo </Typography>
    </Layout>
  )
}

export default Home
