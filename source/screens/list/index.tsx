import React from 'react';
import {FlatList, Text, View} from 'react-native';
import GradientView from '~components/gradient-view';
import Header from '~components/header';
import {CoinItem, keyExtractor} from '~screens/list/components/coin-item';
import useCoins from '~screens/list/hooks/useCoins';
import styles from '~screens/list/style';
import {italic} from '~utils/styles/typography';

const EmptyList = () => {
  return (
    <View style={styles.empty}>
      <Text style={italic}>No coins found</Text>
    </View>
  );
};

const ListScreen = () => {
  const {data, setQuery, query} = useCoins();

  return (
    <GradientView>
      <Header onChangeText={setQuery} query={query} />
      <FlatList
        style={styles.flatList}
        renderItem={CoinItem}
        data={data}
        keyExtractor={keyExtractor}
        ListEmptyComponent={EmptyList}
      />
    </GradientView>
  );
};

export default ListScreen;
