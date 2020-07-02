import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "@material-ui/core";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import {mergeClasses} from '@material-ui/styles';
import Navbar from "./Navbar";

import portfolio from "../images/portfolio.png";
import motionDetector from "../images/motion.png";
import faceDetector from "../images/face-detector.png";
import edgeDetector from "../images/edge-detector.png";
import flaskDlApp from "../images/recogniser.png";
import lineFollower from "../images/lineFollower.png";
import tetris from "../images/tetris.jpg";

import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})

const Projects = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={mergeClasses.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/*portfolio*/}
                <Grid item x5={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="portfolio"
                            height="140"
                            image={portfolio} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Portfolio
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is my portfolio where my skills are illustrated.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <GitHubIcon />
                                <Link href="https://github.com/piyush-cosmo/cosmo">
                                    Github
                                </Link>
                                <PlayCircleFilledIcon />
                                <Link href="https://github.com/piyush-cosmo/cosmo">
                                    Live
                                </Link>
                            </CardActions>
                </Card>
                </Grid>
                {/*motion-detector*/}
                <Grid item x5={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="motion-detector"
                            height="140"
                            image={motionDetector} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Motion_Detector_openCV
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This project of detecting motion is done with openCV. 
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <GitHubIcon />
                                <Link href="https://github.com/piyush-cosmo/motion_detector_using_openCV">
                                    Github
                                </Link>
                                <Button size="small" color="primary">
                                    Livedemo
                                </Button>
                            </CardActions>
                </Card>
                </Grid>
                {/*face-detector*/}
                <Grid item x5={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="face-detector"
                            height="140"
                            image={faceDetector} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Face_Detector_openCV
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This project of detecting face is done with openCV and pretrained HaarCascade model. 
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <GitHubIcon />
                                <Link href="https://github.com/piyush-cosmo/face_recognition_opencv_cascade">
                                    Github
                                </Link>
                                <Button size="small" color="primary">
                                    Livedemo
                                </Button>
                            </CardActions>
                </Card>
                </Grid>
                {/*edge-detector*/}
                <Grid item x5={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="edge-detector"
                            height="140"
                            image={edgeDetector} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Edge_Detector_openCV
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This project of detecting edges is done with openCV and Canny edge function.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <GitHubIcon />
                                <Link href="https://github.com/piyush-cosmo/canny_edge_detection_openCV">
                                    Github
                                </Link>
                                <Button size="small" color="primary">
                                    Livedemo
                                </Button>
                            </CardActions>
                </Card>
                </Grid>
                {/*hanwritten-digit-recogniser-app*/}
                <Grid item x5={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="HandWrittenDigitRecogniser"
                            height="140"
                            image={flaskDlApp} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    HandWrittenDigitRecogniser app
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This project of detecting handwritten digits is done with deep learning and flask. Deep learning was used to train 
                                    on MNIST dataset and Flask was used to get the api to render on browser.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <GitHubIcon />
                                <Link href="https://github.com/piyush-cosmo/DL_FLASK_WEB_APP">
                                    Github
                                </Link>
                                <Button size="small" color="primary">
                                    Livedemo
                                </Button>
                            </CardActions>
                </Card>
                </Grid>
                {/*line follower*/}
                <Grid item x5={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="lineFollower"
                            height="140"
                            image={lineFollower} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Line Follower Bot
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This project of Line Follower Bot is done with Arduino, ir8array sensor, L298 motor driver. It follows black/white line.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <GitHubIcon />
                                <Link href="https://github.com/piyush-cosmo/RACLOF">
                                    Github
                                </Link>
                                <Button size="small" color="primary">
                                    Livedemo
                                </Button>
                            </CardActions>
                </Card>
                </Grid>
                {/*tetris*/}
                <Grid item x5={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="tetris"
                            height="140"
                            image={tetris} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Tetris
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is a basic Tetris game.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <GitHubIcon />
                                <Link href="https://github.com/piyush-cosmo/TETRIS">
                                    Github
                                </Link>
                                <Button size="small" color="primary">
                                    Livedemo
                                </Button>
                            </CardActions>
                </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects;