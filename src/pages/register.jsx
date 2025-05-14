import React from "react";
import Navbar from "../components/navbar";
import ContactUs from "../components/contactUs";    
import conferencedata from "../data/conferenceData.json";
import { Box,Typography } from "@mui/material";
export default function Register(){
    return(
<>
      <Navbar data={conferencedata.navLinks} />
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography variant="h4" component="h2" align="left" fontWeight="bold" gutterBottom color="primary.main">
                    {Register.title}
                </Typography>

      </Box>
      <ContactUs data={conferencedata.footer}/>
</>
    )
}