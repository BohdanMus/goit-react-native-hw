import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/PhotoBG.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.box}>
          <View style={styles.boxPhoto}></View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.inputLogin}
            placeholder="Логін"
            inputMode="text"
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
          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  box: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 549,
    alignItems: "center",
  },
  boxPhoto: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
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
