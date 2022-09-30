import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import css from './index.css';

const Root = () => (<App />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
