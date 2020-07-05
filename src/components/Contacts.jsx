// import React, { Component } from 'react';
// import {makeStyles, withStyles} from "@material-ui/core/styles";
// import {
//     TextField,
//     Typography,
//     Button,
//     Grid,
//     Box
// } from "@material-ui/core";
// import SendIcon from '@material-ui/icons/Send';
// import Navbar from "./Navbar";

// const useStyles = makeStyles(theme => ({
//     form: {
//         top: "50%",
//         left: "50%",
//         transform: "transform(-50%, -50%)",
//         position: "absolute"
//     },
//     button: {
//         marginTop: "1rem",
//         color: "tomato",
//         borderColor: "tomato"
//     }
// }))

// const InputField = withStyles({
//     root: {
//         "& label.Mui-focused": {
//             color: "tomato",
//         },
//         "& label": {
//             color: "tan"
//         },
//         "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//                 borderColor: "tan"
//             },
//             "&:hover fieldset": {
//                 borderColor: "tan"
//             },
//             "& .Mui-focused fieldset": {
//                 borderColor: "tan",
//             }
//         }
//     },
// })(TextField);



// export default class Contacts extends Component {

//     constructor(props) {
//         super(props);
//         this.submitForm = this.submitForm.bind(this);
//         this.state = {
//           status: ""
//         };
//       }

    
//     render() {
//         const { status } = this.state;
//     return (
//         <Box component="div">
//             <Navbar/>
//             <Grid container justify="center">
//                 <Box component="form" className={useStyles.form}>
//                     <Typography 
//                     variant="h5" 
//                     style={{
//                         color: "tomato", 
//                         textAlign: "center",
//                         textTransform: "uppercase"
//                         }}>
//                         Contact Me
//                     </Typography>
//                     <form
//                     onSubmit={this.submitForm}
//                     action="https://formspree.io/myynnwng"
//                     method="POST"
//                     >
//                     <InputField 
//                     fullWidth={true} 
//                     label="Name"
//                     type="text"
//                     name="name" 
//                     variant="outlined"
//                     inputProps={{style:{color:"white"}}} 
//                     margin="dense" 
//                     size="medium"/>
//                     <br/>
//                     <InputField 
//                     fullWidth={true} 
//                     label="Email"
//                     type="email"
//                     name="email" 
//                     variant="outlined"
//                     inputProps={{style:{color:"white"}}}  
//                     margin="dense" 
//                     size="medium"/>
//                     <br/>
//                     <InputField 
//                     fullWidth={true} 
//                     label="Message"
//                     type="text"
//                     name="message" 
//                     variant="outlined"
//                     inputProps={{style:{color:"white"}}}  
//                     margin="dense" 
//                     size="medium"/>
//                     <br/>
//                     {status === "SUCCESS" ? <p>Thanks!</p> : 
//                     <button 
//                     >
//                         Contact
//                     </button>}
//                     {status === "ERROR" && <p>Ooops! There was an error.</p>} 
//                     </form>        
//                 </Box>
//             </Grid>
//         </Box>
//     )
// }
// submitForm(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const data = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open(form.method, form.action);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         form.reset();
//         this.setState({ status: "SUCCESS" });
//       } else {
//         this.setState({ status: "ERROR" });
//       }
//     };
//     xhr.send(data);
//   }
// }




