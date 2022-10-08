import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';

const initialState = {
  nome: '',
  email: '',
  senha: '',
  isMember: true,
};
function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { nome, email, senha, isMember } = values;
    if (!email || !senha || (!isMember && !nome)) {
      toast.error('Preencha todos os campos');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, senha }));
      return;
    }
    dispatch(registerUser({ nome, email, senha }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Cadastro'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="nome"
            value={values.nome}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="senha"
          value={values.senha}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Enviar
        </button>
        <p>
          {values.isMember ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Cadastre-se' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
