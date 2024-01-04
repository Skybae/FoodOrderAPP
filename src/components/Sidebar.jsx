import React from 'react'
import { SidebarData } from './SidebarData'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}

                        ><NavLink
                            to={val.link}
                            className='row'
                            activeClassName='active'
                            exact={true}
                        // id={window.location.pathname === val.link ? "active" : ""}
                        // onClick={() => {
                        //     window.location.pathname = val.link;
                        // }}
                        >

                                <div id='icon'>{val.icon} </div>
                                <div id='title'> {val.title} </div>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
