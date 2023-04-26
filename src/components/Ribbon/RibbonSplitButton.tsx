import React, { useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
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
      <Menu isLazy>
        <ButtonGroup>
          {!displayIcon && (
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
              onClick={handleClick}
            >
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
          <MenuButton
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
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
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
