import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Cadastro from './pages/cadastroMed';



export default createAppContainer(
	createStackNavigator(
		{
			Main: { screen: Main },
			// Listagem: { screen: Listagem},
			Cadastro: { screen: Cadastro},

			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#057764'
				},
				headerTintColor: '#057764'
			})
		}
	)
)