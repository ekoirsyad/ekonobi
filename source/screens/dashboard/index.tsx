import React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';

import Button from '~components/button';
import GradientView from '~components/gradient-view';
import colorPalette from '~utils/styles/color-palletes';
import useDashboard from './hooks/useDashboard';
import styles from '~screens/dashboard/style';

const DashboardScreen = () => {
  const {data, loading, onDeposit, onLogOut} = useDashboard();

  const buttonStyle: ViewStyle | ViewStyle[] = loading
    ? [
        styles.buttonContainer,
        {
          backgroundColor: colorPalette.textSecondary,
        },
      ]
    : styles.buttonContainer;

  return (
    <GradientView style={styles.container}>
      <View>
        <Image style={styles.image} source={require('~assets/ads.png')} />
        <View style={styles.changesContainer}>
          <Text style={styles.changesTitle}>24H Changes</Text>
          <Text
            style={
              styles.changesContent
            }>{`+ ${data?.['24hourchange']}%`}</Text>
        </View>
        <Text style={styles.balance}>{`$${data?.total_asset}`}</Text>
        <Button
          label={'Deposit'}
          icon={'download'}
          disabled={loading}
          onPress={onDeposit}
          style={buttonStyle}
          labelStyle={styles.buttonLabel}
        />
      </View>
      <Button
        label={'I want to Logout'}
        // icon={'download'}
        disabled={loading}
        onPress={onLogOut}
        style={styles.buttonLogOut}
        labelStyle={styles.labelLogOut}
      />
    </GradientView>
  );
};

export default DashboardScreen;
