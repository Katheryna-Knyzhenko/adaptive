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
            <div className="container-fluid wrapper mt-0">
                <div className='mt-2 header'>Bootstrap grid!</div>
            <div className="row mt-4">
            <div className="col-sm  text_center ml-3 ">
            Первая из трёх колонок
        </div>
        <div className="col-sm  ml-3 mr-3 p-3 text_center ">
            Вторая из трёх колонок
        </div>

        <div className="col-sm  p-3 text_center mr-3">
            Третья из трёх колонок
        </div>
            </div>
                <div className="footer">The end</div>
    </div>



        )
    }
}
export default Bootstrap;