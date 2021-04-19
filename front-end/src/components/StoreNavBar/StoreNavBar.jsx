import React from 'react'
import  {AppBar, IconButton, Badge, Menu, MenuItem, Typography, Toolbar } from '@material-ui/core'

import {ShoppingCart} from '@material-ui/icons'

import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/greencube.png'
import useStyles from './styles'


const StoreNavBar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation();

    return (
        <>
            <AppBar position="relative" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography component={Link} to="/">
                        <img src={logo} alt="ecommerce js" height="25px" className={classes.image}/>
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                    

                </Toolbar>
            </AppBar>
        </>
    )
}

export default StoreNavBar
