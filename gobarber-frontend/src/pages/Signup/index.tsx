// vendors
import React, { useCallback, useState, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

// componets
import Logo from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

// styles
import {
  Container,
  Content,
  Background,
  Selector,
  Client,
  Provider,
} from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const [selector, setSelector] = useState(true);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
          'A senha deve conter no mínimo 8 dígitos.',
        ),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'As senhas devem corresponder',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  const selectedOption = useCallback(() => {
    setSelector(true);
  }, []);
  const selectOption = useCallback(() => {
    setSelector(false);
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="GoBarber-Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          {/* <h1>Faça seu cadastro</h1> */}

          <Selector>
            <Client selector={selector} onClick={selectedOption}>
              Sou cliente
            </Client>
            <Provider selector={selector} onClick={selectOption}>
              Sou barbeiro
            </Provider>
          </Selector>

          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Input
            name="passwordConfirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
