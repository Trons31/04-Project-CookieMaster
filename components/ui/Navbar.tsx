import NextLink from 'next/link'

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
         size='large'
         edge='start'
        sx={{ color: 'white' }} >
          <MenuOutlined />
        </IconButton>

        <NextLink href="/" passHref >
          <Link  >
            <Typography variant='h6' color='white' > Cookie Master </Typography>
          </Link>
        </NextLink>
        
        <div style={{ flex: 1 }} /> { /* TODO: IMPORTANT CON ESTE DIV PODEMOS HACER UNA SEPARACION ENTRE DOS ELEMNETOS, DE LADO A LADO */ }

        <NextLink href='/theme-change' passHref >
            <Link>
              <Typography  variant='h6' color='white' >
                Cambiar tema 
              </Typography>
            </Link>
        </NextLink>


      </Toolbar>
    </AppBar>
  );
}
