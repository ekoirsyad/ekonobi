import {useMMKVStorage, MMKVLoader} from 'react-native-mmkv-storage';

/**
 * Initalized local storage
 */
const MMKV = new MMKVLoader().initialize();
type LiteralUnion<T extends U, U = string> = T | (U & {});

/**
 * @param key key of the storage
 * @param defaultValue default value of the storage
 * @returns {value, setValue}
 */
export const useStorage = (
  key: LiteralUnion<'token'>,
  defaultValue?: string,
) => {
  const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue);
  return {value, setValue};
};
