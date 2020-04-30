import React,{Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Icon from '../public/icon.jpg';
import "./style.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="main">
                <img src={Icon} /> 
                <p>Musicook</p>
                <div className="hello">你好</div>
                <div>{moment().endOf('day').fromNow()}</div>
            </div>
        );
    }
}

export default App;

// ReactDom.render(<App />,document.getElementById('root'));