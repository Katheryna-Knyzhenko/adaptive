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
                <div className="p-2"><button type="button" className="btn btn-danger btn-lg buttonColumn1row1">
                    <span className="glyphicon glyphicon-star"></span> Избранное</button>
            </div>
                <div className="p-2"><button type="button" className="btn btn-info btn-lg buttonColumn1row1">
                    <span className="glyphicon glyphicon-leaf"></span> Читать книгу</button></div>
                <div className="p-2"><button type="button" className="btn btn-secondary btn-lg buttonColumn1row1">
                    <span className="glyphicon glyphicon glyphicon-folder-open"></span> Выбрать книгу</button></div>

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

                <div className="card my-card">
                    <img className="card-img-top top"  src="https://www.scitecheuropa.eu/wp-content/uploads/2019/09/Colour-bird-e1568033112774.jpg" alt="card"></img>
                    <div className="card-body">
                        <h4 className="card-title cardTitle">Bird one</h4>
                        <h6 className="card-subtitle mb-2 text-muted cardSubtitle">Птичка 1 <span className='#869-f'></span></h6>
                        <p className="card-text text">Colourful plumage is believed to have a great function in how birds select a mate, however it could also have an impact on several other physiological processes. New research has suggested that the colourful pigment of a bird might affect its microbial resistance.</p>
                    </div>

                </div>
                

                <div className='row' ><div className="footer col-md-12">The end</div></div>
    </div>



        )
    }
}
export default Bootstrap;