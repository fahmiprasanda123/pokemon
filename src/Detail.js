import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"


class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.id)
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.abilities.map(data => (
          {
            name: `${data.ability.name}`,
            url: `${data.ability.url}`,
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
            <h2>Pokemon Detail</h2>
            {
              items.length > 0 ? items.map(item => {
              const {name, url} = item;    
               return (
               <div key={name} className="bgCircle">
              <center><Link to={url}>Detail</Link> </center><br />
               <div className="ctr">        
                 Ability :  {name}
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Detail;