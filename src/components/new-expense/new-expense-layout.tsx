const NewExpenseLayout = ({category, children}: any) => {
  return (
    <div className={`flex w-full h-20 p-4 rounded-lg ${category.style.card}`}>
      {children}
    </div>
  )
};

export default NewExpenseLayout;