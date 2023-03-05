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
import AccordionBody from "../../components/AccordionBody";
import AccordionHead from "../../components/AccordionHead";
import AccordionHeadSkeleton from "../../components/AccordionHeadSkeleton";
import { COLOR } from "../../constants/colorConstants";
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
    // TO-DO: Clean up
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
        <AccordionHeadSkeleton />
      </ScrollView>
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

  const renderAccordionHead = (repo: app.RepositoryItem) => {
    return <AccordionHead repository={repo} />;
  };

  const renderAccordionBody = (repo: app.RepositoryItem) => {
    return <AccordionBody repository={repo} />;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <AccordionList
        containerItemStyle={styles.accordionItem}
        data={repositories ?? []}
        customTitle={renderAccordionHead}
        customBody={renderAccordionBody}
        style={styles.accordionList}
        animationDuration={200}
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
  accordionList: {
    width: "100%",
    margin: 0,
  },
  accordionItem: {
    margin: 0,
    borderColor: COLOR.GRAY,
    borderBottomWidth: 1,
    borderRadius: 0,
  },
});
