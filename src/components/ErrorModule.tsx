import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLOR } from "../constants/colorConstants";

interface ErrorModuleProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

export default function ErrorModule({
  onPress,
  title,
  subtitle,
  buttonTitle,
  imageSource,
}: ErrorModuleProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.errorImage}
        source={imageSource}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  errorImage: {
    height: 300,
  },
  title: {
    marginTop: 24,
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    color: COLOR.GRAY200,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 32,
    height: 48,
  },
  button: {
    borderColor: COLOR.GREEN,
    backgroundColor: COLOR.WHITE,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    heigth: 48,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
  },
  buttonText: {
    fontFamily: "Roboto-Medium",
    fontSize: 15,
    color: COLOR.GREEN,
    textTransform: "uppercase",
  },
});
