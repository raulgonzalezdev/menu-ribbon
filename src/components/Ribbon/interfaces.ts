export interface RibbonButton extends ButtonProps {
  component?: string;
  type?: string;
  icon?: string;
  onClick?: () => void;
  onChange?: () => void; // Agregue esta línea
  options?: any; // Agregue esta línea
  dropdownItems?: any[];
  defaultSelectedIndex?: number;
  route?: string;    // Agrega aquí las propiedades adicionales de un botón según sea necesario
}

//import { RibbonProps, RibbonButtonGroup, RibbonIconProps, ButtonProps, RibbonButton } from './interfaces';

export interface RibbonIconProps {
  iconName?: string;
}

export interface ButtonProps {
  key: number;
  caption: string;
  iconName?: string;
  icon?: JSX.Element | string | null; // Modificar esta línea
  onClick?: () => void;
}

export interface RibbonProps {
 
  customTabs?: any[]; // Agrega esta línea
  onButtonClick?: (button: typeof RibbonButton) => void;
}

export interface RibbonButtonGroup {
  caption?: string;
  flexDirection?: "row" | "column";
  buttons: typeof RibbonButton[];

}
