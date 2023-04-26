import { ChangeEvent } from "react";
export const ribbonTabs = [
  {
    label: "Home",
    mode: "default",
    icon: "Home",
    buttonGroups: [
      {
        flexDirection: "row",
        caption: "Clibooard",
        buttons: [
          { type: "RibbonButton", caption: "Paste", icon: "ContentPaste" , route: "/ribboneditor"},
          { type: "RibbonButton", caption: "Cut", icon: "AccountBalance", route: "/datagridmasterdetails" },
          { type: "RibbonButton", caption: "Copy", icon: "FileCopy" , route: "/menus"},
        ],
      },
      {
        flexDirection: "column",
        caption: "Styles",
        buttons: [
          { type: "RibbonIconButton", caption: "Bold", icon: "FormatBold" },
          { type: "RibbonIconButton", caption: "Italic", icon: "FormatItalic" },
          { type: "RibbonIconButton", caption: "Underline", icon: "FormatUnderlined" },
          { type: "RibbonIconButton", caption: "Strikethrough", icon: "FormatStrikethrough" },
        ],
      },
      {
        flexDirection: "column",
        caption: "Undo",
        buttons: [
          { type: "RibbonIconButton", caption: "Undo", icon: "Undo" },
          { type: "RibbonIconButton", caption: "Redo", icon: "Redo" },
        ],
      },
    ],
  },
  {
    label: "Examples",
    mode: "default",
    icon: "AccountBalance",
    buttonGroups: [
      {
        flexDirection: "row",
        caption: "Examples",
        buttons: [
          { type: "RibbonButton", caption: "Ribbon Button", icon: "Mail" },
          { type: "RibbonToolButton", caption: "Ribbon Tool Button", icon: "Settings" },
          {
            type: "RibbonSplitButton",
            icon: "Settings",
            caption: " ",
            dropdownItems: [
              { type: "RibbonDropdownItem", caption: "Windows 10" },
              { type: "RibbonDropdownItem", caption: "Windows 11" },
              { type: "RibbonDropdownItem", caption: "Office 365" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Insert",
    mode: "default",
    icon: "DashboardCustomize",
    buttonGroups: [
      {
        flexDirection: "column",
        caption: "Tables",
        buttons: [
          { type: "RibbonIconButton", caption: "Table", icon: "TableChart" },
          { type: "RibbonIconButton", caption: "Picture", icon: "Image" },
          { type: "RibbonIconButton", caption: "Chart", icon: "PieChart" },
        ],
      },
      {
        flexDirection: "row",
        caption: "Shapes",
        buttons: [
          { type: "RibbonIconButton", caption: "Shapes", icon: "Shapes" },
          { type: "RibbonIconButton", caption: "Icons", icon: "EmojiSymbols" },
        ],
      },
      {
        flexDirection: "row",
        caption: "Links",
        buttons: [
          { type: "RibbonIconButton", caption: "Link", icon: "Link" },
          { type: "RibbonIconButton", caption: "Comment", icon: "Chat" },
        ],
      },
    ],
  },
  {
    label: "Diseño",
    mode: "default",
    icon: "InsertInvitation",
    buttonGroups: [
      {
        flexDirection: "column",
        caption: "Orientation",
        buttons: [
          { type: "RibbonIconButton", caption: "Margins", icon: "Pageview" },
          { type: "RibbonIconButton", caption: "Orientation", icon: "InsertDriveFile" },
          { type: "RibbonIconButton", caption: "Size", icon: "ZoomOutMap" },
        ],
      },
      {
        flexDirection: "column",
        caption: "Columns",
        buttons: [
          { type: "RibbonIconButton", caption: "Columns", icon: "ViewColumn" },
          { type: "RibbonIconButton", caption: "Breaks", icon: "FormatListNumbered" },
        ],
      },
      {
        flexDirection: "column",
        caption: "Lines",
        buttons: [
          { type: "RibbonIconButton", caption: "Line Numbers", icon: "FormatListNumbered" },
          { type: "RibbonIconButton", caption: "Hyphenation", icon: "TextFields" },
        ],
      },
    ],
  },
  {
    label: "Options",
    mode: "default",
    icon: "SettingsSuggest",
    buttonGroups: [
      {
        flexDirection: "row",
        caption: "Options",

        buttons: [
          {
            type: "RibbonSplitButton",
            caption: "Menu 1",
            dropdownItems: [
              { type: "RibbonDropdownItem", caption: "Windows 10" },
              { type: "RibbonDropdownDivider", caption: "-"},
              { type: "RibbonDropdownItem", caption: "Windows 11" },
              { type: "RibbonDropdownItem", caption: "Office 365" },
            ],
          },
          {
            type: "RibbonSplitButton",
            caption: "Menu 2",
            dropdownItems: [
              { type: "RibbonDropdownItem", caption: "Windows 10" },
              
              { type: "RibbonDropdownItem", caption: "Windows 11" },
              { type: "RibbonDropdownItem", caption: "Office 365" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "View",
    mode: "default",
    icon: "DashboardCustomize",
    buttonGroups: [
      {
        flexDirection: "column",
        caption: "Zoom",
        buttons: [
          { type: "RibbonIconButton", caption: "Zoom In", icon: "ZoomIn" },
          { type: "RibbonIconButton", caption: "Zoom Out", icon: "ZoomOut" },
          { type: "RibbonIconButton", caption: "100%", icon: "Search" },
        ],
      },
      {
        flexDirection: "column",
        caption: "Rules",
        buttons: [
          { type: "RibbonIconButton", caption: "Ruler", icon: "Straighten" },
          { type: "RibbonIconButton", caption: "Gridlines", icon: "GridOn" },
        ],
      },
      {
        flexDirection: "column",
        caption: "All",
        buttons: [
          { type: "RibbonIconButton", caption: "New Window", icon: "OpenInNew" },
          { type: "RibbonIconButton", caption: "Arrange All", icon: "ViewArray" },
        ],
      },
    ],
  },
  {
    label: "Custom",
    mode: "default",
    icon: "SettingsSuggest",
    buttonGroups: [
      {
        flexDirection: "row",
        caption: "Customs",
        buttons: [
          {
            type: "RibbonReactComponent",
            component: "Input",
            caption: "Input",
            options: {},
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              console.log("Input value:", event.target.value);
            },
          },
          {
            type: "RibbonReactComponent",
            component: "TextArea",
            caption: "TextArea",
            options: { rows: 3 },
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              console.log("Text Area value:", event.target.value);
            },
          },
          {
            type: "RibbonReactComponent",
            component: "Select",
            caption: "Select",
            options: {
              items: [
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ],
            },
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              console.log("Selected value:", event.target.value);
            },
          },
          {
            type: "RibbonReactComponent",
            component: "Switch",
            caption: "Switch",
            options: {
              color: "primary",
            },
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              console.log("Switch toggled:", event.target.checked);
            },
          },
        ],
      },
    ],
  },
  
];

