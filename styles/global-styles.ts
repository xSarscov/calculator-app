import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 48,
        textAlign: 'right',
        fontWeight: '400',
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 24,
        textAlign: 'right',
        fontWeight: '200',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 9,
    },
    buttonText: {
      padding: 10, 
      fontSize: 20,
      color: Colors.textPrimary,
      fontWeight: '300',
      fontFamily: 'SpaceMono',
    }

});