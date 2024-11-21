import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [availableAmt, setAvailableAmt] = useState(0)
    const token = localStorage.getItem('tokenIn')
    const [contacts, setContacts] = useState([])
    const [searchs, setSearch] = useState('')
    const [popUp, setPopup] = useState(null)

    const sendMoney = async (id) => {
        setPopup(id)
    }

    const handleSubmit = async () => {
        try {

            const response = await axios.post('http://localhost:3000/api/v1/transferbalance', {
                recerverId: popUp,
                amount: 100
            }, {
                headers: {
                    Authorization: "Bearer " + token
                },


            })
            if (response.data.success == true) {
                // setAvailableAmt(response.data.amount)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        async function balance() {

            try {

                const response = await axios.get('http://localhost:3000/api/v1/checkbalance', {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                if (response.data.success == true) {
                    setAvailableAmt(response.data.amount)
                }
            } catch (e) {
                console.log(e)
            }
        }
        balance()
    }, [])

    useEffect(() => {
        async function search() {

            try {

                const response = await axios.get(`http://localhost:3000/api/v1/searchbulk?filter=${searchs}`, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                if (response.data.success == true) {
                    setContacts(response.data.message)
                }
            } catch (e) {
                console.log(e)
            }
        }
        search()
    }, [searchs])

    return (
        <div className='px-10'>
            <div className='h-[50px] flex justify-center items-center w-full bg-white'>
                Header
            </div>

            <div className='text-lg font-semibold '>
                <p>Your Bank Balance: {availableAmt}</p>
            </div>
            <div>
                <input type="text"
                    className='py-2 w-[300px] rounded-lg my-2 px-4'
                    placeholder='Search Contacts '
                    value={searchs}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div>
                    {
                        contacts.map((con) => {
                            return <p className='text-lg py-2 first-letter:capitalize flex justify-between w-[50%] border' key={con._id}>
                                <span>
                                    {con.firstname}
                                </span>
                                <span>
                                    <button className='bg-black text-sm p-2 rounded-lg font-semibold text-white px-4'
                                        onClick={() => sendMoney(con._id)}
                                    >
                                        Transfer
                                    </button>
                                </span>
                            </p>
                        })
                    }
                </div>
            </div>
            {
                popUp && <div className='bg-slate-600 z-40 absolute inset-0 bg-opacity-30 flex justify-center items-center'>
                    <div className='w-[300px] py-20 rounded-lg bg-white flex justify-center flex-col items-center'>
                        <p className='text-lg text-center py-5 font-semibold'>Enter the Amount</p>
                        <input type="text" placeholder='100' className='border border-black p-2 rounded-lg mt-1 w-[80%]'
                        // value={formDetails.firstname}
                        // name='firstname'
                        // onChange={(e) => handlechange(e)}
                        />
                        <div className='flex justify-between px-10 w-full gap-5'>

                            <button className=' bg-green-500  text-white font-semibold py-2 mt-6 rounded-lg hover:bg-opacity-80 px-3 flex-1'
                                onClick={handleSubmit}
                            >
                                Send
                            </button>
                            <button className=' border border-black  text-black font-semibold py-2 mt-6 rounded-lg hover:bg-opacity-80  px-3'
                                onClick={() => setPopup(null)}
                            >
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Dashboard