import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
const initialState = {
  nome: '',
  email: '',
  senha: '',
  isMember: true,
};
function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { nome, email, senha, isMember } = values;
    if (!email || !senha || (!isMember && !nome)) {
      console.log('Preencha todos os campos');
    }
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
          submit
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
