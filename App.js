import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CurrentAccountScreen from "./src/screens/CurrentAccountScreen";
import DashBoardScreen from "./src/screens/DashBoardScreen";
import FixedDepositScreen from "./src/screens/FixedDepositScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SavingAccountScreen from "./src/screens/SavingsAccountScreen";

const navigator = createStackNavigator(
  {
    LogIn: LogInScreen,
    Dash: DashBoardScreen,
    Savings: SavingAccountScreen,
    Current: CurrentAccountScreen,
    Fixed: FixedDepositScreen,
  },
  {
    initialRouteName: "Dash",
    defaultNavigationOptions: {
      title: "XYZ Bank",
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigator);
