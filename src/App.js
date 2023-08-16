import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import CalculatorItem from './components/CalculatorItem';
import QuotesItem from './components/QuotesItem';
import Home from './components/Home';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quotes', text: 'Quotes' },
];

const titleStyles = { color: '#000', fontSize: '35px' };

const App = () => (
  <div className="main-container">
    <nav>
      <h1 style={titleStyles}>Math Magician</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorItem />} />
        <Route path="/quotes" element={<QuotesItem />} />
      </Routes>
    </section>
  </div>
);

export default App;
