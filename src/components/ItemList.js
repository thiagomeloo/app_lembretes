import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import itemListStyle from '../styles/itemListStyle'
import colors from '../styles/colors/colors';

function ItemList (props){
    
    return (
      <View style={itemListStyle.container}>
        <Text style={itemListStyle.text}>{props.text}</Text>
        <View style={itemListStyle.rodape}>
            <Text 
                style={itemListStyle.data}>{props.data}</Text>
            <TouchableOpacity
                style={itemListStyle.btnRemove}
                onPress={() => {props.remove()}}>
                <MaterialIcons name="delete" size={35} color={colors.red} />
            </TouchableOpacity>
        </View>

      </View>
    )
}

export default ItemList