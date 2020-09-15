import React,{useState,useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'

//COMPONENTS
import ItemList from '../components/ItemList'

//DADOS
import dados from '../services/dados'

//UTIL
import data from '../util/date'


export default function HomeScreen({ navigation }) {

    const key = 'KEY_LIST_ENTRADA'

    const [lista,setLista] = useState([])
    const [txtInput,setTextInput] = useState('')
    const [valorTotal, setValorTotal] = useState('')

    //carrega a lista
    useEffect(() => {
      async function run(){
        
        dados.get(key).then(dados => {
          setLista(dados)
        }).catch(err =>{
          reset()
          return
        })

      }
      run()

    }, [])

    //monitora alterações na lista e salva se tiver mudança
    useEffect(() => {
      dados.save(key,lista)
    }, [lista])

    //atualiza lista qnd seleciona a tab
    useEffect(() => {
      navigation.addListener('tabPress', e => {
        load()
      })

    }, [navigation])

    async function reset(){
      Alert.alert(
        "Atenção",
        "Tem certeza que deseja limpar esta lista?",
        [
          {
            text: "Cancelar",
            onPress: () => {
              return
            },
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => setLista([])
          }
        ],
        { cancelable: false }
      )
      
    }

    async function add(){
      
      if (txtInput.length <= 0) {
        //input vazio
        return
      }
      const item = {
        id: lista.length + 1, 
        text: txtInput,
        dataInsert: data.getCurrentData(),
      }
      setLista([item,...lista])
      setTextInput("")
      Keyboard.dismiss()
    }

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

        <TextInput
          style={styleGlobal.inputText}
          autoCorrect={true}
          keyboardType={'default'}
        
          value={txtInput}
          placeholder="Adicione um lembrete"
          maxLength={500}
          onChangeText={text => setTextInput(text)}
        />
        <TouchableOpacity
          style={styleGlobal.buttonAdd} 
          onPress={() => add()}>

            <Text style={styleGlobal.text}>
              Adicionar
            </Text>

        </TouchableOpacity>

        <TouchableOpacity
            
            style={styleGlobal.buttonReset} 
            onPress={() => reset()}>

            <Text style={styleGlobal.text}>
              Resetar Lista
            </Text>

         </TouchableOpacity>

      </View>
    )
}