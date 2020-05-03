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
            <div className="col-sm-6 col-md-5 col-lg-12 d-flex flex-row align-items-start my-column justify-content-start">
                <div className="p-2 pr-1 pl-1" > column 1 </div>
                <div className="p-2"> column 2 </div>
                <div className="p-2"> column 3 </div>

        </div>
        <div className="col-sm-6 col-md-5 col-lg-12 d-flex flex-row align-items-center my-column justify-content-around">
            <div className="p-2"> column 1 </div>
            <div className="p-2"> column 2 </div>
            <div className="p-2"> column 3 </div>
        </div>

        <div className="col-sm-6 col-md-12 col-lg-12 d-flex flex-row align-items-end my-column justify-content-end">
            <div className="p-2"> column 1 </div>
            <div className="p-2"> column 2 </div>
            <div className="p-2"> column 3 </div>
        </div>
            </div>
                <div className='row' ><div className="footer col-md-12">The end</div></div>
    </div>



        )
    }
}
export default Bootstrap;