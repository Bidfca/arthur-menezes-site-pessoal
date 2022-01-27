import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { About, HomePage, Contact, Curriculo } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/about" component={About} />
      <Route path="/homePage" component={HomePage} />
      <Route path="/contact" component={Contact} />
      <Route path="/curriculo" component={Curriculo} />
      </BrowserRouter>
      app
    </div>
  );
}

export default App;
