import React, { useCallback } from "react";
import {
  Box,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  useTheme,
  TabPanel,
  IconButton,
  Input,
  Textarea,
  Select,
  Switch,
  MenuItem,
  useMediaQuery,
  useBreakpointValue,
  Stepper,

} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { ribbonTabs } from "./ribbonTabs";
import CustomRibbonButton from "./CustomRibbonButton";
import CustomRibbonButtonGroup from "./CustomRibbonButtonGroup";
import RibbonSplitButton from "./RibbonSplitButton";
import RibbonIconButton from "./RibbonIconButton";
import RibbonButon from "./RibbonButton"

import Link from "next/link";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RibbonProps, RibbonButtonGroup, RibbonIconProps, ButtonProps, RibbonButton } from './interfaces';

const convertIconName = (iconName: string) => {
  return iconName;
};

const Ribbon: React.FC<RibbonProps> = ({  customTabs, onButtonClick }) => {

  const theme = extendTheme({
    palette: {
       primary: {
         main: '#1b5a90'
       },
    
     },
   });
 
  const tabsToUse = customTabs ? customTabs : ribbonTabs ? ribbonTabs : [];
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const componentMap: { [key: string]: any } = {
    Input: Input,
    TextArea: Textarea,
    Select: Select,
    Switch: Switch,
  };

  
  const RibbonIcon = ({ iconName }: RibbonIconProps) => {
    if (!iconName) {
      return { iconComponent: null, displayIcon: false };
    }
    const IconComponent = require("@mui/icons-material")[convertIconName(iconName)];

    if (!IconComponent) {
      return { iconComponent: null, displayIcon: false };
    }

    return { iconComponent: <IconComponent />, displayIcon: true };
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTabIndex(newValue);
  };

  const StyledMobileStepper = (otherProps) => {
    const theme = useTheme();
    const stepperStyle = {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
      padding: 0,
    };
    return <Stepper style={stepperStyle} {...otherProps} />;
  };
  
  const renderReactComponent = useCallback((button: RibbonButton, index: number) => {
    const Component = button.component ? componentMap[button.component] : undefined;
    if (!Component) return null;
    const wrappedComponent =
      button.component === "Select" ? (
        <Component onChange={button.onChange}>
          {button.options.items.map((item: { value: string | number | readonly string[] | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, itemIndex: React.Key | null | undefined) => (
            <MenuItem key={itemIndex} value={item.value}>
              {item.label}
            </MenuItem>
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
  }, []);
  
  const renderButton = useCallback((button: RibbonButton, index: number) => {
    if (button.component && componentMap[button.component]) {
      return renderReactComponent(button, index);
    }
    const ribbonIconResult = RibbonIcon({ iconName: button.icon });
    const buttonProps = {
      buttonKey: index,
      caption: button.caption,
      icon: ribbonIconResult.iconComponent,
      onClick: () => {
        console.log(`Clic en el botón: ${button.icon}`);
        button.onClick && button.onClick();
        //@ts-ignore
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
  }, [onButtonClick]);

  const wrapWithLink = (button: RibbonButton, buttonComponent: string | number | boolean | JSX.Element | React.ReactFragment | null | undefined) => {
    return button.route ? (
      <Link href={button.route}>
        <span style={{ textDecoration: 'none', cursor: 'pointer' }}>{buttonComponent}</span>
      </Link>
    ) : (
      buttonComponent
    );
  };

  const renderButtons = useCallback((buttons: RibbonButton[], parentKey: React.Key | null | undefined = '') => {
    return buttons.map((button, index) => {
      const buttonElement = renderButton(button, index);
      return (
        <React.Fragment key={`${parentKey}-${index}`}>
          {wrapWithLink(button, buttonElement)}
        </React.Fragment>
      );
    });
  }, [onButtonClick]);

  const chunkArray = useCallback((array: any[], chunkSize: any) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  }, []);


const Ribbon: React.FC<RibbonProps> = ({ customTabs, onButtonClick }) => {
  const tabsToUse = customTabs ? customTabs : ribbonTabs ? ribbonTabs : [];
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <>
  <ChakraProvider theme={theme}>
    <Tabs value={selectedTabIndex.toString()}>
      {isMobile ? (
        <StyledMobileStepper
          activeStep={selectedTabIndex}
          steps={ribbonTabs.length}
          position="static"
          nextButton={
            <IconButton
              size="sm"
              onClick={() =>
                setSelectedTabIndex((prev) =>
                  prev === ribbonTabs.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="next"
            >
              <ArrowBackIcon />
            </IconButton>
          }
          backButton={
            <IconButton
              size="sm"
              onClick={() =>
                setSelectedTabIndex((prev) =>
                  prev === 0 ? ribbonTabs.length - 1 : prev - 1
                )
              }
              aria-label="back"
            >
              <ArrowForwardIcon />
            </IconButton>
          }
        />
      ) : (
        <Tabs
          value={selectedTabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabsToUse.map((tab, tabIndex) => (
            <Tab
              key={tabIndex}
              label={tab.label}
              iconPosition="start"
              icon={RibbonIcon({ iconName: tab.icon }).iconComponent || undefined}
            />
          ))}
        </Tabs>
      )}

      {tabsToUse.map((tab, tabIndex) => (
        <TabPanel
          key={tabIndex}
          value={tabIndex.toString()}
          id={`tabpanel-${tabIndex}`}
          aria-labelledby={`tab-${tabIndex}`}
        >
          {tab.buttonGroups.map((group: RibbonButtonGroup, groupIndex: React.Key | null | undefined) => {
            if (group.flexDirection === "column") {
              const chunkedButtons = chunkArray([...group.buttons], 2);

              return chunkedButtons.map((chunk, chunkIndex) => (
                <CustomRibbonButtonGroup
                  key={`${groupIndex}-${chunkIndex}`}
                  style={{
                    flexDirection: group.flexDirection,
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                  caption={group.caption}
                >
                  {renderButtons(chunk, `${groupIndex}-${chunkIndex}`)}
                </CustomRibbonButtonGroup>
              ));
            } else {
              return (
                <CustomRibbonButtonGroup
                  key={groupIndex}
                  style={{
                    flexDirection: group.flexDirection,
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                  caption={group.caption}
                >
                  {
                    //@ts-ignore
                    renderButtons(group.buttons, groupIndex)
                  }
                </CustomRibbonButtonGroup>
              );
            }
          })}

          
        </TabPanel>
      ))}
    </Tabs>
  </ChakraProvider>
</>
);

};

export default Ribbon;
