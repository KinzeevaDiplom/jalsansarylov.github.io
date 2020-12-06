import React from 'react'
import { NavLink } from 'react-router-dom'



export default function MenuItem({page}) {
    return(
        <NavLink className="nav__item" activeClassName = 'nav__item-active' to = {page.path}>{page.title}</NavLink>   
    )
}