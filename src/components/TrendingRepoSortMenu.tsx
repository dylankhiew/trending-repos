import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { setRepoSortingMethod } from '../actions/reposActions';
import { COLOR } from '../constants/colorConstants';
import { SPACING } from '../constants/spacingConstants';
import { useReduxDispatch } from '../state/store';

export default function TrendingRepoSortMenu(): JSX.Element {
  const dispatch = useReduxDispatch();

  return (
    <View style={styles.sortMenu}>
      <TouchableOpacity
        style={styles.sortMenuItem}
        onPress={() => dispatch(setRepoSortingMethod('STARS'))}
      >
        <Text>Sort by stars</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortMenuItem}
        onPress={() => dispatch(setRepoSortingMethod('NAME'))}
      >
        <Text>Sort by name</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sortMenu: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    backgroundColor: COLOR.WHITE,
    margin: SPACING.S_4,
    padding: SPACING.S_2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,
    elevation: 16,
  },
  sortMenuItem: {
    fontFamily: 'Roboto-Medium',
    height: 48,
    padding: 16,
    fontSize: 20,
  },
});
