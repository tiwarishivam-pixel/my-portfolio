import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-primary text-light transition-colors duration-200">
          <Navbar />
          <AppRoutes />
          <ToastContainer
            position="bottom-right"
            theme="dark"
            autoClose={3000}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 