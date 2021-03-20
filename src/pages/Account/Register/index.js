import React, { useState, useContext, useEffect } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from "react-native";
import Header from "../../../components/Header";
import { AuthContext } from "../../../contexts/auth";
import { Container } from "../../../components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { useForm } from 'react-hook-form';

const AccountRegister = ({ navigation }) => {
    const { signup } = useContext(AuthContext);

    const { register, setValue, handleSubmit, errors } = useForm();

    const [cpfMask, setCpfMask] = useState(null);
    const [phoneMask, setPhoneMask] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        register({ name: 'name' }, { required: true });
        register({ name: 'email' }, { required: true });
        register({ name: 'cpf' }, { required: true });
        register({ name: 'phone' }, { required: true });
        register({ name: 'password' }, { required: true, minLength: 5, maxLength: 255 });
        register({ name: 'password_confirmation' }, { required: true, minLength: 5, maxLength: 255 });
        register({ name: 'role' }, { required: true });
    }, [register]);

    useEffect(() => setRole("1"), []);
    setValue('role', role, true);

    const insets = useSafeAreaInsets();

    const [checked, setChecked] = useState(false);

    async function onSubmit(data) {
        
        if (!checked) {
            console.log('chegou')
            return
        };

        const user = { ...data, role };

        console.log(user);

        try {
            await signup(user);

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
                        <Text>Seu Nome</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            placeholder="Fulano da Silva"
                            autoCompleteType="name"
                            autoCapitalize="words"
                            onChangeText={text => setValue('name', text, true)}
                        />
                        {errors.name && errors.name.type === "required" && <Text style={styles.errorMessage}>O campo de nome é obrigatório</Text>}

                        <Text>Seu E-mail</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            autoCompleteType="email"
                            placeholder="user@email.com"
                            autoCapitalize="none"
                            onChangeText={text => setValue('email', text, true)}
                        />
                        {errors.email && errors.email.type === "required" && <Text style={styles.errorMessage}>O campo de e-mail é obrigatório</Text>}

                        <Text>Seu CPF</Text>
                        <TextInputMask
                            type={'cpf'}
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            placeholder="XXX.XXX.XXX-XX"
                            autoCapitalize="words"
                            multiline={false}
                            value={cpfMask}
                            onChangeText={text => {
                                setValue('cpf', text, true);
                                setCpfMask(text);
                            }}
                        />
                        {errors.cpf && errors.cpf.type === "required" && <Text style={styles.errorMessage}>O campo de CPF é obrigatório</Text>}

                        <Text>Seu Número de Celular</Text>
                        <TextInputMask
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            placeholder="(00) 00000-0000"
                            autoCapitalize="words"
                            multiline={false}
                            type={'cel-phone'}
                            value={phoneMask}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            onChangeText={text => {
                                setValue('phone', text, true);
                                setPhoneMask(text);
                            }}
                        />
                        {errors.phone && errors.phone.type === "required" && <Text style={styles.errorMessage}>O campo de número de celular é obrigatório</Text>}

                        <Text>Sua Senha</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            secureTextEntry={true}
                            onChangeText={text => setValue('password', text, true)}
                        />
                        {errors.password && errors.password.type === "required" && <Text style={styles.errorMessage}>O campo de senha é obrigatório</Text>}

                        <Text>Confirme Sua Senha</Text>
                        <TextInput
                            style={styles.editableInput}
                            placeholderTextColor="#999"
                            secureTextEntry={true}
                            onChangeText={text => setValue('password_confirmation', text, true)}
                        />
                        {errors.password_confirmation && errors.password_confirmation.type === "required" && <Text style={styles.errorMessage}>O campo de confirmação de senha é obrigatório</Text>}

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
    errorMessage: {
        color: 'red',
        fontSize: 11,
        marginBottom: 4
    }
})


export default AccountRegister;
