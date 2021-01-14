import {
  NavigationActions,
  CommonActions,
} from '@react-navigation/native';
import {
  StackActions,
} from '@react-navigation/stack';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params, thirdParam) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      thirdParam,
    }),
  );
}

function push(routeName, params) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

function reset(routeName) {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{
        name: routeName,
      }],
    }),
  );
}

export default {
  navigate,
  push,
  setTopLevelNavigator,
  reset,
};
