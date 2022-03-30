import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { screenkeys } from './_index';

export const Home = ({ navigation }) => {
    return (<View style={styles.main}>
        <Text>L9 Practicess</Text>
        { screenkeys.map((skey) => skey !== 'home' && <View style={styles.btn} key={"home-"+skey}>
                <Button style={styles.btn} title={skey} onPress={() => navigation.navigate(skey)}/>
            </View>
        )}
    </View>);
};

const styles = StyleSheet.create({
    main: {

    },
    btn: {
        marginTop: 16
    }
})

export default Home;