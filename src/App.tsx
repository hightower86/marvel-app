import { Container, CssBaseline, Paper, Toolbar } from '@material-ui/core';
import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Toolbar />
      <Container>

        <Paper />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
