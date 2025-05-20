  import React from "react";
import {
  Box,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Committees({ data }) {
  if (!data || data.length < 3) return null;

  const renderMemberText = (text) => {
    const parts = text.split(",");
    const boldPart = parts[0];
    const rest = parts.slice(1).join(",");
    return (
      <Typography variant="body2">
        <strong>{boldPart}</strong>
        {rest && `,${rest}`}
      </Typography>
    );
  };

  return (
    <Box sx={{ py: 5, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
          {data.slice(0, 3).map((committee, index) => (
            <Grid
              item
              maxWidth={400}
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "stretch",
                mr: index < 2 ? 2 : 0,  // margin-right for first two only
              }}
            >
              <Accordion
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  backgroundColor: "#e0e0e0",
                  boxShadow: 3,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {committee.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                    Object.values(committee.members).map((group, idx) => (
                      <div key={idx}>
                        <Typography
                          variant="subtitle2"
                          fontWeight="bold"
                          gutterBottom
                        >
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
                    ))
                  )}
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Committees;
