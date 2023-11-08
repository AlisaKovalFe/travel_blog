import React from 'react';
import { Provider } from 'react-redux';
import './styles/App.css';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Main from './views/Main/Main';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
      <Footer/>
    </Provider>
  );
}

export default App;
