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
            <div className="container wrapper mt-4">
            <div id = "row" className="row align-items-start">
            <div className="col-sm bg-warning ml-auto mr-3 p-3 height text_center">
            Первая из трёх колонок
        </div>
        <div className="col-sm bg-success ml-4 mr-3 p-3 text_center height1">
            Вторая из трёх колонок
        </div>
                <div className="w-100">
        <div className="col-sm bg-info  ml-4  p-3 text_center height">
            Третья из трёх колонок
        </div>
            </div>
                <div className='glyphicon glyphicon-cutlery'>f</div>
    </div>
    </div>
    </div>

        )
    }
}
export default Bootstrap;