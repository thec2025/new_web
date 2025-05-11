import React from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";

function TextSec1({data}){
    if (!data){
        return null;
    }

    return(
    <Box component="section" id={data.title} sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
            <br/>
            <Container>
                <Typography variant="h4" component="h2" align="left" fontWeight="bold" gutterBottom color="primary.main">
                    {data.title}
                </Typography>
                <Typography
                 variant="body1"
                sx={{ textAlign: 'justify', fontSize: '1rem', lineHeight: 1.6, mb: 4 }}
                >
                    {data.description}
                </Typography>

                {data.documents && Object.keys(data.documents).length > 0 && (
                    <Stack direction={{xs: 'column',sm:'row'}} spacing={2} justifyContent="center">
                        {Object.entries(data.documents).map(([key, doc]) => (
                            <Button
                                key={key}
                                component="a"
                                href={doc.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                color= 'primary'
                                sx={{
                                    borderRadius: '20px',
                                    px: 3,
                                    py: 1,
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    boxShadow: 2,
                                    minWidth: '200px'
                                }}>
                                {doc.title}
                            </Button>
                        ))}
                    </Stack>
                )}
            </Container>
        </Box>
    )
}

export default TextSec1