import React from "react";
import { Menu, MenuButton, MenuItem, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
    <Menu isLazy>
      <MenuItem minH='24px'
        fontSize="0.6rem"
        fontWeight="semibold"
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
        as="button"
        px={2}
        py={2}
        onClick={onClick}
      >
        {icon}
        <span style={{ marginLeft: "4px" }}>{caption}</span>
      </MenuItem>
      
    </Menu>
  );
};

export default RibbonIconButton;
