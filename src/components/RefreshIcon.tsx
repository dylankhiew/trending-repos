import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { IMAGES } from '../../assets/IMAGES';

export default function RefreshIcon(): JSX.Element {
  return (
    <View style={styles.refreshIconContainer}>
      <Image source={IMAGES.ICON.REFRESH} style={styles.refreshIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  refreshIconContainer: {
    position: 'absolute',
    top: 30,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,
    elevation: 16,
    zIndex: 10,
  },
  refreshIcon: {
    height: 25,
    width: 25,
  },
});
