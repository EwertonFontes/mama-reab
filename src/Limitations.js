import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TreatmentsScreens from './../components/TreatmentsScreens'
import ButtonTreatments from './../components/ButtonTreatments'

export default class Limitations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limitations: [{
            key: 0, name: 'Erguer o braço acima da cabeça', exercicios: [
                { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
                { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }]
            }, {
            key: 1, name: 'Abrir o Braço', exercicios: [
                { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
                { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }]
            }, {
            key: 2, name: 'Falta de força no braço ou na mão', exercicios: [
                { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
                { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }]
            }, {
            key: 3, name: 'Dificuldade no alongamento', exercicios: [
                { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
                { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }]
            }, {
            key: 4, name: 'Dificuldade em mexer o braço', exercicios: [
                { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
                { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
                { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }]
            }
        ]
    }
  }


  renderTreatment (treat) {
    return (  
       <TouchableOpacity key={treat.key} style={styles.bottomItem} onPress={() => Actions.listVideo({exercicios: treat.exercicios, title:treat.name})}>
        <ButtonTreatments name={treat.name} />
      </TouchableOpacity>
    ) 
  }
  
  render() {
    return <TreatmentsScreens>{ this.state.limitations.map((treat) => this.renderTreatment(treat)) }</TreatmentsScreens>
  }
}

const styles = StyleSheet.create({
   bottomItem: {
    width: '50%',
    height: '33%',
    padding: 5,
   }
});
