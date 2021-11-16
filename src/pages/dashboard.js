import UseAuth from '../auth/useAuth';

const Dashboard = () => {
  const auth = UseAuth();

  return (
    <div>
      <h1>Welcome {auth.user.name}</h1>
    </div>
  );
};

export default Dashboard;
