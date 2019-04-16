import React, { Component} from 'react'
import { getAllArtists } from '../../artist.service'
import {Link} from 'react-router-dom'


export default class Artists extends Component { 
  constructor(props){
    super(props)
    this.state = {
      artists: []
    }
  }


    componentDidMount(){ //run this function at this time in the lifecycle of DOM rendering
      let artists = getAllArtists()
      this.setState({
        artists //key and value are same word !!! 
      })
    }

  render() {
    const artistData = this.state.artists.map((a, index) =>(  //if brackets - would need to say return (jsx code). just returning jsx, use (), not {}
      <Link to={`/artist/${a.id}`}key={index}>
        <li>{a.name}</li>
      </Link>
    ))

    return(
      <div>
      <h1>Artists</h1>
      <ul>
        {artistData}
      </ul>

      </div>
      
    )
  }
}
