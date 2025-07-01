import React from "react";
import Navbar from "../components/navbar";
import ContactUs from "../components/contactUs";
import conferencedata from "../data/conferenceData.json";
import DatesTable from "../components/dates_table";
import { Box, Container, Typography, Stack, Button } from "@mui/material";

export default function Register() {
  return (
    <>
      <Navbar data={conferencedata.navLinks} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 6, md: 10 },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
          color="primary.main"
        >
          {conferencedata.Register.title}
        </Typography>
      </Box>

      <Box>
        <Container sx={{ py: { xs: 1, md: 0.1 } }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              fontSize: "1.2rem",
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            {conferencedata.Register.description}
          </Typography>

          <DatesTable data={conferencedata.Fee} />

          <Box component="ul" sx={{ pl: 3, mb: 4 }}>
            {conferencedata.Register.description_bullets.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                align="left"
                fontWeight="bold"
                gutterBottom
                color="primary.main"
              >
                Bank Details:
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                <strong>Bank Name:</strong> {conferencedata.Register.B_name}
                <br />
                <br />
                <strong>Bank Address:</strong> {conferencedata.Register.B_address}
                <br />
                <br />
                <strong>Bank Account Number/IBAN:</strong>{" "}
                {conferencedata.Register.B_acc}
                <br />
                <br />
                <strong>IDBI Bank SWIFT/BIC Code:</strong>{" "}
                {conferencedata.Register.B_bic}
                <br />
                <br />
                <strong>IFSC/Branch Code:</strong>{" "}
                {conferencedata.Register.B_ifsc}
              </Typography>
            </Box>

            <Box
              sx={{
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                pb: 5,
              }}
            >
              <img
                src="/qr.jpg"
                alt="QR Code for payment"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>

          {/* Buttons Section */}
          {conferencedata.Register.buttons &&
            Object.keys(conferencedata.Register.buttons).length > 0 && (
              <>
                {/* Top 3 Buttons */}
                <Box sx={{ py: 4 }}>
                  <Container>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {Object.entries(conferencedata.Register.buttons)
                        .slice(0, 3)
                        .map(([key, doc]) => (
                          <Button
                            key={key}
                            component="a"
                            href={doc.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            color="primary"
                            sx={{
                              borderRadius: "20px",
                              px: 3,
                              py: 1,
                              textTransform: "none",
                              fontWeight: "bold",
                              fontSize: "1rem",
                              boxShadow: 2,
                              minWidth: "200px",
                            }}
                          >
                            {doc.title}
                          </Button>
                        ))}
                    </Stack>
                  </Container>
                </Box>

                {/* Bottom 2 Buttons */}
                <Box
                  sx={{
                    minHeight: "10vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    pb: 6,
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {Object.entries(conferencedata.Register.buttons)
                      .slice(3)
                      .map(([key, doc]) => (
                        <Button
                          key={key}
                          component="a"
                          href={doc.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="primary"
                          sx={{
                            borderRadius: "20px",
                            px: 3,
                            py: 1,
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            boxShadow: 2,
                            minWidth: "200px",
                          }}
                        >
                          {doc.title}
                        </Button>
                      ))}
                  </Stack>
                </Box>
              </>
            )}
        </Container>
      </Box>

      <ContactUs data={conferencedata.footer} />
    </>
  );
}
