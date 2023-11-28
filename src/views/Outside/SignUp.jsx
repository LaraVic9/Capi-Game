// src/components/SignUp.jsx

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/config/firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Usuário criado com sucesso
      console.log('Usuario criado com sucesso');
    } catch (error) {
      console.error('Erro ao criar usuário', error);
    }
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Criar Conta</button>
    </div>
  );
};

export default SignUp;
