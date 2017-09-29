/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class PlayWithMaps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.221949,
            longitude: 106.819612,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={null}
          mapType={'standard'}
          showsUserLocation={true}
          userLocationAnnotationTitle={'Awesome of me!'}
          followsUserLocation={false}
          showsMyLocationButton={true}
          showsPointsOfInterest={true}
          showsScale={true}
          showsBuildings={true}
          showsTraffic={true}
          loadingEnabled={true}
        >
          <MapView.Marker
            coordinate={{ latitude: -6.221949, longitude: 106.819612 }}
            title={'Marker'}
            description={'Marker custom title!'}
            draggable
            calloutOffset={{
              x: 0,
              y: 0
            }}
          >
            <MapView.Callout
              tooltip={true}>
              <View>
                <Text>Halllo</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

AppRegistry.registerComponent('PlayWithMaps', () => PlayWithMaps);
