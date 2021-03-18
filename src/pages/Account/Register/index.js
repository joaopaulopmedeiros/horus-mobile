import React, { useState, useContext } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioButton } from 'react-native-paper';

const AccountRegister = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    const insets = useSafeAreaInsets();

    function handleRegister() {
        //Register();
    }

    return (
        <Container marginTop={insets.top}>
            <Header title="Conta" />
            <View style={styles.wrapper}>
                <Image
                    style={styles.avatar}
                    width={40}
                    source={require("../../../../assets/user.png")}
                />
                <Text style={styles.title}>Olá, você ainda não tem uma conta</Text>
                <View
                    style={styles.container}
                >
                    <Text>Seu Email</Text>
                    <TextInput
                        style={styles.editableInput}
                        placeholderTextColor="#999"
                        autoCompleteType="email"
                        placeholder="user@email.com"
                        autoCapitalize="none"
                    />
                    <Text>Seu CPF</Text>
                    <TextInput
                        style={styles.editableInput}
                        placeholderTextColor="#999"
                        placeholder="XXX.XXX.XXX-XX"
                        autoCapitalize="words"
                        multiline={false}
                    />
                    <Text>Seu Número de Celular</Text>
                    <TextInput
                        style={styles.editableInput}
                        placeholderTextColor="#999"
                        placeholder="(00) 00000-0000"
                        autoCapitalize="words"
                        multiline={false}
                    />
                    <Text>Sua Senha</Text>
                    <TextInput
                        style={styles.editableInput}
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                    />
                    <Text>Confirme Sua Senha</Text>
                    <TextInput
                        style={styles.editableInput}
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                    />
                    {/*<RadioButton.Group
                        value={checked}
                        //status={checked === true ? 'checked' : 'unchecked'}
                        onValueChange={value => setChecked(value)}
                        color="rgba(20,119,248,1)"
                    >
                        <RadioButton.Item label="Concordo com os termos" value={true} />
                    </RadioButton.Group>*/}
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={checked}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <RadioButton value="second" />
                            <Text> 
                                <Text>Concordo com os termos.</Text>
                                <Text style={{ color: "rgba(20,119,248,1)" }}> Ler termo</Text>
                            </Text>
                        </View>
                    </RadioButton.Group>
                    <TouchableOpacity onPress={handleRegister} style={styles.registerBtn}>
                        <Text style={styles.registerBtnText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', marginTop: 16}}>
                        <Text>Já possuo uma conta.</Text>
                        <Text style={{ color: "rgba(20,119,248,1)" }}> Entrar</Text>
                    </Text>
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "80%",
    },
    avatar: {
        marginTop: "10%",
        marginBottom: "5%"
    },
    title: {
        fontFamily: "Montserrat_600SemiBold",
        color: "rgba(20,119,248,1)",
        marginBottom: 20,
    },
    notEditableInput: {
        borderWidth: 2,
        borderColor: "#CDCDD2",
        backgroundColor: "#E7E4E4",
        color: '#000',
        paddingLeft: 8,
        marginVertical: 4,
    },
    editableInput: {
        borderWidth: 2,
        borderColor: "#CDCDD2",
        paddingLeft: 8,
        marginVertical: 6,
    },
    registerBtn: {
        marginTop: 10,
        backgroundColor: "rgba(20,119,248,0.8)",
        borderRadius: 3,
        width: "35%",
        alignSelf: "center",
    },
    registerBtnText: {
        paddingVertical: 8,
        textAlign: "center",
        color: "#fff",
    },
    register: {
        marginTop: 40,
        alignSelf: "center",
    },
    registerLink: {
        color: "rgba(20,119,248,1)",
    },
})


export default AccountRegister;
