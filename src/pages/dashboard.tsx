const Dashboard = () => {
  return (
    <div className='flex h-screen bg-no-repeat bg-cover bg-waves'>
      {/* <span
        onClick={() => {
          fetch('http://localhost:4000/auth/logout', { credentials: 'include' })
            .then((r) => r.json())
            .then((_) => {});
          window.open('/', '_self');
        }}
      >
        LOGOUT
      </span> */}
      <div className='flex flex-col justify-center w-full'>
        <div className='w-2/5 h-screen my-8 mx-auto bg-white rounded-lg shadow-md'>
          <div className='bg-red-500 rounded-t-lg h-16'>xd</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
