import { RadioGroup } from '@headlessui/react';
import { Asterisk, CreditCard, CurrencyCircleDollar } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import Category from '../models/category';
import { Tooltip } from './tooltip';

interface paymentMethodProps {
  changeMethod(method: string): void;
  category: Category;
}

const PaymentMethod: FC<paymentMethodProps> = ({
  changeMethod,
  category = {
    id: 0,
    name: 'Geral',
    style: {
      iconColor: 'text-slate-700',
      iconColorDark: 'text-slate-700',
      textLight: 'text-slate-50',
      textDark: 'text-slate-300',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      bgDark: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-500 to-slate-800',
      icon: Asterisk,
    },
  },
}) => {
  let [method, setMethod] = useState('card');

  useEffect(() => {
    changeMethod(method);
  }, [method]);

  return (
    <RadioGroup value={method} onChange={setMethod}>
      <div className='flex space-x-2'>
        <RadioGroup.Option value='card'>
          {({ checked }) => (
            <Tooltip message='Cartão'>
              <CreditCard
                className={
                  checked
                    ? `${category?.style?.textLight} hover:cursor-pointer`
                    : `${category?.style?.textDark} hover:cursor-pointer`
                }
                size={24}
                weight='fill'
              />
            </Tooltip>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value='money'>
          {({ checked }) => (
            <Tooltip message='Dinheiro'>
              {' '}
              <CurrencyCircleDollar
                className={
                  checked
                    ? `${category?.style?.textLight} hover:cursor-pointer`
                    : `${category?.style?.textDark} hover:cursor-pointer`
                }
                size={24}
                weight='fill'
              />
            </Tooltip>
          )}
        </RadioGroup.Option>
      </div>
    </RadioGroup>
  );
};

export default PaymentMethod;
