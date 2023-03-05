import { Image, StyleSheet, View } from "react-native";

import Text from "./Text";
import { SPACING } from "../constants/spacingConstants";

interface AccordionHeadProps {
  repository: app.RepositoryItem;
}

export default function AccordionHead({
  repository,
}: AccordionHeadProps): JSX.Element {
  const { username, repositoryName, builtBy } = repository;
  const avatar = builtBy[0].avatar;

  return (
    <View style={styles.accordionContainer}>
      <Image source={{ uri: avatar }} style={styles.accordionAvatar} />
      <View style={styles.accordionTitleArea}>
        <Text style={styles.accordionHeader} regular>
          {username}
        </Text>
        <Text style={styles.accordionTitle} medium>
          {repositoryName}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordionContainer: {
    display: "flex",
    flexDirection: "row",
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
    flexDirection: "column",
  },
  accordionHeader: {
    fontSize: 12,
    marginBottom: SPACING.S_0,
  },
  accordionTitle: {
    fontSize: 15,
  },
});
