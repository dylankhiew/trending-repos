import { Image, StyleSheet, Text, View } from 'react-native';

import { SPACING } from '../constants/spacingConstants';

interface AccordionHeadProps {
  repository: app.RepositoryItem;
}

export default function AccordionHead({
  repository,
}: AccordionHeadProps): JSX.Element {
  const { username, repositoryName, builtBy } = repository;

  // It is safe to use this method as all repo has at least one author
  const avatar = builtBy[0].avatar;

  return (
    <View style={styles.accordionContainer}>
      <Image source={{ uri: avatar }} style={styles.accordionAvatar} />
      <View style={styles.accordionTitleArea}>
        <Text style={styles.accordionHeader}>{username}</Text>
        <Text style={styles.accordionTitle}>{repositoryName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordionContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginTop: SPACING.S_2,
    marginBottom: SPACING.S_2,
  },
  accordionAvatar: {
    height: 32,
    width: 32,
    borderRadius: 50,
    marginHorizontal: SPACING.S_4,
  },
  accordionTitleArea: {
    flexDirection: 'column',
  },
  accordionHeader: {
    fontSize: 12,
    marginBottom: SPACING.S_0,
    fontFamily: 'Roboto-Regular',
  },
  accordionTitle: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
});
