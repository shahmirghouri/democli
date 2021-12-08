import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'f4f4f4',
    },

    skip_btn:
    {
        marginTop: 20,
        borderRadius:8,
       
        marginVertical:25,
        marginHorizontal:25,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor: '#6902FC',
        
    },
    btnTxt:{
        color: 'white',
        // backgroundColor: 'f4f4f4',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})


export default styles;