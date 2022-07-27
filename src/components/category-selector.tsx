import { Transition } from '@headlessui/react';
import { Asterisk, Plus } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Category } from '../models/category';
import categories from '../utils/categories';
import CategoryIcon from './category-icon';

interface CategorySelectorProps {
  changeCategory(category: Category): void;
}

const CategorySelector = ({ changeCategory }: CategorySelectorProps) => {
  const [open, setOpen] = useState(false);
  let [category, setCategory] = useState({
    id: 0,
    name: 'Geral',
    text: 'text-slate-700',
    bg: 'bg-slate-100 hover:bg-slate-200',
    icon: Asterisk,
  });

  useEffect(() => {
    changeCategory(category);
  }, [category]);

  return (
    <div onClick={() => setOpen(!open)} className='relative z-20'>
      <div className='flex w-12 h-12 rounded-full bg-slate-100 hover:cursor-pointer hover:bg-slate-200'>
        <Plus
          className='mx-auto my-auto text-slate-700'
          size={24}
          weight='fill'
        />
      </div>
      {open && (
        <Transition
          appear
          show={open}
          enter='transition ease-in-out duration-200 delay-100 transform'
          enterFrom='opacity-0 scale-0'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='absolute z-20 flex flex-col -bottom-13'>
            <div className='flex space-x-1'>
              {categories.slice(0, 5).map((cat) => (
                <button key={cat?.id} onClick={() => setCategory(cat)}>
                  <CategoryIcon
                    bg={cat?.bg}
                    text={cat?.text}
                    icon={cat?.icon}
                  />
                </button>
              ))}
            </div>
            <div className='flex space-x-1'>
              {categories.slice(5, 10).map((cat) => (
                <button key={cat?.id} onClick={() => setCategory(cat)}>
                  <CategoryIcon
                    bg={cat?.bg}
                    text={cat?.text}
                    icon={cat?.icon}
                  />
                </button>
              ))}
            </div>
          </div>
        </Transition>
      )}
    </div>
  );
};

export default CategorySelector;
