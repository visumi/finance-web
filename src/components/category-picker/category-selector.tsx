import { Transition } from '@headlessui/react';
import { Plus } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import Category from '../../models/category';
import categories from '../../utils/categories';
import CategoryIcon from './category-icon';

interface categorySelectorProps {
  changeCategory(category: Category): void;
}

const CategorySelector: FC<categorySelectorProps> = ({ changeCategory }) => {
  const [open, setOpen] = useState(false);
  let [categoryData, setCategoryData] = useState({
    id: -1,
    name: 'Nenhum',
    style: {
      iconColor: 'text-slate-700',
      iconColorDark: 'text-slate-700',
      textLight: 'text-slate-50',
      textDark: 'text-slate-300',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      bgDark: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Plus,
    },
  });

  useEffect(() => {
    changeCategory(categoryData);
  }, [categoryData]);

  return (
    <div onClick={() => setOpen(!open)} className='relative z-20'>
      <div className='mb-1'>
        <CategoryIcon
          iconColor={categoryData?.style.iconColor}
          icon={categoryData?.style.icon}
          bg={categoryData?.style.bg}
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
            <div className='flex mb-1 space-x-1'>
              {categories.slice(0, 5).map((cat) => (
                <button key={cat?.id} onClick={() => setCategoryData(cat)}>
                  <CategoryIcon
                    bg={cat?.style?.bgDark}
                    shadow={'shadow-lg'}
                    iconColor={cat?.style?.iconColorDark}
                    icon={cat?.style?.icon}
                  />
                </button>
              ))}
            </div>
            <div className='flex space-x-1'>
              {categories.slice(5, 10).map((cat) => (
                <button key={cat?.id} onClick={() => setCategoryData(cat)}>
                  <CategoryIcon
                    bg={cat?.style?.bgDark}
                    shadow={'shadow-lg'}
                    iconColor={cat?.style?.iconColorDark}
                    icon={cat?.style?.icon}
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
