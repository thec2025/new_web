import React from "react";
import { Box, Container, Grid, Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

function Committees({ data }) {
  if (!data) {
    return null;
  }

  const committees = data;

  return (
    <Box sx={{ py: 5, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Grid container spacing={3}>
          {/* Render committees dynamically */}
          {committees.map((committee, index) => (
            <Grid item xs={12} md={index < 2 ? 6 : 12} key={index}>
              <Card sx={{ height: "auto", border: "1px solid black", boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>{committee.title}</Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    {committee.description}
                  </Typography>

                  <Typography variant="subtitle1" fontWeight="bold">Members:</Typography>

                  {/* Check if members is an array or an object */}
                  {Array.isArray(committee.members) ? (
                    <List dense sx={{ border: "1px dashed #ccc" }}>
                      {committee.members.map((member, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemText primary={member} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <div>
                      {/* If members is an object, display the role and list the members */}
                      {committee.members && Object.keys(committee.members).map((roleKey, idx) => (
                        <div key={idx}>
                          <Typography variant="subtitle2" fontWeight="bold">{roleKey}:</Typography>
                          <List dense sx={{ border: "1px dashed #ccc" }}>
                            {committee.members[roleKey].map((member, mIdx) => (
                              <ListItem key={mIdx} disableGutters>
                                <ListItemText primary={member} />
                              </ListItem>
                            ))}
                          </List>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Committees;
