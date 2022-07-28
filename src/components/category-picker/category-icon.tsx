import { Asterisk, IconProps } from 'phosphor-react';
import { FC } from 'react';

interface categoryIconProps {
  iconColor: string;
  bg: string;
  shadow?: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

const CategoryIcon: FC<categoryIconProps> = ({
  iconColor = 'text-slate-700',
  bg = 'bg-slate-100 hover:bg-slate-200',
  shadow = 'shadow-none',
  icon = Asterisk,
}) => {
  const Icon = icon;

  return (
    <div
      className={`flex w-12 h-12 ${shadow} rounded-full hover:cursor-pointer ${iconColor} ${bg}`}
    >
      <Icon className='mx-auto my-auto' size={24} weight='fill' />
    </div>
  );
};

export default CategoryIcon;
