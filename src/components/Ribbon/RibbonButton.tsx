import React from "react";
import { Button, Flex } from "@chakra-ui/react";

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
  displayIcon = true, // Agrega esta línea
}) => {
  return (
    <Button
      fontSize="0.8rem"
      fontWeight="bold"
      padding="0.5rem 1.5rem"
      borderRadius="4px 4px 4px 4px"
      borderTop="1px solid #E2E8F0"
      borderLeft="1px solid #E2E8F0"
      borderRight="1px solid #E2E8F0"
      borderBottom={"1px solid #E2E8F0"}
      backgroundColor={"#FAFCFF"}
      color={"#0078d4"}
      cursor="pointer"
      _hover={{ backgroundColor: "#f5f5f5" }}
      style={{ justifyContent: "center" ,  height: "105%", top: -3  }}
      onClick={onClick}

    >
      <Flex flexDirection="column" alignItems="center">
        {displayIcon && icon}
        <span>{caption}</span>
      </Flex>
    </Button>
  );
};

export default RibbonButton;
