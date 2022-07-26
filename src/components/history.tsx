import Expense from './expense';

const History = () => {
  return (
    <div className='w-2/5 h-screen p-4 mx-auto mb-8 bg-white shadow-lg rounded-lg'>
      <h1 className='text-2xl font-bold text-purple-900'>
        HISTÓRICO DE GASTOS
      </h1>
      <h2 className='mb-4 text-lg font-bold text-purple-700'>Maio - 2022</h2>
      <div className='space-y-4'>
        <Expense />
      </div>
    </div>
  );
};

export default History;
