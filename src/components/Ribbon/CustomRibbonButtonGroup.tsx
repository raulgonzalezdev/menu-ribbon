import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface CustomRibbonButtonGroupProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  caption?: string;
}

const CustomRibbonButtonGroup: React.FC<CustomRibbonButtonGroupProps> = ({
  children,
  style,
  caption,
}) => {
  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      mx="1"
      minWidth="auto" // Agrega esta línea
    >
      <Box
        display="inline-flex"
        flexDirection="row"
        bg="rgba(255, 255, 255, 0.8)"
        borderRadius="2px"
        border="1px solid #e7e6e6"
        boxShadow="inset 0 0 3px rgba(0, 0, 0, 0.1)"
        p="1"
        sx={style}
        minWidth="auto" // Agrega esta línea
      >
        {children}
      </Box>
      {/* {caption && (
        <Text fontSize="10px" color="#666" textAlign="center" whiteSpace="nowrap" mt="2">
          {caption}
        </Text>
      )} */}
    </Box>
  );
};

export default CustomRibbonButtonGroup;
