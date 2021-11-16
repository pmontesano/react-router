import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/authProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
