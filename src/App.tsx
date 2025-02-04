import './App.css';
import { Outlet } from 'react-router-dom';
import FooterContent from './components/FooterContent';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';
function App() {
  return (
    <>
      <HeaderContent />
      <MainContent>
        <Outlet />
      </MainContent>
      <FooterContent />
    </>
  );
}

export default App;
