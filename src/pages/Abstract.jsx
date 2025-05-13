import React from "react";
import Navbar from "../components/navbar";
import conferencedata from "../data/conferenceData.json";
import ContactUs from "../components/contactUs";
import { Box,Container,Grid,Typography } from "@mui/material";
import ConferenceTracks from "../components/ConferenceTracks";
import TextSec1 from "../components/textsec1";
import clarivate from "../data/clarivate.png"
import scopus from "../data/scopus.png"


function Abstract(){
    return(
        <>
            <Navbar data={conferencedata.navLinks} />
            <Box component="section" sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
            <br/>
            <Container>
                <Typography
                 variant="body1"
                sx={{ textAlign: 'justify', fontSize: '1.2rem', lineHeight: 1.6, mb: 4 }}
                >
                    "Welcome to the abstract submission for the International Conference on <b>TRANSFORMING HIGHER EDUCATION FOR FUTURE: EDUCATION 4.0</b>.<br /><br />The Best Paper Award will be presented to the selected authors in recognition of their outstanding contribution, celebrated for excellence in research, originality, and impact at THEC 2025"
                </Typography>
            </Container>
            </Box>
            <ConferenceTracks tracks = {conferencedata.tracks} />
            <TextSec1 data={conferencedata.abstract} />
            <ContactUs data={conferencedata.footer}/>
        </>
    )
}

export default Abstract;