import React from 'react';
import {HashRouter as Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About/About'
import Artists from './Components/Artist/Artists'
import Story from './Components/About/Story'
import FAQ from './Components/About/FAQ'
import Artist from './Components/Artist/Artist'

export default   (    

<Switch>
<Route exact path='/' component={Home} />
<Route path='/about' component={() => (   //when you see this function, do this path - path/about is more dynamic now
  <About>
    <Switch>
      <Route path='/about/story' component={Story}/>
      <Route path='/about/faq' component={FAQ}/>
    </Switch>
  </About>
  )} />
<Route path='/artists' component={Artists} />
<Route path='/artist/:id' component={Artist} />

</Switch>
)