import { Asterisk, IconProps, Trash } from 'phosphor-react';
import { FC } from 'react';

interface CategoryIconProps {
  iconColor: string;
  deletable?: boolean;
  bg: string;
  shadow?: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

const CategoryIcon: FC<CategoryIconProps> = ({
  iconColor = 'text-slate-700',
  deletable = false,
  bg = 'bg-slate-100 hover:bg-slate-200',
  shadow = 'shadow-none',
  icon = Asterisk,
}) => {
  const Icon = icon;

  return (
    <>
      {!deletable && (
        <div
          className={`flex w-12 h-12 ${shadow} rounded-full hover:cursor-pointer ${iconColor} ${bg}`}
        >
          <Icon className='mx-auto my-auto' size={24} weight='fill' />
        </div>
      )}
      {deletable && (
        <div
          className={`flex w-12 h-12 ${shadow} group rounded-full hover:cursor-pointer transition ease-in-out duration-500 hover:bg-red-100 ${iconColor} ${bg}`}
        >
          <Icon
            className='mx-auto flex group-hover:hidden group-hover:opacity-0 my-auto'
            size={24}
            weight='fill'
          />
          <Trash
            className='hidden text-red-800 group-hover:flex mx-auto group-hover:opacity-100 opacity-0 my-auto'
            size={24}
            weight='fill'
          />
        </div>
      )}
    </>
  );
};

export default CategoryIcon;
