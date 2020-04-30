import React,{Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="main">
                <p>Musicook</p>
                <div>{moment().endOf('day').fromNow()}</div>
            </div>
        );
    }
}

export default App;

// ReactDom.render(<App />,document.getElementById('root'));