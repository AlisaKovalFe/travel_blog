import './styles/App.css';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Main from './views/Main/Main';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
