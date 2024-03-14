import coca from '../assets/Images/coca.png';
export default function Image(){
    return(
        <img style={styles.reSize} src={coca} />

    );
}

const styles = {
    reSize:{
        width: 350,
        height: 250,
        paddingTop:58,
    },
}