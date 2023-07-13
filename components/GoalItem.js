import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Image style={styles.image} source={require('../assets/images/favicon.png')}/>
            <Pressable 
                android_ripple={{color: '#210644'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8,
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
});