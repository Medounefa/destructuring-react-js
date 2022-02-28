import React, {Component} from 'react'
import Users from './Singers'

class Display extends Component {

    state = {
        titre : 'Musiciens'
      }
  
    
    render(){
        return(
            <div>
                <h1>{this.state.titre}</h1>
                <Users name='Eric Clapton' age='74' />
                <Users name='Jimi hendrix' age='27' />
                <Users name='David Gilmour' age='73' />
                <Users name='Carlos Santana' age='71' />
            </div>
        )
    }
}

export default Display
