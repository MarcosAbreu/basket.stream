import { Box } from "@mui/material";
import Image from "next/image";

interface Props {
  width: string;
  height: string;
  alt: string;
  href: string;
}

export default function LiveLink({ width, height, alt, href }: Props) {
  return (
    <a href={href}>
      <Box sx={{ width: width, height: height, position: "relative" }}>
        <Image src="/icon-live.svg" alt={alt} fill style={{ objectFit: "contain" }} />
      </Box>
    </a>
  );
}
