import { StyleSheet} from 'react-native'

import colors from './colors/colors'


const styles = StyleSheet.create({
    container:{
        margin:4,
        padding:4,
        flex:1,
        backgroundColor:colors.backgroundItemList,
        borderRadius:15
    },
    text:{
        textAlign:'center',
        fontSize:22,
        color:colors.foreground,
    },
        
    data:{
        fontSize:15,
        marginHorizontal:5,
        marginVertical:4,
        textAlignVertical:'bottom',
        color:colors.foreground,
    },
    btnRemove:{


    },
    rodape:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    rodapeText:{},
})

export default styles