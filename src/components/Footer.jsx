import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import { Link } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

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
                <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=piyushthakur3769@gmail.com&tf=1">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<EmailIcon/>}
                />
                </Link>
                <Link href="https://github.com/piyush-cosmo">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<GitHub/>}
                />
                </Link>
                <Link href="https://www.linkedin.com/in/cosmo3769/">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedIn/>}
                />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100009950980357">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<FacebookIcon/>}
                />
                </Link>
                <Link href="https://www.instagram.com/cosmo_3769/?hl=en">
                <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<InstagramIcon/>}
                />
                </Link>
        </BottomNavigation>
    )
}

export default Footer;