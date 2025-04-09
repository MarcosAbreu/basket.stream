"use client";
import { TeamType } from "@/lib/types";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import StoreLink from "./StoreLink";
import LocalMallIcon from "@mui/icons-material/LocalMall";

interface Props {
  team: TeamType;
}

export default function TeamHeader({ team }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "40px" }}>
      <Box sx={{ width: "100%", height: { md: "100px", xs: "60px" }, position: "relative" }}>
        <Box
          sx={{
            position: "relative",
            flex: 1,
            height: "100px",
            display: { md: "block", xs: "none" },
          }}
        >
          <Image
            src={team.images.banner_header}
            alt={team.full_name}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: { md: "40px", xs: "20px" },
            top: { md: "30px", xs: "0px" },
            width: "calc(100% - 40px)",
            height: { md: "40px", xs: "60px" },
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { md: "40px", xs: "100px" },
              height: { md: "40px", xs: "60px" },
              position: "relative",
            }}
          >
            <Image
              src={team.images.logo}
              alt={team.full_name}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Typography sx={{ color: "common.white", fontSize: { md: "24px", xs: "20px" } }}>
            {team.full_name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { md: "440px", xs: "120px" },
          height: { md: "100px", xs: "60px" },
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "space-between", xs: "flex-end" },
        }}
      >
        <Box sx={{ display: { md: "none", xs: "inline" }, mr: "10px" }}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <LocalMallIcon sx={{ color: "common.white", fontSize: { md: "40px", xs: "30px" } }} />
          </Button>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{ display: { md: "none", xs: "inline" } }}
          >
            <MenuItem>
              <StoreLink store={team.store} />
            </MenuItem>
            <MenuItem>
              <StoreLink
                store={{
                  name: "NBA Store",
                  url: "https://store.nba.com/",
                  banner_store: "/mock/teamStores/store-banner-nba.png",
                }}
              />
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { md: "flex", xs: "none" }, flexDirection: "row" }}>
          <StoreLink store={team.store} />

          <StoreLink
            store={{
              name: "NBA Store",
              url: "https://store.nba.com/",
              banner_store: "/mock/teamStores/store-banner-nba.png",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
