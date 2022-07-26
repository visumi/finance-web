import { RadioGroup } from '@headlessui/react';
import { CreditCard, CurrencyCircleDollar } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Tooltip } from './tooltip';

interface paymentMethodProps {
  changeMethod(method: string): void;
}

const PaymentMethod = ({ changeMethod }: paymentMethodProps) => {
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
                    ? 'text-slate-50 hover:cursor-pointer'
                    : 'text-slate-300 hover:cursor-pointer'
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
                    ? 'text-slate-50 hover:cursor-pointer'
                    : 'text-slate-300 hover:cursor-pointer'
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
