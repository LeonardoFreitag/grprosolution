
export const APP_ROUTES = {
    public: {
        root: '/',
        home: '/Application/Home',
        signIn: '/Application/SignIn',
        signUp: '/Application/SignUp',
        forgotPassword: '/Application/ForgotPassword',
        passwordResetSent: '/Application/ForgotPassword/PasswordResetSent',
        resetPassword: '/Application/ForgotPassword/ResetPassword',
        notFound: '/_not-found',
        notAuthorized: '/_not-authorized',
        
    },
    private: {
        users: '/ClientArea/Geral/Users',
        properties: '/ClientArea/Cadastros/Properties',
        settings: '/ClientArea/Cadastros/Settings',
        inputs: '/ClientArea/Cadastros/Inputs',
        herritage: '/ClientArea/Cadastros/Herritage',
    }
}