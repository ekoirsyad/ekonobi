import axios from 'axios';

export type Coin = {
  image: string;
  ticker: string;
  amount: string;
};

type ListResponse = {
  status: string;
  data: Coin[];
  message: string;
};

/**
 * @returns data for Coin[]
 */
const listService = async () => {
  try {
    const url: string = 'http://backend.test.usenobi.com:8000/list';

    const {data} = await axios.get<ListResponse>(url);
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    } else {
      throw Error('An unexpected error occurred');
    }
  }
};

export default listService;
