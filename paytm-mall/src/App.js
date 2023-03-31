import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
 

function App() {
  return (
    <Box className="App">
          <Navbar/>
          <AllRoutes/>
    </Box>
  );
}

export default App;
