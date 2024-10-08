import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

    textPage:{
        backgroundColor: 'orange',
        padding: 20
    },

    button__home:{
        marginRight: 60
    },

    darkbg: {
      backgroundColor: "#333",
    },

    login__logomarca: {
      marginBottom: 15
    },

    login__msg:(text = 'none')=>( {
      fontWeight: "bold",
      fontSize: 22,
      color: "red",
      marginTop: 15,
      marginBottom: 15,
      display: text
    }),

    login__form: {
      width: "80%",
    },

    login__input: {
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom: 15
    },

    login__button: {
      backgroundColor: "#F58634",
      padding: 12,
      alignSelf: "center",
      borderRadius: 5
    },

    loggin__buttonText:{
      fontWeight:"bold",
      fontSize: 22,
      color: "#333",
    }

  });

  export {css};