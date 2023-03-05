import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface HeaderButtonProps {
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

export default function HeaderButton({
  imageSource,
  onPress,
}: HeaderButtonProps): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={styles.moreOptionsIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  moreOptionsIcon: {
    width: 24,
    height: 24,
  },
});
