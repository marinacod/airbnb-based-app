import './App.css'
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LabelBottomNavigation from './components/BottomNavigation/BottomNavigation';

const airBnbTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff7779',
    },
    secondary: {
      main: '#ffffff',
    }
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={airBnbTheme}>
        <Router>

          <Header/>
          <main>
            <Routes>
              <Route path='/search' element={<SearchPage/>}/>
                
              <Route path='/' element={<Home/>}/>     
            </Routes>
          </main>

          <Footer/>
          
          <LabelBottomNavigation/>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
