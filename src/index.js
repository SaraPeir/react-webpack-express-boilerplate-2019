import React from 'react';
import ReactDOM from 'react-dom';
import LOGO from './images/campania-logo.jpg';
import './styles.scss';

const Index = () => {
  return (
    <div>
      <p>Regione Campania</p>
      <img src={LOGO} alt="Page Logo" />
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById('root'));