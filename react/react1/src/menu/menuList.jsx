import React from 'react'
import MenuItem from './menuItem'

export default function MenuList() {
    const pages = [
        {id:1, path:'/', title: 'home'},
        {id:2, path:'/todo', title: 'todo'}
    ]

    return(
        
        <nav className="nav">
            {
                pages.map(page => {
                    return(
                        <MenuItem page = {page} key = {page.id} />
                    )
                })
            }
        </nav>   
        
    )
    
}