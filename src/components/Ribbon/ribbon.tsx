import React, { useCallback } from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
 } from "@chakra-ui/react";
import * as ChakraUIComponents from "@chakra-ui/react";

import { ribbonTabs } from "./ribbonData";
import CustomRibbonButton from "./CustomRibbonComponent";
import CustomRibbonButtonGroup from "./CustomRibbonButtonGroup";
import RibbonSplitButton from "./RibbonSplitButton";
import RibbonIconButton from "./RibbonIconButton";
import RibbonButton from "./RibbonButton";
import {
  RibbonProps,
  RibbonButtonGroup,
  RibbonIconProps,
  RibbonButton as RibbonButtonType,
} from "./interfaces";

const Ribbon: React.FC<RibbonProps> = ({ customTabs, onButtonClick }) => {
  const tabsToUse = customTabs ? customTabs : ribbonTabs ? ribbonTabs : [];
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const [selectedPanelContent, setSelectedPanelContent] = React.useState(null);


  React.useEffect(() => {
    setSelectedPanelContent(tabsToUse[0]?.buttonGroups);
  }, [tabsToUse]);

  
  const RibbonIcon = ({ iconName }: RibbonIconProps) => {
    if (!iconName) {
      return { iconComponent: null, displayIcon: false };
    }

    const IconComponent = require("@mui/icons-material")[iconName];

    if (!IconComponent) {
      return { iconComponent: null, displayIcon: false };
    }

    return { iconComponent: <IconComponent />, displayIcon: true };
  };

  const RibbonIconComponent = ({ iconName }: RibbonIconProps) => {
    const { iconComponent } = RibbonIcon({ iconName });
    return iconComponent;
  };

  const renderButton = useCallback(
    (button: RibbonButtonType, index: number) => {
     
      const ribbonIconResult = RibbonIcon({ iconName: button.icon });

      const buttonProps = {
        buttonKey: index,
        caption: button.caption,
        icon: ribbonIconResult.iconComponent,
        displayIcon: ribbonIconResult.displayIcon, // Agrega esta línea
        onClick: () => {
          console.log(`Clic en el botón: ${button.icon}`);
          button.onClick && button.onClick();
          onButtonClick && onButtonClick(button);
        },
      };

      switch (button.type) {
        case "RibbonButton":
          return <RibbonButton {...buttonProps} />;
        case "RibbonIconButton":
          return <RibbonIconButton {...buttonProps} />;
        case "RibbonSplitButton":
          const splitButtonOptions = button.dropdownItems
            ? button.dropdownItems.map((item) => item.caption)
            : [];
          const ribbonIconResult = RibbonIcon({ iconName: button.icon });

          return (
            <RibbonSplitButton
              key={index}
              options={splitButtonOptions}
              defaultSelectedIndex={button.defaultSelectedIndex}
              icon={ribbonIconResult.iconComponent}
              displayIcon={ribbonIconResult.displayIcon}
            />
          );
        default:
          return null;
      }
    },
    [onButtonClick]
  );

  const renderReactComponent = useCallback(
    (button: RibbonButtonType, index: number) => {
      const Component = getChakraComponent(button.component);
  
      if (!Component) return null;
      const wrappedComponent =
        button.component === "Select" ? (
          <Component onChange={button.onChange}>
            {button.options.items.map((item, itemIndex) => (
              <option key={itemIndex} value={item.value}>
                {item.label}
              </option>
            ))}
          </Component>
        ) : (
          <Component {...button.options} onChange={button.onChange} />
        );
  
      return (
        <div
          style={{ display: "inline-flex", flexDirection: "row" }}
          key={index}
        >
          <CustomRibbonButton caption={button.caption}>
            {wrappedComponent}
          </CustomRibbonButton>
        </div>
      );
    },
    []
  );
  
  
  const getChakraComponent = (componentName) => {
    return ChakraUIComponents[componentName];
  };
  

  const MyTab = ({ selected, children, ...rest }) => (
    <Tab
      fontSize="0.8rem"
      fontWeight="bold"
      padding="0.5rem 0.75rem"
      borderRadius="6px 6px 0 0"
      borderTop="1px solid #E2E8F0"
      borderLeft="1px solid #E2E8F0"
      borderRight="1px solid #E2E8F0"
      borderBottom={selected ? "1px solid transparent" : "1px solid #E2E8F0"}
      backgroundColor={selected ? "#F7FAFC" : ""}
      color={selected ? "#0078d4" : "#4A5568"}
      cursor="pointer"
      _hover={{ backgroundColor: "#f5f5f5" }}
      {...rest}
    >
      {children}
    </Tab>
  );

   
  const renderButtonsWithFlexDirection = (
    flexDirection: string,
    buttons: RibbonButtonType[]
  ) => {
    if (flexDirection === "column") {
      const buttonRows: JSX.Element[] = [];
  
      for (let i = 0; i < buttons.length; i += 2) {
        const button1 =
          buttons[i].type === "RibbonReactComponent"
            ? renderReactComponent(buttons[i], i)
            : renderButton(buttons[i], i);
        const button2 =
          i + 1 < buttons.length
            ? buttons[i + 1].type === "RibbonReactComponent"
              ? renderReactComponent(buttons[i + 1], i + 1)
              : renderButton(buttons[i + 1], i + 1)
            : null;
  
        buttonRows.push(
          <Box key={i} display="flex" flexDirection="row">
            <Box mr="4px">{button1}</Box>
            {button2 && <Box>{button2}</Box>}
          </Box>
        );
      }
  
      return buttonRows;
    } else {
      return buttons.map((button, buttonIndex) => (
        <Box key={buttonIndex} mr="4px">
          {button.type === "RibbonReactComponent"
            ? renderReactComponent(button, buttonIndex)
            : renderButton(button, buttonIndex)}
        </Box>
      ));
    }
  };

  const WorkArea: React.FC = () => {
    return (
      <Box 
      borderRadius="2px"
      border="1px solid #e7e6e6"
      boxShadow="inset 0 0 3px rgba(0, 0, 0, 0.1)"
      padding="1px" 
      backgroundColor="rgba(255, 255, 255, 0.8)"
      overflowY="auto"
       >
        {selectedPanelContent &&
          selectedPanelContent.map((group: RibbonButtonGroup, groupIndex) => (
            <CustomRibbonButtonGroup
              style={{
                flexDirection: group.flexDirection,
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                marginTop: groupIndex > 0 ? "4px" : "0",
              }}
              key={groupIndex}
              caption={group.caption}
            >
              {renderButtonsWithFlexDirection(group.flexDirection, group.buttons)}
            </CustomRibbonButtonGroup>
          ))}
      </Box>
    );
  };
  
  
  
  
  return (
    <>
    <Flex alignItems="stretch">
    <Tabs
     
      index={selectedTabIndex}
      onChange={(index) => {
        setSelectedTabIndex(index);
        setSelectedPanelContent(tabsToUse[index].buttonGroups);
      } }
    >
      <TabList>
        {tabsToUse.map((tab, tabIndex) => (
          <MyTab key={tabIndex} selected={selectedTabIndex === tabIndex}>
            {tab.icon && <RibbonIconComponent iconName={tab.icon} />}
            {tab.label}
          </MyTab>
        ))}
      </TabList>
      <TabPanels  padding="0" >
        {tabsToUse.map((tab, tabIndex) => (
          <TabPanel
            key={tabIndex}
            paddingTop="0"
          >
            
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
    </Flex>
    <WorkArea />
    </>
  );
  
  };
  
  export default Ribbon;