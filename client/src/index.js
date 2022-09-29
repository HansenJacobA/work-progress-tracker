import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './components/App'
import css from './index.css'

// const Root = () => (
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// )

const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<Root />);

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000);
