import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#f6f6f6] text-gray-800 min-h-screen px-6 py-10 font-sans">
      <div className="max-w-3xl mx-auto space-y-14">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;