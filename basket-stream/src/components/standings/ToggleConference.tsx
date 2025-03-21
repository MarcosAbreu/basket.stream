import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface Props {
  value: "East" | "West";
  setValue: (newValue: "East" | "West") => void;
}

export default function ToggleConference({ value, setValue }: Props) {
  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: "East" | "West" | null) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      onChange={handleChange}
      exclusive
      sx={{
        borderRadius: "12px",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <ToggleButton
        value="East"
        sx={{
          borderRadius: "12px 0 0 12px",
          bgcolor: "custom.softBlack",
          color: "common.white",
          borderWidth: "2px",
          borderStyle: "solid",
          fontSize: { xs: "12px", md: "14px" },
          "&.Mui-selected": {
            borderColor: "primary.light",
            borderRightWidth: "3px",
            color: "primary.light",
            bgcolor: "common.black",
          },
        }}
      >
        Eastern Conference
      </ToggleButton>
      <ToggleButton
        value="West"
        sx={{
          borderRadius: "0 12px 12px 0",
          bgcolor: "custom.softBlack",
          color: "common.white",
          borderWidth: "2px",
          borderStyle: "solid",
          fontSize: { xs: "12px", md: "14px" },
          "&.Mui-selected": {
            borderColor: "primary.light",
            color: "primary.light",
            borderLeftWidth: "2px",
          },
        }}
      >
        Western Conference
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
