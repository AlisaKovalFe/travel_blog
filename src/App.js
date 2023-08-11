import './styles/App.css';
import { Helmet } from "react-helmet";
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Main from './views/Main/Main';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Travel blog</title>
        <meta name="description" content="Travel blog" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
