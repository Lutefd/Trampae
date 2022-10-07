import main from '../assets/images/main.svg';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div class="container page">
          {/*info*/}
          <div className="info">
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ullamcorper eu diam eu finibus. Aenean scelerisque, urna eget
              commodo scelerisque, eros mauris sollicitudin nulla, vitae
              ultrices elit metus sit amet est. Ut tempor finibus velit.
              Pellentesque id lobortis leo. Integer eu magna suscipit, eleifend
            </p>
            <button className="btn btn-hero">Login/Registrar</button>
          </div>
          <img src={main} alt="main" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
