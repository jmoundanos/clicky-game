import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import data from "./cards.json";
import "./App.css";

//function to randomly shuffle cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
//set state
class App extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedImages: []
  };

  //function for handling clicking of a card
  clickedCard = id => {
    let clickedImages= this.state.clickedImages;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });
     // if the clicked image has an id that exists
     if (clickedImages.indexOf(id) === -1) {
      // push that id into the array to store the ids
      clickedImages.push(id);
      //console.log(clickedImages);
      //call the score function
      this.handleIncrement();
      //call the reshuffle function
      this.makeShuffle();
    } else if (this.state.score === 12) { 
      //if player gets score of 12, player wins and game restarts
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedImages: []
      });
    } else {
       //if player does not get to 12, player loses and game restarts
      this.setState({
        score: 0,
        clickedImages: []
      });
      //console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }
    //highest score is displayed as top score
    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  //increase this.state.score by 1
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  //shuffle cards
  makeShuffle = () => {
    this.setState({ data: shuffle(data) });
  };

render() {
  return (
    // <div className="container">
    //     <div
    //       className="alert alert-danger"
    //       style={{ opacity: this.state.showAlert }}
    //     >
    //       You clicked on this already, try again...
    //       </div>
    //     <div
    //       className="alert alert-success"
    //       style={{ opacity: this.state.showSuccess }}
    //     >
    //       Brilliant, you haven't clicked on duplicates!
    //       </div>
    <Wrapper>
      <Header
        score={this.state.score}
        topScore={this.state.topScore}>
        Stranger Things Memory Game
        </Header>
       {this.state.data.map(data => ( 
          <Cards 
          key={data.id}
          id={data.id}
          image={data.image}
          clickedCard={this.clickedCard}/>
         ))} 
     </Wrapper>
    
      );
  }
}      
      
export default App;
