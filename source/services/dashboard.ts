import axios, {AxiosRequestConfig} from 'axios';
import qs from 'qs';

export type DashboardResponse = {
  status: string;
  total_asset: string;
  '24hourchange': string;
};

interface IDashboardService {
  token: string;
}
/**
 * @param {token} IDashboardService saved user token
 * @returns IDashboardResponse
 */
const dashboardService = async ({token}: IDashboardService) => {
  try {
    const params = qs.stringify({token});

    const url: string = 'http://backend.test.usenobi.com:8000/dashboard';

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const {data} = await axios.post<DashboardResponse>(url, params, config);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    } else {
      throw Error('An unexpected error occurred');
    }
  }
};

export default dashboardService;
