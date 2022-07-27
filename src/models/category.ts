import { IconProps } from "phosphor-react";

export interface Category {
  id: number;
  name: string;
  style: Style;
}

interface Style {
  iconColor: string;
  iconColorDark: string;
  textLight: string;
  textDark: string;
  placeholder: string;
  bg: string;
  bgDark: string;
  card: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}