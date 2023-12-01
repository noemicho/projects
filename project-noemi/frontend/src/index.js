import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from '../src/App.js'
import '../src/index.css'

import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <BrowserRouter>
        <MainRoutes></MainRoutes>
    </BrowserRouter>
    
)