import { Image, StyleSheet, Text, View } from "react-native";

import { IMAGES } from "../../assets/IMAGES";
import { COLOR } from "../constants/colorConstants";
import { SPACING } from "../constants/spacingConstants";

interface AccordionBodyProps {
  repository: app.RepositoryItem;
}

export default function AccordionBody({
  repository,
}: AccordionBodyProps): JSX.Element {
  const { description, url, language, starsSince, forks, languageColor } =
    repository;
  const bodyDescription = `${description ?? ""} (${url})`;

  return (
    <View style={styles.accordionBodyContainer}>
      <Text style={styles.accordionDescription}>{bodyDescription}</Text>
      <View style={styles.accordionFooter}>
        <View style={styles.bottomFooter}>
          <View
            style={[styles.languageCircle, { backgroundColor: languageColor }]}
          />
          <Text style={styles.bottomFooterText}>{language}</Text>
        </View>
        <View style={styles.bottomFooter}>
          <Image source={IMAGES.ICON.STAR} style={styles.bottomFooterIcon} />
          <Text style={styles.bottomFooterText}>{starsSince}</Text>
        </View>
        <View style={styles.bottomFooter}>
          <Image source={IMAGES.ICON.FORK} style={styles.bottomFooterIcon} />
          <Text style={styles.bottomFooterText}>{forks}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordionBodyContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: 0,
    // Offspace which accounts for avatar and its margin
    marginLeft: 32 + SPACING.S_4 + SPACING.S_4,
    marginBottom: SPACING.S_2,
  },
  accordionFooter: {
    flex: 1,
    flexDirection: "row",
    marginTop: SPACING.S_2,
  },
  bottomFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginRight: SPACING.S_3,
  },
  languageCircle: {
    height: 12,
    width: 12,
    borderRadius: 12,
    marginRight: SPACING.S_0,
  },
  bottomFooterIcon: {
    height: 16,
    width: 16,
  },
  bottomFooterText: {
    color: COLOR.GRAY300,
    fontFamily: "Roboto-Regular",
  },
  accordionDescription: {
    fontFamily: "PingFangSC-Regular",
    fontSize: 12,
    marginRight: SPACING.S_4,
    color: COLOR.GRAY300,
  },
});
