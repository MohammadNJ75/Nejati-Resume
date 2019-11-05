import React ,{Component} from 'react';
import './Fullpage.css';
import SnowStorm from 'react-snowstorm';
import data from "../data.json";

class Fullpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        backgroundColor:"blue"
        };
    }
    ChangeBackgroundColor = () => {
        this.setState({
            backgroundColor: this.state.backgroundColor === "red" ? "yellow" : "red",
        });
      };
    render(){
        const {children}=this.props
        return(
             <div className={`fullpage ${this.props.className || ''}`}
              style={{backgroundColor:this.state.backgroundColor}}
             >
                 <SnowStorm />
                 <div className="Button3"
            onClick={()=>{
              this. ChangeBackgroundColor ();
            }}
            > <img src={data.Icons.Color}/></div>
                 {children}
             </div>
        )
    }
}
export default Fullpage;
                     