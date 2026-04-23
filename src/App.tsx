import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Reflection from './components/Reflection';

function App() {
  return (
    <div className="container">
      <About />
      <Skills />
      <Projects />
      <Reflection />
      <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.6 }}>
        Built with React.js & TypeScript - 2026
      </footer>
    </div>
  );
}

export default App;
