import React, { useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type ButtonType = React.ReactNode;
type OptionType = ButtonType | { type: "divider"; component: React.ReactNode };

interface RibbonSplitButtonProps {
  options: OptionType[];
  defaultSelectedIndex?: number;
  icon?: React.ReactNode;
  displayIcon?: boolean;
}

const RibbonSplitButton: React.FC<RibbonSplitButtonProps> = ({
  options,
  defaultSelectedIndex,
  icon,
  displayIcon,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex || 0);

  const handleClick = () => {
    if (options && options[selectedIndex]) {
      console.info(`You clicked ${options[selectedIndex]}`);
    } else {
      console.warn("No options available or invalid selectedIndex.");
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      <Menu>
        <ButtonGroup>
          {!displayIcon && (
            <Button onClick={handleClick}>
              {options && options[selectedIndex] ? (
                <React.Fragment>
                  {typeof options[selectedIndex] === "string"
                    ? options[selectedIndex]
                    : options[selectedIndex]}
                </React.Fragment>
              ) : (
                ""
              )}
            </Button>
          )}
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {icon && <Box mr="0.25rem">{icon}</Box>}
          </MenuButton>
        </ButtonGroup>
        <MenuList>
          {options &&
            Array.isArray(options) &&
            options.map((option, index) =>
              typeof option === "object" &&
              option !== null &&
              "type" in option &&
              option.type === "divider" ? (
                <Divider key={`divider-${index}`} />
              ) : (
                <MenuItem
                  key={typeof option === "string" ? option : `option-${index}`}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {typeof option === "string" ? option : ""}
                </MenuItem>
              )
            )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default RibbonSplitButton;
