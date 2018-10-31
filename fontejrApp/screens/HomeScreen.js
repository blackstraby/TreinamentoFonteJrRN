/*
 * This example demonstrates how to use ParallaxScrollView within a ScrollView component.
 */
import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class LinksScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Lucas Stocco - Presidente',
        'Larissa Domenico - Vice Presidencia',

        'Diretora Projetos - Gabriela',
        'Gerentes Projetos - Laís Alves, Rodolfo e Samuel',
        'Projetistas - Bárbara, Ludmila',

        'Diretor Marketing - Daniel',
        'Analista Marketing - Jonathas',

        'Gerente de Desenvolvimento - Monique',

        'Gerente de Qualidade - Emerson'
      ])
    };
  }

  renderLista = (rowData) => {
    return (
      <View key={rowData} style={styles.row}>
        <Text style={styles.rowText}>
          {rowData}
        </Text>
      </View>
    )
  }

  render() {
    const { onScroll = () => { } } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <ListView
          ref="ListView"
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderLista(rowData)}
          renderScrollComponent={props => (
            <ParallaxScrollView
              onScroll={onScroll}

              headerBackgroundColor="#333"
              stickyHeaderHeight={STICKY_HEADER_HEIGHT}
              parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
              backgroundSpeed={10}

              renderBackground={() => (
                <View key="background">
                  <Image source={
                    require('../assets/images/bkgHome.jpg')
                  }
                    style={{
                      width: window.width,
                      height: PARALLAX_HEADER_HEIGHT
                    }}
                  />
                  <View style={{
                    position: 'absolute',
                    top: 0,
                    width: window.width,
                    backgroundColor: 'rgba(0,0,0,.4)',
                    height: PARALLAX_HEADER_HEIGHT
                  }} />
                </View>
              )}

              renderForeground={() => (
                <View key="parallax-header" style={styles.parallaxHeader}>
                  <Image style={styles.avatar} source={require('../assets/images/fonteLogo.png')} />
                  <Text style={styles.sectionSpeakerText}>
                    A vontade e o saber concebem a excelência

                </Text>
                  <TouchableOpacity
                    style={styles.sectionTitleButton}
                    onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 280 })}
                  >
                    <Text style={styles.sectionTitleText}>Conheça-Nos</Text>
                  </TouchableOpacity>
                </View>
              )}

              renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                  <Text style={styles.stickySectionText}>Fonte Jr.</Text>
                </View>
              )}

              renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <Ionicons
                    onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}
                    name="ios-arrow-dropup"
                    size={20}
                    color="white"
                  />

                  {/* <Text style={styles.fixedSectionText}
                  onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                  Scroll to top
                </Text> */}
                </View>
              )} />
          )}

        />
      </View>

    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    width: AVATAR_SIZE - 20,
    height: AVATAR_SIZE,
    //marginBottom: 10,
    //borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
    textAlign: 'center',

  },
  sectionTitleButton: {
    backgroundColor: '#00aae6',
    borderRadius: 5,
    width: window.width * 0.45

  },

  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },

  rowText: {
    fontSize: 20
  }
});
