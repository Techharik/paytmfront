import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './routes/SignUp'
import Dashboard from './routes/Dashboard'

const App = () => {
    return (
        <>
            <BrowserRouter future={{
                v7_startTransition: true,
            }}>
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/singin' element={<SignUp />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App