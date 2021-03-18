import React, { useContext } from "react";
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../contexts/auth";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import logoutIcon from '../../../../assets/logout.png'

const Profile = () => {
    const { user, logout } = useContext(AuthContext);

    const insets = useSafeAreaInsets();


    function handleLogout() {
        logout();
    }

    return (
        <Container marginTop={insets.top}>
            <Header title="Conta" />
            <View
                style={styles.wrapper}
            >
                <Image
                    style={styles.avatar}
                    width={40}
                    source={require("../../../../assets/user.png")}
                />
                <Text
                    style={styles.title}
                >
                    Seus dados
                </Text>
                <View
                    style={styles.container}
                >
                    <Text>Seu Email</Text>
                    <TextInput
                        style={styles.notEditableInput}
                        value={user.email}
                        editable={false}
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    <Text style={{ marginTop: 10 }}>Seu CPF</Text>
                    <TextInput
                        style={styles.notEditableInput}
                        value={user.cpf}
                        editable={false}
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    <Text style={{ marginTop: 10 }}>Sua Senha</Text>
                    <TextInput
                        style={styles.notEditableInput}
                        value={user.password}
                        editable={false}
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity delayPressIn={0} delayPressOut={0} activeOpacity={0.5} style={styles.editButton} onPress={() => { console.log('click') }}>
                        <Text style={styles.editButtonText}>Editar</Text>
                    </TouchableOpacity>
                    <View style={styles.logoutIconWrapper}>
                        <TouchableOpacity onPress={handleLogout} >
                            <Image source={logoutIcon} delayPressIn={0} delayPressOut={0} activeOpacity={0.5} />
                        </TouchableOpacity>
                    </View>
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
        paddingLeft: 8
    },
    editableInput: {
        borderWidth: 2,
        borderColor: "#CDCDD2",
    },
    editButton: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 10,
        height: 32,
        width: 80,
        backgroundColor: "#77838F",
        paddingVertical: 6,
        borderRadius: 3,
        marginTop: 16
    },
    editButtonText: {
        color: "#fff",
        textAlign: "center"
    },
    logoutIconWrapper: {
        alignItems: 'center',
        marginTop: 80,
    },
})

export default Profile;
