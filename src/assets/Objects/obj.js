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
export const announcement_data =
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
]

export const announcements = [
  {
    id: 1,
    title: 'Announcement 1',
    body: 'This is the body of announcement 1',
  },
  {
    id: 2,
    title: 'Announcement 2',
    body: 'This is the body of announcement 2',
  },

];

export const wishes = [
  {
    id: 1,
    name: 'John Doe',
    date: '2024-02-05',
    imageSource: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    id: 2,
    name: 'Jane Doe',
    date: '2024-02-06',
    imageSource: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    id: 3,
    name: 'John Doe',
    date: '2024-02-05',
    imageSource: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    id: 4,
    name: 'Jane Doe',
    date: '2024-02-06',
    imageSource: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    id: 5,
    name: 'John Doe',
    date: '2024-02-05',
    imageSource: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    id: 6,
    name: 'Jane Doe',
    date: '2024-02-06',
    imageSource: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
];

export const holidays = [
  {id: 1, day: '01.01.2025', month: 'January', occation: 'New Year'},
  {id: 2, day: '25.12.2025', month: 'December', occation: 'Christmas'},
 
];