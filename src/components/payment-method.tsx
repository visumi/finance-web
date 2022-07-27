import { RadioGroup } from '@headlessui/react';
import { CreditCard, CurrencyCircleDollar } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Category } from '../models/category';
import { Tooltip } from './tooltip';

interface paymentMethodProps {
  changeMethod(method: string): void;
  category: Category;
}

const PaymentMethod = ({ changeMethod, category }: paymentMethodProps) => {
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

PaymentMethod.defaultProps = {};

export default PaymentMethod;
