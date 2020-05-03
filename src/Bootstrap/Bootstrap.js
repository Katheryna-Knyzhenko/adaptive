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
                <div className="card">
                    <img className="card-img-top"  src="data:image/jpeg;base64,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" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title">Заголовок карточки</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Подзаголовок карточки</h6>
                        <p className="card-text">Некоторый текст...</p>
                    </div>

                </div>

                <div className='row' ><div className="footer col-md-12">The end</div></div>
    </div>



        )
    }
}
export default Bootstrap;