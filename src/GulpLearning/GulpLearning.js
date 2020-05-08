import React, {Component} from 'react';
import '../css/learnGulp.min.css';

class GulpLearning extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='wrapper-1'>
            <h1>Gulp here now!</h1>
                <div className='textAfterH1'>Привет</div>
                <p className= 'firstP'>Я Катя</p>
            </div>
        )
    }
}
export default GulpLearning;