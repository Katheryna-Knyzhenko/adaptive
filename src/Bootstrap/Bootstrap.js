import React, {Component} from 'react';
import $ from 'jquery';
import  './Bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class Bootstrap extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className='wrap'>
                <div className="container">
                <div id = "row" className="row">
                    <div className="col-sm bg-warning ml-auto mr-3 p-3 height text_center">
                        Первая из трёх колонок
                    </div>
                    <div className="col-sm bg-success ml-auto mr-3 p-3 text_center">
                        Вторая из трёх колонок
                    </div>
                    <div className="col-sm bg-info ml-auto mr-3 p-3 text_center ">
                        Третья из трёх колонок
                    </div>
                </div>
                <div className='button'><button type="button" className="btn btn-primary btn-lg btn-block">h</button></div>
                <span id='span'>vdfvdfv</span>
            </div>
            </div>
        )
    }
}
export default Bootstrap;