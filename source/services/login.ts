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

/**
 *
 * @param {email, password} ILoginService user credentials
 * @returns User Token
 */
const loginService = async ({email, password}: ILoginService) => {
  try {
    const params = qs.stringify({email, password});

    const url: string = 'http://backend.test.usenobi.com:8000/login';

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const {data} = await axios.post<LoginResponse>(url, params, config);
    return data.token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    } else {
      throw Error('An unexpected error occurred');
    }
  }
};

export default loginService;
