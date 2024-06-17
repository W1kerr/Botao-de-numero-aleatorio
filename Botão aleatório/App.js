import react, {useState} from 'react'
import {Button, Text, View} from 'react-native'

export default ({min=1, max= 60}) => {
const [livre, plivre] = useState(null)
const valor = max - min + 1
const Vava = () => {
plivre(parseInt(Math.random() * valor) + min)
console.warn(aleatorio)
}
return(
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    

  }}>
  <Text > {livre} </Text>
  <Button title='clique aqui' onPress={Vava}/>
  </View>
)
}
