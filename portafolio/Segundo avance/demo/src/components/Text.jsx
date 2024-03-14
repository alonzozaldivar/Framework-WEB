export default function Text(props){
    return(
        <p style={StyleSheet.colorText}>{props.p}</p>
    );
}
const styles ={
    colorText:{
        color:"blue",
        textAlign: "left",
        fontSize: 35,
        fontfamily: "Noto Sans"

    },
};