import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Alert } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { scale } from 'react-native-size-matters/extend';
import { connect } from 'react-redux';
import { resetNotification } from '../store/notifications/actions';
import HomeScreen from '../screens/HomeScreen';
import PrescriptionsListScreen from '../screens/PrescriptionsListScreen';
import DetailPrescription from '../screens/DetailPrescription';
import Login from '../screens/Login';
import PerfilScreen from '../screens/PerfilScreen';
import RegisterUser from '../screens/RegisterUser';
import PersonalData from '../screens/PersonalData';
import HealthData from '../screens/HealthData';
import EditPerfil from '../screens/EditPerfil';
import DoctorSpecialty from '../screens/DoctorSpecialty';
import AppTeleconsultation from '../screens/Teleconsultation';
import DetailDoctor from '../screens/DetailDoctor';
import Jitsi from '../screens/Jitsi';
import icHome from '../common/assets/svgs/ic-Home';
import icPerson from '../common/assets/svgs/ic-Person';
import icStetos from '../common/assets/svgs/ic-Stetos';
import icFileText from '../common/assets/svgs/ic-FileText';
import icHomeFocused from '../common/assets/svgs/ic-HomeFocused';
import icPersonFocused from '../common/assets/svgs/ic-PersonFocused';
import icFileTextFocused from '../common/assets/svgs/ic-FileTextFillFocused';
import icStetosFocused from '../common/assets/svgs/ic-StetosFill';
import icPharmacy from '../common/assets/svgs/ic-Pharmacy';
import LogoAnexth from '../common/assets/svgs/logo-Anexth';
import Colors from '../resources/colors';
import ListAddress from '../screens/PerfilDataAddressScreen';
import NavigationService from './NavigationService';
import EditHealthData from '../screens/EditHealthData';
import DoctorHours from '../screens/DoctorHours';
import ConfirmTeleConsultation from '../screens/ConfirmTeleConsultation';
import RegisterPaymentCard from '../screens/RegisterPaymentCard';
import SearchPharmacy from '../screens/SearchPharmacy';
import PharmacyQueue from '../screens/PharmacyQueue';
import SharePrescriptions from '../screens/SharePrescriptions';

const {
  MAIN_COLOR,
} = Colors;
const Tab = createBottomTabNavigator();
const Root = createStackNavigator();
const Home = createStackNavigator();
const Prescriptions = createStackNavigator();
const Perfil = createStackNavigator();
const Teleconsultation = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Home.Screen
      name="Home"
      component={HomeScreen}
      options={() => ({
        headerTitle: () => <SvgXml xml={LogoAnexth} />,
        headerRight: () => <SvgXml xml={icPharmacy} style={{ marginRight: 24 }} />,
        headerStyle: {
          backgroundColor: MAIN_COLOR,
          height: scale(64),
        },
        headerTitleAlign: 'center',
      })}
    />
    <Home.Screen
      name="ConfirmTeleConsultation"
      component={ConfirmTeleConsultation}
      options={() => ({
        headerShown: false,
      })}
    />
    <Home.Screen
      name="SearchPharmacy"
      component={SearchPharmacy}
      options={() => ({
        headerShown: false,
      })}
    />
    <Home.Screen
      name="PharmacyQueue"
      component={PharmacyQueue}
      options={() => ({
        headerShown: false,
      })}
    />
    <Home.Screen
      name="SharePrescriptions"
      component={SharePrescriptions}
      options={() => ({
        headerShown: false,
      })}
    />
  </Home.Navigator>
);

const PrescriptionsStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }

  return (
    <Prescriptions.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Prescriptions.Screen
        name="Prescriptions"
        component={PrescriptionsListScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Prescriptions.Screen
        name="DetailPrescription"
        component={DetailPrescription}
        options={() => ({
          headerShown: false,
        })}
      />
      <Prescriptions.Screen
        name="ConfirmTeleConsultation"
        component={ConfirmTeleConsultation}
        options={() => ({
          headerShown: false,
        })}
      />
    </Prescriptions.Navigator>
  );
};

PrescriptionsStack.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    state: PropTypes.shape({
      index: PropTypes.number,
    }),
  }).isRequired,
};

const TeleconsultationStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Teleconsultation.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Teleconsultation.Screen
        name="Teleconsultation"
        component={AppTeleconsultation}
        options={() => ({
          headerShown: false,
        })}
      />
      <Teleconsultation.Screen
        name="DoctorSpecialty"
        component={DoctorSpecialty}
        options={() => ({
          headerShown: false,
        })}
      />
      <Teleconsultation.Screen
        name="DoctorHours"
        component={DoctorHours}
        options={() => ({
          headerShown: false,
        })}
      />
      <Teleconsultation.Screen
        name="DetailDoctor"
        component={DetailDoctor}
        options={() => ({
          headerShown: false,
        })}
      />
      <Teleconsultation.Screen
        name="Jitsi"
        component={Jitsi}
        options={() => ({
          headerShown: false,
        })}
      />
      <Teleconsultation.Screen
        name="ConfirmTeleConsultation"
        component={ConfirmTeleConsultation}
        options={() => ({
          headerShown: false,
        })}
      />
      <Teleconsultation.Screen
        name="RegisterPaymentCard"
        component={RegisterPaymentCard}
        options={() => ({
          headerShown: false,
        })}
      />
    </Teleconsultation.Navigator>
  );
};

TeleconsultationStack.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    state: PropTypes.shape({
      index: PropTypes.number,
    }),
  }).isRequired,
};

const PerfilStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Perfil.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Perfil.Screen
        name="Perfil"
        component={PerfilScreen}
      />
      <Perfil.Screen
        name="Login"
        component={Login}
      />
      <Perfil.Screen
        name="RegisterUser"
        component={RegisterUser}
      />
      <Perfil.Screen
        name="PersonalData"
        component={PersonalData}
        options={{ tabBar: { visible: false } }}
      />
      <Perfil.Screen
        name="HealthData"
        component={HealthData}
      />
      <Perfil.Screen
        name="EditHealthData"
        component={EditHealthData}
        options={() => ({
          headerStyle: {
            backgroundColor: MAIN_COLOR,
          },
        })}
      />
      <Perfil.Screen
        name="PerfilDataAddressScreen"
        component={ListAddress}
      />
      <Perfil.Screen
        name="EditPerfil"
        component={EditPerfil}
        screenOptions={{
          tabBar: { visible: false },
        }}
        navigationOptions={{ BottomTabBar: { visible: false }, tabBarVisible: false }}
      />
      <Perfil.Screen
        name="ConfirmTeleConsultation"
        component={ConfirmTeleConsultation}
        options={() => ({
          headerShown: false,
        })}
      />
    </Perfil.Navigator>
  );
};

PerfilStack.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    state: PropTypes.shape({
      index: PropTypes.number,
    }),
  }).isRequired,
};

const TabNavigator = ({
  notification, data, clearNotification,
}) => {
  const topNavigation = useNavigation();
  useEffect(() => {
    if (notification && Object.keys(notification).length && data && Object.keys(data).length) {
      Alert.alert(
        notification.title,
        notification.body || '',
        [
          {
            text: 'Ok',
            onPress: clearNotification,
          },
          {
            text: 'Me leve até lá!',
            onPress: () => {
              topNavigation.navigate(
                'Teleconsulta', // talvez seja nesecessário enviar o nome da aba no push junto
                { screen: data.type, params: data },
              );
              clearNotification();
            },
          },
        ],
      );
    }
  }, [notification]);

  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: (obj) => {
          let iconName;
          const { tintColor, focused } = obj;
          if (route.name === 'Home') {
            iconName = focused ? icHomeFocused : icHome;
          } else if (route.name === 'Prescrições') {
            iconName = focused ? icFileTextFocused : icFileText;
          } else if (route.name === 'Teleconsulta') {
            iconName = focused ? icStetosFocused : icStetos;
          } else if (route.name === 'Perfil') {
            iconName = focused ? icPersonFocused : icPerson;
          }

          const onPress = () => {
            if (route.name === 'Teleconsulta') {
              navigation.navigate(route.name, { newSchedule: true });
            } else {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity onPress={onPress}>
              <SvgXml xml={iconName} fill={tintColor} color={tintColor} />
            </TouchableOpacity>
          );
        },
        tabBarVisible: () => {
          if (route.name === 'Home') {
            return false;
          }
          return true;
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarVisible: !(route.state && route.state.index),
        })}
      />
      <Tab.Screen name="Prescrições" component={PrescriptionsStack} />
      <Tab.Screen name="Teleconsulta" component={TeleconsultationStack} />
      <Tab.Screen name="Perfil" component={PerfilStack} />
    </Tab.Navigator>
  );
};

TabNavigator.propTypes = {
  notification: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  clearNotification: PropTypes.func.isRequired,
};

function Navigation({
  notification, data, clearNotification,
}) {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}
        name="root"
      >
        <Root.Screen
          name="TabNavigator"
        >
          {() => (
            <TabNavigator
              data={data}
              notification={notification}
              clearNotification={clearNotification}
            />
          )}
        </Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
  );
}

Navigation.propTypes = {
  notification: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  clearNotification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { notification, data } = state.notifications;
  return {
    notification,
    data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearNotification: () => dispatch(resetNotification()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
