import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
