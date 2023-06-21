import React, { useState } from "react";
import Icon from "@expo/vector-icons/Feather";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Image,
} from "react-native";

export const RegistrationScreen = () => {
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.mainContainer}>
        <ImageBackground
          source={require("../assets/PhotoBG.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.keyboard}
          >
            <View style={styles.container}>
              <View style={styles.box}>
                <Image
                  style={styles.avatar}
                  source={require("../assets/avatar.png")}
                />
                <Icon
                  name="plus"
                  size={20}
                  color="#FF6C00"
                  style={{ transform: [{ rotate: "-45deg" }] }}
                />
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Логін"
                  inputMode="text"
                  value={text}
                  onChangeText={setText}
                  placeholderTextColor="#BDBDBD"
                />
                <TextInput
                  style={styles.inputMail}
                  placeholder="Адреса електронної пошти"
                  inputMode="email"
                />
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Пароль"
                  inputMode="text"
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.loginLink}>
                <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
              <StatusBar style="auto" />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  container: {
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  keyboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  box: {
    position: "relative",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 16,
    width: "100%",
    backgroundColor: "transparent",
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  inputMail: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  inputPassword: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
