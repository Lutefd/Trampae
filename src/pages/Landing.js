import main from '../assets/images/main.svg';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
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
              Uma forma simples de <span>gerenciar</span> suas aplicações de
              emprego
            </h1>
            <p>
              O Trampaê é uma forma simples e moderna de se organizar no meio do
              caos do mercado de trabalho. Hoje em dia, cada candidato aplica
              para dezenas de vagas, o Trampaê existe para te ajudar com isso!
              Com uma interface minimalista, você consege acompanhar suas
              aplicações de empregos e as separar pelo os seus andamentos!
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Registrar
            </Link>
          </div>
          <img src={main} alt="main" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
