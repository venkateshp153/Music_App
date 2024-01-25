/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';


const Root = () => <App />;

AppRegistry.registerComponent(appName, () => Root);
