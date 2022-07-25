const Meta = () => {
  return (
    <div className='bg-green-500 w-full h-28 rounded-xl flex flex-col justify-around'>
      <span className='text-green-50 font-medium text-lg pl-4 pt-2'>
        Gasto mensal
      </span>
      <div className='bg-green-100 mx-4 h-4 rounded-full'></div>
      <div className='flex justify-between'>
        <span className='text-green-50 font-medium text-lg pl-4'>
          R$ 50,00
        </span>
        <span className='text-green-50 font-medium text-lg pr-4'>
          R$ 1000,00
        </span>
      </div>
    </div>
  );
};

export default Meta;
