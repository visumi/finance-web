import { ReactNode } from 'react';
export const Tooltip = ({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) => {
  return (
    <div className='relative flex flex-col items-center group'>
      {children}
      <div className='absolute flex-col items-center hidden mb-6 top-7 hover:flex group-hover:flex'>
        <div className='w-3 h-3 rotate-45 bg-purple-700'></div>
        <span className='relative z-10 p-2 -mt-2 text-xs leading-none whitespace-no-wrap bg-purple-600 rounded-md shadow-lg text-purple-50'>
          {message}
        </span>
      </div>
    </div>
  );
};
