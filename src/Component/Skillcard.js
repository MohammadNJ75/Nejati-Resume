import React ,{Component} from 'react';
import { directive } from '@babel/types';




class Skillcard extends Component{
    render(){
        const {skill}=this.props;
        return(
            <div className="card" >
            <div className="image-wrapper">
                <img src={skill.Content.Image}/>
            </div>
            <div className="skill-title-wrapper" >
                <h4>{skill.Content.title}</h4>
            </div>
        </div>
        );
    }
}
export default Skillcard ;
                     