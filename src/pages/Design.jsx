import React, { useState } from 'react'
import Data from '../utils/mookData'
import { NavLink, Outlet } from 'react-router-dom'

const Design = () => {
    const [res, setRes] = useState(Data)
    return (
        <div className='flex '>
            <div className="sidebar flex ">
                <ul>
                    <details className="dropdown px-10 py-5">
                        <summary className="btn m-1">Ant-Design</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {
                                res.map((v) => (
                                    v.child?.map((i) => (
                                        <NavLink to={i.path}>
                                            <li>{i.title}</li>
                                        </NavLink>
                                    ))
                                ))
                            }
                        </ul>
                    </details>

                </ul>

                <div className="right_part">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Design
