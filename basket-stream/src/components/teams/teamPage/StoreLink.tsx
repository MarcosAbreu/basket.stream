import { StoreType } from "@/lib/types";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  store: StoreType;
}

export default function StoreLink({ store }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: { md: "220px", xs: "100%" },
        height: { md: "100px", xs: "100%" },
      }}
    >
      <Box sx={{ display: { md: "inline", xs: "none" } }}>
        <Link href={store.url} style={{ textDecoration: "none" }}>
          <Image src={store.banner_store} alt={store.name} fill style={{ objectFit: "contain" }} />
        </Link>
      </Box>
      <Box sx={{ display: { md: "none", xs: "inline" }, color: "common.white" }}>
        <Link href={store.url} style={{ textDecoration: "none" }}>
          {store.name}
        </Link>
      </Box>
    </Box>
  );
}
