import React,{useState,useEffect} from 'react'
import {
  View,
  Text,
  FlatList,
  Alert,

} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'

//COMPONENTS
import ItemList from '../components/ItemList'

//DADOS
import dados from '../services/dados'



export default function HomeScreen({ navigation }) {

    const key = 'KEY_LIST_ENTRADA'

    const [lista,setLista] = useState([])

    async function load(){
      async function run(){
        
        dados.get(key).then(dados => {
          setLista(dados)
          
        }).catch(err =>{
          return
        })
      }
      run()
    }

    //carrega a lista
    useEffect(() => {
      load()
    }, [])

    //atualiza lista qnd seleciona a tab
    useEffect(() => {
      navigation.addListener('tabPress', e => {
        load()
      })

    }, [navigation])

    async function remove(item){
      
      Alert.alert(
        "Atenção",
        "Tem certeza que deseja remover este item?",
        [
          {
            text: "Cancelar",
            onPress: () => {
              return;
            },
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => setLista(lista.filter(items => items !== item))
          }
        ],
        { cancelable: false }
      )

    }


    return (
      <View style={styleGlobal.container}>
        <View>
          <Text style={styleGlobal.title} >
            LEMBRETES
          </Text>
        </View>

        <FlatList
        style={styleGlobal.list}
          data={lista}
          keyExtractor={item => item.dataInsert.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
            <ItemList
              text={item.text} 
              data={item.dataInsert}
              remove={()=> remove(item)}
              >
            </ItemList>
          }

        />

      </View>
    )
}