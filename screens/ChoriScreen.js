import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

export default class ChoriScreen extends React.Component {

    static navigationOptions = {
        title: 'Chori Screen',
    };

    render() {
        return (
            <View>
                <Text>
                    Esta muy simpatico React Native (!!)
                </Text>
                <Image
                    source={
                        __DEV__
                        ? require('../assets/images/muerdo.negro-dms.jpg')
                        : require('../assets/images/muerdo.negro-dms.jpg')
                    }
                />
                 <Image
                    source={
                        __DEV__
                        ? require('../assets/images/dimisetlogo.jpg')
                        : require('../assets/images/dimisetlogo.jpg')
                    }
                />
            </View>
        );
    }

};