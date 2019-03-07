import React from 'react';
import {
    Text,
    FlatList,
    ActivityIndicator,
    ScrollView,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class ChoriScreen extends React.Component {

    static navigationOptions = {
        title: 'Chori Test Screen',
    };

    constructor(props){
        super(props);
        this.state = { 
            isLoading: true
        }
    }

    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

        return (
            <ScrollView style={styles.container}>
                <Text>
                    HTTP request to https://facebook.github.io/react-native/movies.json
                </Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                    />
                <Image
                    style={styles.muerdoNegroImage}
                    source={
                        __DEV__
                        ? require('../assets/images/muerdo.negro-dms.jpg')
                        : require('../assets/images/muerdo.negro-dms.jpg')
                    }
                />
            </ScrollView>
        );
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    muerdoNegroImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
  });