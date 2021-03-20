import React, { useState, useContext } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from "react-native";
import Header from "../../../components/Header";
import { AuthContext } from "../../../contexts/auth";
import { Container } from "../../../components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { useForm } from 'react-hook-form';

const AccountRegister = ({ navigation }) => {
    const { logup } = useContext(AuthContext);

    const { register, setValue, handleSubmit, errors } = useForm();

    const insets = useSafeAreaInsets();

    const [checked, setChecked] = useState(false);

    function onSubmit(data) {
        if (!checked) return;

        try {
            logup(data);

            Alert.alert(
                "Sucesso",
                "Usuário cadastrado com sucesso!",
                [
                    { text: "OK", onPress: () => handleNavigationToAccountLogin() }
                ],
                { cancelable: false }
            );
        } catch {
            Alert.alert(
                "Erro",
                "Dados inconsistentes!",
                [
                    { text: "OK", onPress: () => { } }
                ],
                { cancelable: false }
            );
        }
    }


    function handleNavigationToAccountLogin() {
        navigation.navigate('Conta', { screen: 'Login', initial: false });
    }

    return (
        <Container marginTop={insets.top}>
            <Header title="Conta" />
            <ScrollView style={{ width: '100%' }}>
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
                        <Text>Primeiro e Último Nome</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            autoCompleteType="name"
                            autoCapitalize="words"
                            onChangeText={text => setValue('name', text, true)}
                        />
                        <Text>Seu Email</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            autoCompleteType="email"
                            placeholder="user@email.com"
                            autoCapitalize="none"
                            onChangeText={text => setValue('email', text, true)}
                        />
                        <Text>Seu CPF</Text>
                        <TextInputMask
                            type={'cpf'}
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            placeholder="XXX.XXX.XXX-XX"
                            autoCapitalize="words"
                            multiline={false}
                            onChangeText={text => setValue('cpf', text, true)}
                        />
                        <Text>Seu Número de Celular</Text>
                        <TextInputMask
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            placeholder="(00) 00000-0000"
                            autoCapitalize="words"
                            multiline={false}
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            onChangeText={text => setValue('phone', text, true)}
                        />
                        <Text>Sua Senha</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            secureTextEntry={true}
                            onChangeText={text => setValue('password', text, true)}
                        />
                        <Text>Confirme Sua Senha</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            secureTextEntry={true}            
                            onChangeText={text => setValue('password_confirmation', text, true)}
                        />
                        <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <RadioButton color="rgba(20,119,248,1)" value={true} />
                                <Text>
                                    <Text>Concordo com os termos.</Text>
                                    <Text style={{ color: "rgba(20,119,248,1)" }}> Ler termo</Text>
                                </Text>
                            </View>
                        </RadioButton.Group>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.registerBtn}>
                            <Text style={styles.registerBtnText}>Cadastrar</Text>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', marginVertical: 8 }}>
                            <Text>Já possuo uma conta.</Text>
                            <Text style={{ color: "rgba(20,119,248,1)" }} onPress={() => { handleNavigationToAccountLogin() }}> Entrar</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
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
