import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div class="">
        <img src={img} alt="Error page" />
        <h3>Pagina não encontrada</h3>
        <p>Podemos te redirecionar para o inicio</p>
        <Link to="/landing">De volta para casa</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
