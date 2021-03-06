import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            name: `${data.name}`,
            url: `${data.url}`,
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
            <h2>Pokemon List</h2>
            {
              items.length > 0 ? items.map(item => {
              const {name, url} = item;    
              let id = url.slice(34);
               return (
               <div key={name} className="bgCircle">
              <center><Link to={"detail/" + id}>Detail</Link> </center><br />
               <div className="ctr">        
                  {name}
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Home;