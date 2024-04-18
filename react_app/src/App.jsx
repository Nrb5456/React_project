import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoList from './Pages/TodoList'

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<TodoList />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App