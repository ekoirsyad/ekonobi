import axios, {AxiosRequestConfig} from 'axios';
import qs from 'qs';

type LoginResponse = {
  status: string;
  token: string;
  message: string;
};

interface ILoginService {
  email: string;
  password: string;
}

const loginService = async ({email, password}: ILoginService) => {
  console.log(email, password);
  try {
    const params = qs.stringify({email, password});

    const url: string = 'http://backend.test.usenobi.com:8000/login';

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const {data} = await axios.post<LoginResponse>(url, params, config);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'An unexpected error occurred';
    }
  }
};

export default loginService;
