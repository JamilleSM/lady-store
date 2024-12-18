import { Route, Routes, useNavigate } from 'react-router-dom';
import Produto from '../pages/produtos/produtos';
import Cliente from '../pages/clientes/clientes';
import Home from '../pages/Home/Home';
import SideNav from '../components/sidenav/sidenav';
import Financeiro from '../pages/financeiro/financeiro';
import Estoque from '../pages/estoque/estoque';
import Fornecedor from '../pages/fornecedor/fornecedor';
import Login from '../pages/login/login';
import Vendas from '../pages/vendas/vendas';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const MainLayout = ({
  children,
  handleNavigation,
}: {
  children: React.ReactNode;
  handleNavigation: (path: string) => void;
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideNav handleNavigation={handleNavigation} />
      {children}
    </div>
  );
};

const Rotas = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path='/*'
        element={
          <MainLayout handleNavigation={handleNavigation}>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/produtos' element={<Produto />} />
              <Route path='/clientes' element={<Cliente />} />
              <Route path='/financeiro' element={<Financeiro />} />
              <Route path='/estoque' element={<Estoque />} />
              <Route path='/fornecedor' element={<Fornecedor />} />
              <Route path='/vendas' element={<Vendas/>} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default Rotas;
