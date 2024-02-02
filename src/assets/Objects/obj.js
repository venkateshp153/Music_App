export const obj = {
  regex: {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ ,
    phone: /^[0-9]{10}$/,
    otp: /^[0-9]{4}$/ ,
    username:/^[-\w\.\$@\*\!]{1,30}$/
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
// { 
//   "username":"Admin123",
//   "email": "admin6@gmail.com",
//   "password": "Admin6@123",
//   "phone":"9988776655"
// }