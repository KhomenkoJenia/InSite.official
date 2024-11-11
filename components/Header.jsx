"use client";

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import logoImg from "/public/assets/logo.svg";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActiveLink = (path) => router.pathname === path;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: { xs: "#e1dfde" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: { xs: 3, sm: 20 },
          paddingRight: { xs: 3, sm: 20 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image className="logo-img" src={logoImg} alt="Logo" width={90} />
            <Typography
              sx={{ color: "black", fontFamily: "Pacifico", fontSize: "30px" }}
            >
              inSite
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Box
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "900px",
                    maxWidth: "100%",
                    padding: "20px",
                    backgroundColor: "#edebeb",
                  }}
                >
                  {[
                    { path: "/", label: "Home" },
                    { path: "/work", label: "Work" },
                    { path: "/about", label: "About" },
                    { path: "/contacts", label: "Contacts" },
                  ].map((link) => (
                    <Link key={link.path} href={link.path} passHref>
                      <Typography
                        sx={{
                          color: isActiveLink(link.path)
                            ? "#474747"
                            : "#000000",

                          transition: "background-color 0.3s ease",
                          cursor: "pointer",
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: "30px",
            }}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/work", label: "Work" },
              { path: "/about", label: "About" },
              { path: "/contacts", label: "Contacts" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={router.pathname === link.path ? "active-link" : ""}
                passHref
              >
                <Typography
                  sx={{
                    color: "#000000",
                    fontFamily: "LilitaOne",
                    fontSize: "18px",
                    transition: "0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
