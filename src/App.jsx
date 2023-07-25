import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Income from './Pages/Income'
import Home from './Pages/Home'
import Expense from './Pages/expense'

function App() {


  return (

    <div className='mx-auto my-auto max-w-7xl'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/income' element={<Income/>}/>
          <Route path='/expense' element={<Expense/>}/>
          
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
