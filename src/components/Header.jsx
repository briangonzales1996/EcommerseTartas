import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';
import { Navigation } from './Navigation';
function Header() {
  return (
    <header>
    <TopHeader></TopHeader>
      <Navigation/>
      


    </header>
  );
}
export default Header;