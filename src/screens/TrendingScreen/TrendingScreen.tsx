import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, UIManager } from "react-native";
import { AccordionList } from "react-native-accordion-list-view";

import { NavigationStackParamList } from "../../../App";
import { IMAGES } from "../../../assets/IMAGES";
import AccordionBody from "../../components/AccordionBody";
import AccordionHead from "../../components/AccordionHead";
import AccordionHeadSkeleton from "../../components/AccordionHeadSkeleton";
import ErrorModule from "../../components/ErrorModule";
import HeaderButton from "../../components/HeaderButton";
import SkeletonLoadingModule from "../../components/SkeletonLoadingModule";
import { COLOR } from "../../constants/colorConstants";
import { SPACING } from "../../constants/spacingConstants";
import { TRENDING_SCREEN_CONFIG } from "../../constants/trendingScreenConstants";

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
        <HeaderButton imageSource={IMAGES.ICON.MORE_OPTIONS} />
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
    // setIsError(true);
    fetchTrendingRepos();
  }, []);

  const renderAccordionHead = (repo: app.RepositoryItem) => {
    return <AccordionHead repository={repo} />;
  };

  const renderAccordionBody = (repo: app.RepositoryItem) => {
    return <AccordionBody repository={repo} />;
  };

  if (isLoading) {
    // TO-DO: Clean up
    return (
      <SkeletonLoadingModule
        component={<AccordionHeadSkeleton />}
        amount={TRENDING_SCREEN_CONFIG.SKELETON_LOADER_AMOUNT}
      />
    );
  }

  if (isError) {
    return (
      <ErrorModule
        title="Something went wrong.."
        imageSource={IMAGES.BACKGROUND.NO_INTERNET_CONNECTION}
        subtitle="An alien is probably blocking your signal."
        buttonTitle="Retry"
        onPress={() => fetchTrendingRepos()}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <AccordionList
        containerItemStyle={styles.accordionItem}
        data={repositories ?? []}
        customTitle={renderAccordionHead}
        customBody={renderAccordionBody}
        style={styles.accordionList}
        animationDuration={TRENDING_SCREEN_CONFIG.ANIMATION_DURATION}
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

  accordionList: {
    width: "100%",
    margin: 0,
  },
  accordionItem: {
    margin: 0,
    borderColor: COLOR.GRAY100,
    borderBottomWidth: 1,
    borderRadius: 0,
  },
});
