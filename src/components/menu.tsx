import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
   return (<div>
    <Link to="/">Home</Link>
   <Link to="/custom">Custom</Link>
    </div>)
}

export default Menu