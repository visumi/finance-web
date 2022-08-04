import { Transition } from '@headlessui/react';
import { FC, useState } from 'react';

const MetaBar: FC = () => {
  const [value, setValue] = useState('w-4/5');

  return (
    <div className='h-4 bg-green-100 rounded-full' onClick={() => setValue('w-1/5')}>
      <Transition
        appear
        show={true}
        enter='transition-width ease-in-out duration-1000'
        enterFrom='w-0'
        enterTo='w-full'
      >
        <div
          className={`${value} h-4 bg-green-700 transition-width duration-1000 rounded-full`}
        ></div>
      </Transition>
    </div>
  );
};

export default MetaBar;
