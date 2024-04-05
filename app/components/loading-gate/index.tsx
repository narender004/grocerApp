/**
 * Loading Gate
 * @format
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Colors } from '@app/styles';
import { styles } from './styles';

type Props = {
  loading: boolean;
  children: React.ReactElement;
};

const LoadingGate = (props: Props) => {
  const { loading, children } = props;

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary.brand} />
      </View>
    );
  }

  return children;
};

export { LoadingGate };
