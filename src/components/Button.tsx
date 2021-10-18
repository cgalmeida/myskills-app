import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    text: string,
}

export function Button( {text, ...rest}: ButtonProps /*: ButtonProps*/) {
    //const { text } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370f7',
        padding: 15,
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
})