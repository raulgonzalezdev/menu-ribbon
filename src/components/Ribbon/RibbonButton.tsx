import React from "react";
import { Button, Box } from "@chakra-ui/react";

export interface RibbonButtonProps {
  caption: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  displayIcon?: boolean; // Agregue esta línea
}

const RibbonButton: React.FC<RibbonButtonProps> = ({
  buttonKey,
  icon,
  caption,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      padding="1"
      minWidth="auto"
      minHeight="auto"
      textTransform="none"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {icon}
      <Box fontSize="0.8rem" mt="0.5rem">{caption}</Box>
    </Button>
  );
};

export default RibbonButton;
