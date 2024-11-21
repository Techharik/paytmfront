import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './routes/SignUp'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App