import { IconProps } from "phosphor-react";

export interface Category {
  id: number;
  name: string;
  text: string;
  bg: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}