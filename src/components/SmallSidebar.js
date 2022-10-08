import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import links from '../utils/links';

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
            <div className="nav-links">
              {links.map((link) => {
                const { text, path, id, icon } = link;
                return (
                  <NavLink
                    to={path}
                    className={({ isActive }) => {
                      return isActive ? 'nav-link active' : 'nav-link';
                    }}
                    key={id}
                    onClick={toggle}
                  >
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
