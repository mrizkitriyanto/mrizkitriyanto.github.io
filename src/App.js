import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import about from './pages/about';
import articles from './pages/articles';
import contact from './pages/contact';
import { Switch, Route } from 'react-router-dom';




function App() {

  return (
    <>
      <Navbar />
      {/* Menggunakan Route untuk menghubungkan ke halaman lainnya */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={about} />
        <Route path="/articles" component={articles} />
        <Route path="/contact" component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
