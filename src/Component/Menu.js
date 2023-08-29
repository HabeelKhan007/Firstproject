import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Course from '../screens/Course';
import Userdata from '../screens/User';

const Tabs = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="About" component={About} />
      <Tabs.Screen name="Contact" component={Contact} />
      <Tabs.Screen name="Course" component={Course} />
      <Tabs.Screen name='Us' component={Userdata} /> 
    </Tabs.Navigator>
  );
};

export default Menu;
