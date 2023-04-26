import React from "react";
import { Button, Box } from "@chakra-ui/react";

interface RibbonIconButtonProps {
  icon: React.ReactNode;
  caption: string;
  onClick: () => void;
  textPosition?: "left" | "right";
}

const RibbonIconButton: React.FC<RibbonIconButtonProps> = ({
  icon,
  caption,
  onClick,
  textPosition = "right",
}) => {
  return (
    <Button
      onClick={onClick}
      padding="0.5"
      minWidth="auto"
      minHeight="auto"
      textTransform="none"
      _hover={{ textDecoration: "none" }}
    >
      <Box display="flex" alignItems="center">
        {textPosition === "left" && (
          <Box fontSize="0.8rem" mr="0.5rem">{caption}</Box>
        )}
        {icon}
        {textPosition === "right" && (
          <Box fontSize="0.8rem" ml="0.5rem">{caption}</Box>
        )}
      </Box>
    </Button>
  );
};

export default RibbonIconButton;
