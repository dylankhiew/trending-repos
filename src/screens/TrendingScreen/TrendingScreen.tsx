import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { AccordionList } from "react-native-accordion-list-view";

import { NavigationStackParamList } from "../../../App";
import { IMAGES } from "../../../assets/IMAGES";
import Text from "../../components/Text";
import { SPACING } from "../../constants/spacingConstants";

type TrendingScreenProps = NativeStackScreenProps<
  NavigationStackParamList,
  "Trending"
>;

export default function TrendingScreen({ navigation }: TrendingScreenProps) {
  const [repositories, setRepositories] =
    useState<app.GetTrendingRepoResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={IMAGES.ICON.MORE_OPTIONS}
            style={styles.moreOptionsIcon}
          />
        </TouchableOpacity>
      ),
      headerTitleStyle: styles.header,
    });

    // Needed for the library
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  const fetchTrendingRepos = () => {
    setIsLoading(true);
    const url =
      "https://demo-github-trending.moneymatch.technology:8443/repositories";
    fetch(url)
      .then((response) => response.json())
      .then((actualData) => {
        setIsLoading(false);
        setRepositories(actualData);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchTrendingRepos();
  }, []);

  if (isLoading) {
    // TO-DO: Show loader
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  if (isError) {
    // TO-DO: Show error
    return (
      <View style={styles.container}>
        <Image source={IMAGES.BACKGROUND.NO_INTERNET_CONNECTION} />
      </View>
    );
  }

  const renderAccordionTitle = (repo: app.RepositoryItem) => {
    const { username, repositoryName, builtBy } = repo;
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
  };

  const renderAccordionBody = (repo: app.RepositoryItem) => {
    const { description, url, language, starsSince, forks, languageColor } =
      repo;
    const bodyDescription = `${description ?? ""} (${url})`;

    return (
      <View style={styles.accordionBodyContainer}>
        <Text style={styles.accordionDescription}>{bodyDescription}</Text>
        <View style={styles.accordionFooter}>
          <View style={styles.bottomFooter}>
            <View
              style={[
                styles.languageCircle,
                { backgroundColor: languageColor },
              ]}
            />
            <Text regular>{language}</Text>
          </View>
          <View style={styles.bottomFooter}>
            <Image source={IMAGES.ICON.STAR} style={styles.bottomFooterIcon} />
            <Text regular>{starsSince}</Text>
          </View>
          <View style={styles.bottomFooter}>
            <Image source={IMAGES.ICON.FORK} style={styles.bottomFooterIcon} />
            <Text regular>{forks}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <AccordionList
        containerItemStyle={styles.accordionItem}
        data={repositories ?? []}
        customTitle={renderAccordionTitle}
        customBody={renderAccordionBody}
        style={{ width: "100%", margin: 0 }}
        animationDuration={400}
        expandMultiple={false}
        customIcon={() => <></>}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: SPACING.S_4,
  },
  header: {
    fontSize: 21,
    marginVertical: 14,
    fontFamily: "Roboto-Medium",
  },
  moreOptionsIcon: {
    width: 24,
    height: 24,
  },
  accordionContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginTop: SPACING.S_2,
    marginBottom: SPACING.S_2,
  },
  accordionItem: {
    margin: 0,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderRadius: 0,
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
  accordionBodyContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: 0,
    // Offspace which accounts for avatar and its margin
    marginLeft: 32 + SPACING.S_4 + SPACING.S_4,
    marginTop: SPACING.S_2,
    marginBottom: SPACING.S_2,
  },
  accordionFooter: {
    flex: 1,
    flexDirection: "row",
    marginTop: SPACING.S_2,
  },
  languageCircle: {
    height: 12,
    width: 12,
    borderRadius: 12,
    marginRight: SPACING.S_0,
  },
  bottomFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginRight: SPACING.S_3,
  },
  bottomFooterIcon: {
    height: 16,
    width: 16,
  },
  accordionDescription: {
    fontFamily: "PingFangSC-Regular",
    fontSize: 12,
  },
});
