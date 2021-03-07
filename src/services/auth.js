const auth = {
    login() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    token: 'token_mockado',
                    user: {
                        name: 'João Paulo',
                        email: 'joao@email.com'
                    }
                })
            }, 2000)
        });
    }
}

export default auth;