import React from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";


function TextSec2({data}){
    if (!data){
        return null;
    }

    return(
    <Box component="section" id={data.title} sx={{ py: { xs: 6, md: 10 }, background: '#ffffff' }}>
        <Container>
            <Typography variant="h4" component="h2" align="left" fontWeight="bold" gutterBottom color="primary.main">
                {data.title}
            </Typography>
            <Typography
                variant="body1"
                sx={{ textAlign: 'justify', fontSize: '1rem', lineHeight: 1.6, mb: 4 }}
            >
                
            </Typography>
        </Container>
    </Box>
    )
}