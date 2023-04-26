import React from "react";
import { Box } from "@chakra-ui/react";

interface CustomRibbonButtonProps {
  children: React.ReactNode;
  caption: string;
}

const CustomRibbonButton: React.FC<CustomRibbonButtonProps> = ({
  children,
  caption,
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      m="0"
      mx="4px"
      p="4px 8px"
      border="1px solid transparent"
      fontSize="0.9rem"
      whiteSpace="nowrap"
      _hover={{
        border: "1px solid #ccc",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {React.cloneElement(children as React.ReactElement, {
        style: { marginBottom: "2px" },
      })}
      <Box>{caption}</Box>
    </Box>
  );
};

export default CustomRibbonButton;
