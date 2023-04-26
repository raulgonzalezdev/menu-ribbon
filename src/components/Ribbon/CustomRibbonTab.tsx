import React from "react";
import { Tab } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

interface CustomChakraRibbonTabProps {
  label: string;
  icon?: boolean;
  rest?: any;
}

const CustomRibbonTab: React.FC<CustomChakraRibbonTabProps> = ({
  label,
  icon,
  ...rest
}) => {
  return (
    <Tab {...rest} display="flex" flexDirection="row">
      {icon && <PhoneIcon />}
      {label}
    </Tab>
  );
};

export default CustomRibbonTab;
