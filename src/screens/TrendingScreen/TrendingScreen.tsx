import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { NavigationStackParamList } from "../../../App";

type TrendingScreenProps = NativeStackScreenProps<
  NavigationStackParamList,
  "Trending"
>;

export default function TrendingScreen({ navigation }: TrendingScreenProps) {
  const [repositories, setRepositories] =
    useState<app.GetTrendingRepoResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

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

  const renderRepo = (item: app.RepositoryItem, index: number) => {
    return (
      <View key={`repo-item-${index}`}>
        <Text>{item.repositoryName}</Text>
      </View>
    );
  };

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
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {repositories?.map(renderRepo)}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
