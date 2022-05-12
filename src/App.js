import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <HomePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
