import { Image, Text, TouchableOpacity, View } from "react-native";
import { useWarmUpBrowser } from "@/shared";
import { styles } from ".";
import * as WebBrowser from "expo-web-browser";
import { useClickSignIn } from "@/shared/hooks/useClickSignIt";

WebBrowser.maybeCompleteAuthSession();

export const SignInWithOAuth = () => {
  const handleSignIn = useClickSignIn();
  useWarmUpBrowser();

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("@/shared/assets/img/login.jpeg")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>
          Welcome to my test application!
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            I'm glad to see you here.{" "}
          </Text>
        </Text>
        <Text style={styles.subTitle}>
          Please log in to continue and start using all the functions of my
          application, although there is a bit of functionality here, but not
          the point
        </Text>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonTitle}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
