import 
export default function key(){
return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}