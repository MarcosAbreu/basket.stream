"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import theme from "@/theme/theme";
import { usePathname } from "next/navigation";
import Image from "next/image";

const pages = [
  { title: "standings", path: "/standings" },
  { title: "league stats", path: "/league-stats" },
  { title: "schedule", path: "/schedule" },
  { title: "teams", path: "/teams" },
];
const settings = ["My Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const lineColor = theme.palette.primary.light;

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: 0,
        height: "80px",
        width: "100vw",
      }}
    >
      <Container disableGutters maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            height: { md: "80px", xs: "60px" },
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              position: "relative",
              bgcolor: "common.black",
              height: { md: "80px", xs: "60px" },
              clipPath: { md: "polygon(0% 0%, 100% 0, 94.75% 100%, 0% 100%)", xs: "" },
              p: "0 40px",
              zIndex: 10,
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                cursor: "pointer",
                gap: "20px",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { md: "48px", xs: "40px" },
                  height: { md: "48px", xs: "40px" },
                  position: "relative",
                }}
              >
                <Image
                  alt="logo"
                  src="/logo.webp"
                  sizes="(max-width: 768px) 40px, 48px"
                  fill
                  priority
                />
              </Box>
              <Box sx={{ display: { md: "flex", xs: "none" }, alignItems: "center" }}>
                <h1
                  style={{
                    fontWeight: 600,
                    fontSize: "24px",
                    display: "inline-block",
                    color: pathname === "/" ? lineColor : "white",
                  }}
                >
                  Basket
                </h1>
                <h1
                  style={{
                    fontWeight: 600,
                    fontSize: "30px",
                    display: "inline-block",
                    color: pathname !== "/" ? lineColor : "white",
                  }}
                >
                  .
                </h1>
                <h1
                  style={{
                    fontWeight: 600,
                    fontSize: "24px",
                    display: "inline-block",
                    color: pathname === "/" ? lineColor : "white",
                  }}
                >
                  Stream
                </h1>
              </Box>
            </a>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              height: { md: "80px", xs: "60px" },
              justifyContent: "flex-end",
              bgcolor: "common.black",
            }}
          >
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }, "& .MuiMenu-list": { p: 0 } }}
              slotProps={{
                paper: {
                  sx: {
                    width: "100%",
                    height: "100vh",
                    bgcolor: "black",
                    color: "white",
                  },
                },
              }}
            >
              {pages.map((page) => (
                <a
                  key={page.title}
                  href={page.path}
                  style={{
                    display: "block",
                    cursor: "pointer",
                    margin: "auto 30px",
                    textTransform: "capitalize",
                    color: pathname === page.path.toLocaleLowerCase() ? lineColor : "common.white",
                    fontWeight: 500,
                  }}
                >
                  {page.title}
                </a>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              bgcolor: "black",
              position: "relative",
              height: "60px",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "60px",
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                right: "100%",
                zIndex: "1",
              }}
            />
            {pages.map((page) => (
              <a
                key={page.title}
                href={page.path}
                style={{
                  display: "block",
                  cursor: "pointer",
                  margin: "auto 30px",
                  textTransform: "capitalize",
                  color: pathname === page.path.toLocaleLowerCase() ? lineColor : "common.white",
                  fontWeight: 600,
                }}
              >
                {page.title}
              </a>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              width: "110px",
              height: "80px",
              position: "relative",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "60px",
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
            <Tooltip title="Open settings">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "110px",
                  height: "80px",
                  bgcolor: "common.black",
                  clipPath: { md: "polygon(0% 0%, 100% 0, 100% 100%, 10% 100%)", xs: "" },
                  zIndex: 10,
                }}
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    sx={{ width: "50px", height: "50px", bgcolor: "primary.main" }}
                  />
                </IconButton>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "55px", "& .MuiMenu-list": { p: 0 } }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              slotProps={{
                paper: {
                  sx: {
                    bgcolor: "background.paper",
                    color: "white",
                    p: 0,
                  },
                },
              }}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{
                    p: "10px 20px",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
