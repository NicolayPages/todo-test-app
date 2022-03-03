import * as React from 'react';
import './assets/styles/app.scss';
import AppRouter from './components/AppRouter/AppRouter';
import ErrorPopup from './components/ErrorPopup/ErrorPopup';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <AppRouter />
        <ErrorPopup />
      </main>
      <Footer />
    </div>
  )
}

export default App;
