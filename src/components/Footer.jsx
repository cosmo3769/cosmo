import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import { Link } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes= useStyles()
    return (
        <BottomNavigation 
        width="auto" 
        style={{
            background: "#222"}}>
                <Link href="https://github.com/piyush-cosmo">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<GitHub/>}
                />
                </Link>
                <Link href="https://www.linkedin.com/in/piyush-thakur-004279184/">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedIn/>}
                />
                </Link>
                <Link href="https://twitter.com/PiyushT04350603">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<Twitter/>}
                />
                </Link>
        </BottomNavigation>
    )
}

export default Footer;