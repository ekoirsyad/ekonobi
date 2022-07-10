import {useCallback, useEffect, useMemo, useState} from 'react';
import loginService from '~services/login';
import {useStorage} from '~utils/hooks/useStorage';

type ILoginForms = {
  [field: string]: string;
};

const initialData: ILoginForms = {
  email: '',
  password: '',
};

const errInitialData: ILoginForms = {
  email: '',
  password: '',
};

/**
 * Custom Hooks for Login Screen
 * @returns {data, setData, loading, setLoading, onSubmit, onChange}
 */
const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState<ILoginForms>(initialData);
  const {setValue} = useStorage('token');

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const onChange = useCallback(
    (field: string, value: string) => {
      setFields({
        ...fields,
        [field]: value,
      });
    },
    [fields],
  );

  const fieldError: ILoginForms = useMemo(() => {
    let err = errInitialData;
    const mail =
      fields.email.length > 0 &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fields.email);
    const pass = fields.password.length > 0 && fields.password.length < 6;
    if (mail) {
      err = {
        ...err,
        email: 'Invalid E-Mail Address',
      };
    }
    if (pass) {
      err = {
        ...err,
        password: 'Invalid Password',
      };
    }
    return err;
  }, [fields]);

  const login = useCallback(async () => {
    setLoading(true);
    if (!fieldError.email || !fieldError.password) {
      const params = {
        email: fields.email,
        password: fields.password,
      };
      await loginService(params)
        .then(res => {
          setValue(res);
        })
        .catch(() => {
          setError('Error, please check your credentials');
        });
    }

    setLoading(false);
  }, [fields.email, fields.password, setValue, fieldError]);

  return {
    error,
    loading,
    login,
    fields,
    onChange,
    fieldError,
  };
};

export default useLogin;
