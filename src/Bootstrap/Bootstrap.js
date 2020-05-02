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
            <div className="container-fluid wrapper">
                <div className='row'><div className=' header col-md-12'>Bootstrap grid!</div></div>
            <div className="row container-fluid mt-4">
            <div className="col-sm-6 col-md-5 col-lg-12 ">
            Первая из трёх колонок
        </div>
        <div className="col-sm-6 col-md-5 col-lg-12 ">
            Вторая из трёх колонок
        </div>

        <div className="col-sm-6 col-md-12 col-lg-12">
            Третья из трёх колонок
        </div>
            </div>
                <div className='row' ><div className="footer col-md-12">The end</div></div>
    </div>



        )
    }
}
export default Bootstrap;