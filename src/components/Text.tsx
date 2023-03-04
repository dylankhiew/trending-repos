import { Text as RNText, StyleSheet } from "react-native";

type TextType = "bold" | "regular" | "medium";

export type TextProps = Partial<Record<TextType, boolean>> & RNText["props"];

export default function Text({
  bold,
  regular,
  medium,
  ...props
}: TextProps): JSX.Element {
  // TO-DO: Add to util and add test spec
  const renderTextStyle = () => {
    if (bold) {
      return styles.textBold;
    }

    if (regular) {
      return styles.textRegular;
    }

    if (medium) {
      return styles.textMedium;
    }
  };

  return <RNText style={renderTextStyle()} {...props} />;
}

const styles = StyleSheet.create({
  textRegular: {
    fontFamily: "Roboto-Regular",
  },
  textBold: {
    fontFamily: "Roboto-Bold",
  },
  textMedium: {
    fontFamily: "Roboto-Medium",
  },
});
