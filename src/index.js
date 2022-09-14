import ReactDOM from "react-dom";
import React from "react";
import './index.css'
import App from './App';

ReactDOM.render(  
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      document.getElementById('root')
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);