import React, {Component, Fragment} from "react";
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: `John Doe was born on February 25, 1953 in Decatur, Illinois, USA as John Nommenson Duchac.
              He is an actor, known for Road House (1989), Ten Inch Hero (2007) and Pure Country (1992). 
              He has been married to Gigi Gonzalez since 1987. 
              They have three children. He was previously married to Exene Cervenka.`,
      imgSrc: "/image/John-Doe.jpg",
      profession: "Actor"
    },
    show: true,
    timer: 0
  };

  toggle = () => this.setState({ show: !this.state.show });

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return (
      <Fragment>
        <button className="show-btn" onClick={() => this.toggle()}>
          Show Profile
        </button>
        {this.state.show && (
          <div className="Container">
            <img
              className="photo"
              src={this.state.person.imgSrc}
              alt="user_photo"
            />
            <h1>{this.state.person.fullName}</h1>
            <h3 style={{ color: "rgb(55, 99, 114)" }}>
              {this.state.person.profession}
            </h3>
            <p>{this.state.person.bio}</p>
            <h1>{this.state.timer}</h1>
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;
