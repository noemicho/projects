import React from 'react';
import ReactDOM from 'react-dom/client';

import {Route, BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'

import Routes from '../src/routes.js'

const router = createBrowserRouter(Routes)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <RouterProvider router={router}/>
  </div>
)