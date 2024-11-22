import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './routes/SignUp'
import Dashboard from './routes/Dashboard'
import SignIn from './routes/SignIn'

const App = () => {
    return (
        <>
            <BrowserRouter future={{
                v7_startTransition: true,
            }}>
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={<SignIn />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App