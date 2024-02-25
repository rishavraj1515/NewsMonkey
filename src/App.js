import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <News key="homely" pageSize={5} country="in" />
  },
  {
    path: '/home',
    element: <News key="home" pageSize={5} country="in"/>
  },
  {
    path: '/sports',
    element: <News key="sports" pageSize={5} country="in" category="sports" />
  },

  {
    path: '/business',
    element: <News key="business" pageSize={5} country="in" category="business" />
  },

  {
    path: '/entertainment',
    element: <News key="entertainment" pageSize={5} country="in" category="entertainment" />
  },

  {
    path: '/general',
    element: <News key="us" pageSize={5} country="us"  />
  },

  {
    path: '/health',
    element: <News key="health" pageSize={5} country="in" category="health" />
  },
  {
    path: '/science',
    element: <News key="science" pageSize={5} country="in" category="science" />
  },
  {
    path: '/sports',
    element: <News key="sports" pageSize={5} country="in" category="sports" />
  },
  {
    path: '/technology',
    element: <News key="technology" pageSize={5} country="in" category="technology" />
  },
 
]);


export default class App extends Component {

  render() {
    
    return (
      <div>
      <Navbar />
      <RouterProvider router={router}>    
       </RouterProvider>
       </div>
      
    )
  }
}