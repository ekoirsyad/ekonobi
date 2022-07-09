import {useCallback, useState} from 'react';
import loginService from '~services/login';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = useCallback(async () => {
    setLoading(true);
    await loginService({email, password})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(err);
      });

    setLoading(false);
  }, [email, password]);

  return {email, setEmail, password, setPassword, error, loading, login};
};

export default useLogin;
