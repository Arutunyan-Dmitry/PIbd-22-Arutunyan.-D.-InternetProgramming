import React, { useState, useEffect } from 'react';
import './App.css';
import GitComponent from './GitComponent';
import { AppBar, Container, Toolbar, Box, Typography } from '@mui/material';

interface IGitRepo {
  owner: any,
  login: string
}

function App() {

  var [ OwnerName, setOwnerName ] = useState('');

    useEffect(() => {
        
        fetch(`https://api.github.com/users/vladdy-moses/repos`)
        .then(res => res.json())
        .then((res: IGitRepo[])  => {
          setOwnerName(OwnerName = res[0].owner.login);
        })
    }, []);

  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar> 
        <Typography marginRight={2} marginLeft={14} variant='h6'> Репозитории пользователя {OwnerName} </Typography>        
        </Toolbar>
      </Container>
  </AppBar>
    <Box sx={{ display: "flex", justifyContent: "center" }} marginTop={10}>
      <Box>
        <GitComponent />
      </Box>
    </Box>
    </>
  );
}

export default App;
