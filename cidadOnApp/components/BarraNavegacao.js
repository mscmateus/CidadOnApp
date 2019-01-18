import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const btnVoltar = require('../imagens/pngs/voltar.png');
const btnOpcoes = require('../imagens/pngs/opcoes.png');
const btnFiltro = require('../imagens/pngs/filtros.png');

export default class BarraNavegacao extends React.Component {
	render() {
		switch (this.props.estado) {
			case 1: // opções ou filtro
				return (
					<View style={styles.barraTitulo}>
						<TouchableOpacity style={styles.btnVoltar} onPress={() => { Actions.push(this.props.opcaoKey, {}) }}>
							<Image source={btnOpcoes} />
						</TouchableOpacity >
						<Text style={styles.titulo}>CidadOn</Text>
						<TouchableOpacity style={styles.btnfiltro} onPress={() => { Actions.push(this.props.filtroKey, {}) }}>
							<Image source={btnfiltro} />
						</TouchableOpacity >
					</View>
				);
			case 2: // voltar
				return (
					<View style={styles.barraTitulo}>
						<TouchableOpacity style={styles.btnVoltar} onPress={() => { Actions.push(this.props.voltarKey, {}) }}>
							<Image source={btnVoltar} />
						</TouchableOpacity >
						<Text style={styles.titulo}>CidadOn</Text>
					</View>
				);
			case 3: // voltar ou sair
				return (
					<View style={styles.barraTitulo}>
						<TouchableOpacity style={styles.btnVoltar} onPress={() => { Actions.push(this.props.voltarKey, {}) }}>
							<Image source={btnVoltar} />
						</TouchableOpacity >
						<Text style={styles.titulo}>CidadOn</Text>
						<TouchableOpacity style={styles.btnVoltar} onPress={() => { Actions.telalogin() }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF' }}>sair</Text>
						</TouchableOpacity >
					</View>
				);
		}
		return (
			<View style={styles.barraTitulo}>
				<Text style={styles.titulo}>CidadOn</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	btnVoltar: {
		paddingTop: 21,
		padding: 15,
	},
	btnfiltro: {
		paddingTop: 21,
		marginRight: 10,
		padding: 15,
	},
	barraTitulo: {
		paddingTop: 21,
		height: 90,
		backgroundColor: '#1d9a78',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titulo: {
		flex: 1,
		color: '#FFFFFF',
		fontSize: 45,
		textAlign: 'center',
	}
});