export const obj = {
  regex: {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}/,
    // phone: /^+?(?d{2,4})?[ds-]{3,}/g
  },
  Initial: {
    appName: 'Awesome',
    appTheme:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ',
    headerTitle: 'Welcome To',
    footerTitle: "Let's not wait further",
  },
  Login: {
    aame: 'Login',
    title: 'Welcome Back!',
    headerTitle: 'Lets be the One to handle the One',
    footerTitle:
      'By SignIn/Login you agree to our Terms and Conditions and have read our Privacy policy',
  },
  SignIn: {
    name: 'SignIn',
    title: 'Create an Account',
    headerTitle: 'Lets be the One to handle the One',
    footerTitle:
      'By SignIn/Login you agree to our Terms and Conditions and have read our Privacy policy',
  },
};
