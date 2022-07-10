import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import dashboardService, {DashboardResponse} from '~services/dashboard';
import {useStorage} from '~utils/hooks/useStorage';

/**
 * Custom Hooks for Dashboard Screen
 * @returns {data, loading, onDeposit, onLogOut}
 */

const useDashboard = () => {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const {value, setValue} = useStorage('token');
  const [loading, setLoading] = useState<boolean>(false);

  const onDeposit = useCallback(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    timeout;
  }, []);

  const onLogOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Yes', onPress: () => setValue('')},
        {text: 'Cancel', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await dashboardService({token: value});
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, [value]);

  return {data, loading, onDeposit, onLogOut};
};

export default useDashboard;
