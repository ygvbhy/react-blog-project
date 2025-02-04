import './App.css';
import { Outlet } from 'react-router-dom';
import FooterContent from './components/FooterContent';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';
function App() {
  return (
    <div className="transition-all duration-200 ease-linear">
      <HeaderContent />
      <MainContent>
        <Outlet />
      </MainContent>
      <FooterContent />
    </div>
  );
}

export default App;
