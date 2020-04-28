import React,{Component} from 'react';
import me from './Assets/me.jpg';
import "./Background.css";


class Background extends Component{

render(){
    return(
        <figure className="background-image">
          <img src={me} alt=""/>
        </figure>
      )
}


}

export default Background ;