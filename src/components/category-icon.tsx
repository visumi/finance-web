import { Asterisk, IconProps } from 'phosphor-react';

interface categoryIconProps {
  text: string;
  bg: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

const CategoryIcon = ({ text, bg, icon }: categoryIconProps) => {
  const Icon = icon;

  return (
    <div
      className={`flex w-12 h-12 mt-1 rounded-full shadow-lg hover:cursor-pointer ${bg}`}
    >
      <Icon className={`mx-auto my-auto ${text}`} size={24} weight='fill' />
    </div>
  );
};

CategoryIcon.defaultProps = {
  text: 'slate',
  bg: '',
  icon: Asterisk,
};

export default CategoryIcon;
