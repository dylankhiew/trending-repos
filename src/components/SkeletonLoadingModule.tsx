import * as React from "react";
import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface ErrorModuleProps {
  component: ReactNode;
  amount: number;
}

export default function SkeletonLoadingModule({
  component,
  amount,
}: ErrorModuleProps): JSX.Element {
  const renderComponent = () => {
    return [...Array(amount)].map((_x, i) => (
      <React.Fragment key={`skeleton-loader-${i}`}>{component}</React.Fragment>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>{renderComponent()}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 48,
  },
});
