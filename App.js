import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, PanResponder } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'The Dark Knight', uri: 'https://i.imgur.com/6OtlyNA.jpg' },
  { id: 2, text: 'Pulp Fiction', uri: 'https://i.imgur.com/opjeN.jpg' },
  { id: 3, text: 'Silence of the Lambs', uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79e28f35757089.5702d31785370.jpg' },
  { id: 4, text: 'Life is Beautiful', uri: 'https://ia.media-imdb.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg' },
  { id: 5, text: 'Old Boy', uri: 'https://ia.media-imdb.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' },
  { id: 6, text: 'The Usual Suspects', uri: 'https://resizing.flixster.com/r1xdN2EZFu28FT0_ehfDKJzwk38=/206x305/v1.bTsxMTE4OTY2NTtqOzE3NzI0OzEyMDA7ODAwOzEyMDA' },
  { id: 7, text: 'Logan', uri: 'https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg' },
  { id: 8, text: 'The Shawshank Redemption', uri: 'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg' },
];
 var score = 0;
export default class App extends React.Component {

scorer: function(){
  this.setState({ score:this.state.score + 1});
}
  renderCard(item) {
      return (
        <Card
          key={item.id}
          title={item.text}
          image={{ uri: item.uri }}
        >
          <Text style={{ marginBottom: 10 }}>
            I can customize the Card further.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            title="View Now!"
          />
        </Card>
      );
    }

    renderNoMoreCards() {
      return (
        <Card title="All Done!">
          <Text style={{ marginBottom: 10 }}>
          {score}
          </Text>
          <Button
            backgroundColor="#03A9F4"
            title="Get more!"
          />
        </Card>
      );
    }
    render() {

      return (
        <View style={styles.container}>
        <Text>title</Text>
          <Deck
            data={DATA}
            onScoreChange={this.scorer}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
          />
        </View>
      );
}
  }
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: '#fff'
    },
  });
