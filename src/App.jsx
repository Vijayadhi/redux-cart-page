import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes'

function App() {
  return <RouterProvider router={new createBrowserRouter(AppRoutes)} />
}

export default App