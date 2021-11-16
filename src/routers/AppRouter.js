import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../pages/notFound';
import Navbar from '../components/navBar';
import Profile from '../pages/profile';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import Payment from '../pages/payment';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export default function AppRouter() {
  const isAuthenticated = null;

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile/:username" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/payment" component={Payment} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
