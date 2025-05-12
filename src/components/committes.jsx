import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Committees({ data }) {
  if (!data) return null;

  const renderMemberText = (text) => {
    const parts = text.split(",");
    const boldPart = parts.slice(0, 2).join(","); // Name + Designation
    const rest = parts.slice(2).join(",");
    return (
      <Typography variant="body2">
        <strong>{boldPart}</strong>
        {rest && `,${rest}`}
      </Typography>
    );
  };

  return (
    <Box sx={{ py: 5, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Grid container spacing={12} justifyContent="center">
          {/* First two cards side-by-side */}
          {data.slice(0, 2).map((committee, index) => (
            <Grid
              item
              xs={12}  // Full width on mobile
              sm={6}   // 50% width on small screens and up
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center", // Center align the card inside grid item
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  backgroundColor: "#e0e0e0",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                    gutterBottom
                  >
                    {committee.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    color="text.secondary"
                    sx={{ wordWrap: "break-word" }}
                  >
                    {committee.description}
                  </Typography>
                  {Array.isArray(committee.members) ? (
                    <List dense sx={{ mb: 2 }}>
                      {committee.members.map((member, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemText primary={renderMemberText(member)} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <div>
                      {committee.members &&
                        Object.values(committee.members).map((group, idx) => (
                          <div key={idx}>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {group.role}:
                            </Typography>
                            <List dense sx={{ mb: 2 }}>
                              {group.members.map((member, mIdx) => (
                                <ListItem key={mIdx} disableGutters>
                                  <ListItemText primary={renderMemberText(member)} />
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

          {/* Third card below the first one */}
          {data.length > 2 && (
            <Grid
              item
              xs={12}  // Full width on mobile
              sm={6}   // 50% width on small screens and up
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px", // Add margin-top to increase the space between Card 1 and Card 3
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  backgroundColor: "#e0e0e0",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                    gutterBottom
                  >
                    {data[2].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    color="text.secondary"
                    sx={{ wordWrap: "break-word" }}
                  >
                    {data[2].description}
                  </Typography>
                  {Array.isArray(data[2].members) ? (
                    <List dense sx={{ mb: 2 }}>
                      {data[2].members.map((member, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemText primary={renderMemberText(member)} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <div>
                      {data[2].members &&
                        Object.values(data[2].members).map((group, idx) => (
                          <div key={idx}>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {group.role}:
                            </Typography>
                            <List dense sx={{ mb: 2 }}>
                              {group.members.map((member, mIdx) => (
                                <ListItem key={mIdx} disableGutters>
                                  <ListItemText primary={renderMemberText(member)} />
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
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Committees;
