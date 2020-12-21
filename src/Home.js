import React, { Component } from "react";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon")
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
               return (

               <div key={name} className="bgCircle">
              <center><a href={url}>Detail</a> </center><br />
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