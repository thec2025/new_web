import React from "react";
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function DatesTable({ data }) {
    if (!data) {
        return null;
    }

    return (
        <Box component="section" id={data.title} sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
            <br />
            <Container>
                <Typography variant="h4" component="h2" align="left" fontWeight="bold" gutterBottom color="primary.main">
                    {data.title}
                </Typography>

                {/* Table Section */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="event table">

                        <TableBody>
                            {data.events.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"sx={{ fontWeight: 'bold' }}>
                                        {row.event}
                                    </TableCell>
                                    <TableCell align="right"sx={{ fontWeight: 'bold' }}>{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}

export default DatesTable;
