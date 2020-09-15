import { AsyncStorage } from "react-native";
const dados = {

    save(key,dados) {
        async function salvaDados() {
            AsyncStorage.setItem(key, JSON.stringify(dados));
        }
        salvaDados()
    },
    
    get(key) {
        async function carregaDados() {
            const dados = await AsyncStorage.getItem(key)
            if (dados) {
                return JSON.parse(dados)
            }
        }
        return carregaDados()

    },

}


export default dados