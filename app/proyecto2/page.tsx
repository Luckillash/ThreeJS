'use client'
import React from 'react'
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment, Stack, ThemeProvider, createTheme } from '@mui/material';

const Tema = createTheme({

    palette: {

        primary: {

            main: "#6b21a8"

        },

    }

})

export default function page() {

    return (

        <ThemeProvider theme={Tema}>


                <main className='w-screen h-screen flex bg-white'>

                    <section className='bg-white flex-1 flex items-center justify-center'>

                        <div className='w-1/2 grid gap-6'>

                            <Box component="div" sx={{ display: 'flex', alignItems: 'flex-end' }}>

                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                                <TextField fullWidth  id="input-with-sx" label="Correo" variant="standard" />

                            </Box>

                            <Box component="div" sx={{ display: 'flex', alignItems: 'flex-end' }}>

                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                                <TextField fullWidth id="input-with-sx" label="Contraseña" variant="standard" type='password' />

                            </Box>

                            <Stack spacing={2} direction="row">

                                <Button fullWidth variant="outlined" size="large">

                                    Acceder

                                </Button>

                                <Button fullWidth variant="outlined" size="large">

                                    Registrar

                                </Button>

                            </Stack>

                            
                        </div>

                    </section>

                    <section className='bg-gradient-to-br from-purple-500 to-purple-800 flex-1'></section>

                </main>
                

        </ThemeProvider>


    )

}
