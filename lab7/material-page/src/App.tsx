import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Container, Toolbar, Box, Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { flexbox, maxWidth } from '@mui/system';

function createData(date: number, day: string, name: string, age: number) {
  return { date, day, name, age };
}

const rows = [
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
  createData(17.01, "ПТ", "А. С. Пушкин Метель", 12),
];

function App() {
  return (
    <>
    <AppBar position="fixed">
      <Container sx={{ display: "flex", justifyContent: "center"}}>
        <Toolbar> 
        <Typography marginRight={2} variant='h6'>Молодёжный театр</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Театр</Button>
          </Box>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Репертуар</Button>
          </Box>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Касса</Button>
          </Box>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Актёры</Button>
          </Box>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Контакты</Button>
          </Box>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Vk</Button>
          </Box>
        </Toolbar>
      </Container>
  </AppBar>
  <main>
    <Typography marginLeft={34} marginTop={10} marginBottom={5} variant='h3' fontWeight={700} sx={{ color: "#2d67cc" }}>Репертуар театра:</Typography>
    <TableContainer component={Paper} sx={{ display: "flex", justifyContent: "center" }}>
      <Table sx={{ minWidth: 650, maxWidth: 650, backgroundColor: "#F0F8FF" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Дата</TableCell>
            <TableCell align="center">День</TableCell>
            <TableCell align="center">Название спектакля</TableCell>
            <TableCell align="center">Возр. Огр</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="center">{row.day}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.age + "+"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <Box marginRight={10} marginLeft={10}>
          <Button sx={{ backgroundColor: "#1E90FF", color: "#FFF" }} variant="outlined">Март</Button>
        </Box>
        <Box marginRight={10} marginLeft={10}>
            <Button sx={{ backgroundColor: "#1E90FF", color: "#FFF" }} variant="outlined">Апрель</Button>
        </Box>
        <Box marginRight={10} marginLeft={10}>
            <Button sx={{ backgroundColor: "#1E90FF", color: "#FFF" }} variant="outlined">Май</Button>
        </Box>
    </Box>
  </main>
  <footer>
    <Box sx={{ backgroundColor: "#1E90FF"}} >
    <Typography sx={{ color: "#FFF", padding: 3 }} variant='h5' align="center">Информация</Typography>
      <Box> 
      <Typography sx={{ color: "#FFF"}} align="center">Повседневная практика показывает, что курс на социально-ориентированный национальный проект</Typography>
      <Typography sx={{ color: "#FFF"}} align="center">требует от нас системного анализа позиций, занимаемых участниками в отношении поставленных</Typography>
      <Typography sx={{ color: "#FFF"}} align="center">задач? Не следует, однако, забывать о том, что сложившаяся структура организации напрямую</Typography>
      <Typography sx={{ color: "#FFF", paddingBottom: 3 }} align="center">зависит от ключевых компонентов планируемого обновления.</Typography>
      </Box>
    </Box>
  </footer>
</>
  );
}

export default App;