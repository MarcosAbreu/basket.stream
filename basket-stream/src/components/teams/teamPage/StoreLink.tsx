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
    <Box sx={{ position: "relative", width: "220px", height: "100px" }}>
      <Link href={store.url} style={{ textDecoration: "none" }}>
        <Image src={store.banner_store} alt={store.name} fill style={{ objectFit: "contain" }} />
      </Link>
    </Box>
  );
}
