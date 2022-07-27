import { Asterisk, IconProps } from 'phosphor-react';

interface categoryIconProps {
  iconColor: string;
  bg: string;
  shadow: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

const CategoryIcon = ({ iconColor, bg, shadow, icon }: categoryIconProps) => {
  const Icon = icon;

  return (
    <div
      className={`flex w-12 h-12 ${shadow} rounded-full hover:cursor-pointer ${bg}`}
    >
      <Icon className={`mx-auto my-auto ${iconColor}`} size={24} weight='fill' />
    </div>
  );
};

CategoryIcon.defaultProps = {
  iconColor: 'text-slate-700',
  bg: 'bg-slate-100 hover:bg-slate-200',
  shadow: 'shadow-none',
  icon: Asterisk,
};

export default CategoryIcon;
