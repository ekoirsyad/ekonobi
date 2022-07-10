import React from 'react';
import {Image, Text, View} from 'react-native';
import {Coin} from '~services/list';
import convertCurrency from '~utils/currency';
import {bold} from '~utils/styles/typography';
import styles from '~screens/list/components/coin-item/style';

export const keyExtractor = (item: Coin) => item.ticker;

export const CoinItem = ({item}: {item: Coin}) => {
  return (
    <View style={styles.container}>
      <View style={styles.coinInfo}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        <Text style={bold}>{item.ticker}</Text>
      </View>
      <Text style={styles.amount}>{convertCurrency(item.amount)}</Text>
    </View>
  );
};
