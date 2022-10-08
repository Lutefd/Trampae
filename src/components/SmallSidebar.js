import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <Logo />
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <div className="nav-links">a</div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
