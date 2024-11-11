import React from "react";
import { Box, Typography, Container } from "@mui/material";
import logoImg from "/public/assets/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <Container
      className="footer-box"
      maxWidth="xls"
      sx={{
        backgroundColor: { xs: "#dddedb" },
        paddingLeft: { xs: 3, sm: 20 },
        paddingRight: { xs: 3, sm: 20 },
        color: "#000000",
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        padding: "20px",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 0 },
        fontFamily: "LilitaOne",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, md: 2 },
          justifyContent: "center",
          alignItems: { xs: "center", md: "center" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image className="logo-img" src={logoImg} alt="Logo" width={90} />
            <Typography
              sx={{
                color: "black",
                fontFamily: "Pacifico",
                fontSize: "30px",
                marginLeft: "5px",
              }}
            >
              inSite
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1, mt: { xs: 2, md: 0 } }}>
          <Image src="/assets/facebook.svg" alt="kogo" width={30} height={30} />
          <Image
            src="/assets/instagram.svg"
            alt="kogo"
            width={30}
            height={30}
          />
          <Image src="/assets/telegram.svg" alt="kogo" width={30} height={30} />
          <Image src="/assets/twitter.svg" alt="kogo" width={30} height={30} />
        </Box>
        <Typography
          sx={{
            fontWeight: 400,

            fontSize: "14px",
          }}
        >
          ©InSite
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mt: { xs: 2, md: 0 },
          gap: { xs: 1, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: { xs: "center", md: "center" },
          }}
        >
          <Image src="/assets/geo-alt.svg" alt="kogo" width={34} height={39} />
          <Typography>Kharkiv, Ukraine</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Image src="/assets/phone.svg" alt="kogo" width={34} height={30} />
          <Typography>+38 (067) 777-1530</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Image src="/assets/envelope.svg" alt="kogo" width={34} height={30} />
          <Typography>insite.official.help@gmail.com</Typography>
        </Box>
      </Box>
    </Container>
  );
}
