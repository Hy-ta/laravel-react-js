import React from 'react'
import { Link } from 'react-router-dom'

    const Header = () => (
        <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
            <div className="container">
                <Link className="navbar-brand text-dark" to='/project_lists'>Task_name</Link>
            </div>
        </nav>
    )
    

    export default Header

        