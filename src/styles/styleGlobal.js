import { StyleSheet} from 'react-native'

import colors from './colors/colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        backgroundColor:colors.backgroundView,
    },
    title:{
        fontSize:22,
        color:colors.primary,
        alignSelf:'flex-start',
        marginHorizontal:10,
        fontStyle:'italic',
        fontWeight:'bold',
    },
    list:{
        marginTop:5,
        paddingBottom:25,
    },
    text:{
        fontSize:20,
        color:colors.foreground,
        padding:4,
    },
    inputText:{
        height:50,
        backgroundColor:colors.inputColor,
        color:colors.primary,
        fontSize:22,
        borderRadius:20,
        marginHorizontal:35,
        marginTop:10,
        padding:10,
        textAlign:'center',
    },
    buttonAdd:{
        marginVertical:10,
        marginHorizontal:35,
        height:40,
        backgroundColor:colors.primary,
        alignItems:'center',
        borderRadius:20,
        
    },
    buttonReset:{
        marginBottom:10,
        marginHorizontal:35,
        height:40,
        backgroundColor:colors.red,
        alignItems:'center',
        borderRadius:20,
    },

})

export default styles