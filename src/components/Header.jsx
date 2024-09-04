import React, { useState } from 'react'
import Data from '../utils/mookData'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [res, setRes] = useState(Data)
    return (
        <>
            <div className='flex justify-between items-center px-[100px] py-5'>
                {
                    res.map((v) => (
                        <NavLink to={v.path}>
                            <button className='text-black bg-green-600'>{v.title}</button>
                        </NavLink>
                    ))
                }
            </div>
        </>
    )
}

export default Header
