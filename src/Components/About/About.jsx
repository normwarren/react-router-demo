import React from 'react'
import {Link} from 'react-router-dom'

//const About = ({children}) =>  // you can destructor
const About = (props) =>  //destructor
(

<div>
<h1>About</h1>
  <Link to='/about/story'>Our Story</Link>
  <Link to='/about/FAQ'>FAQ</Link>
{props.children}

</div>
)
export default About