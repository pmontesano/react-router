import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../auth/useAuth';

const Login = () => {
  const auth = UseAuth();

  const history = useHistory();
  const location = useLocation();

  const previusURL = location.state?.from;

  const handleLogin = (value) => {
    auth.login(value);
    history.push(previusURL || '/dashboard');
  };

  const [login, setLogin] = useState({
    value: '',
  });

  const setValue = (e) => {
    setLogin({
      value: e.target.value,
    });
  };

  const { value } = login;

  return (
    <div>
      <h1>LoginPage</h1>
      <label>Nombre</label>
      <input
        type="text"
        value={value}
        placeholder="Nombre"
        onChange={setValue}
      />
      <button onClick={(e) => handleLogin(value)}>Signin</button>
    </div>
  );
};

export default Login;
