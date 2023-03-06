import { StyleSheet, View } from 'react-native';

import { COLOR } from '../constants/colorConstants';
import { SPACING } from '../constants/spacingConstants';

export default function AccordionHeadSkeleton(): JSX.Element {
  return (
    <View style={styles.accordionContainer}>
      <View style={styles.accordionAvatar} />
      <View style={styles.accordionTitleArea}>
        <View style={styles.accordionHeader} />
        <View style={styles.accordionTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordionContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: COLOR.GRAY100,
    borderBottomWidth: 1,
    marginTop: 21,
  },
  accordionAvatar: {
    height: 32,
    width: 32,
    borderRadius: 50,
    marginHorizontal: SPACING.S_4,
    backgroundColor: COLOR.GRAY100,
  },
  accordionTitleArea: {
    flexDirection: 'column',
    flex: 1,
  },
  accordionHeader: {
    marginBottom: SPACING.S_3,
    height: 10,
    width: 100,
    backgroundColor: COLOR.GRAY100,
    borderRadius: 5,
  },
  accordionTitle: {
    width: 260,
    height: 10,
    backgroundColor: COLOR.GRAY100,
    borderRadius: 5,
  },
});
