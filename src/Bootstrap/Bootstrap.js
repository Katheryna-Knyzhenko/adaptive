import React, {Component} from 'react';
import 'jquery';
import  'popper.js';
import  './Bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import {NavLink} from "react-router-dom";





class Bootstrap extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        console.log("Hello World");
        return (
            <div className="container-fluid wrapper">
                <div className='row '><div className=' header col-md-12'>Bootstrap grid!</div></div>
            <div className="row row-1 container-fluid mt-4">
            <div className="col-sm-6 col-md-5 col-lg-12 d-flex flex-row align-items-start my-column justify-content-start">
                <div className="p-2"><button type="button" className="btn btn-danger btn-lg buttonColumn1row1">
                    <span className="glyphicon glyphicon-star"></span> Избранное</button>
            </div>
                <div className="p-2"><button type="button" className="btn btn-info btn-lg buttonColumn1row1">
                    <span className="glyphicon glyphicon-leaf"></span> Читать книгу</button></div>
                <div className="p-2"><button type="button" className="btn btn-secondary btn-lg buttonColumn1row1">
                    <span className="glyphicon glyphicon glyphicon-folder-open"></span>  Выбрать книгу</button></div>

        </div>

        <div className="col-sm-6 col-md-5 col-lg-12 d-flex flex-row align-items-center my-column justify-content-around">
            <div className="p-2">
                <div className="p-2"> column 1 </div>
            </div>
            <div className="p-2"><NavLink to = "/gulpLearning" style={{ textDecoration: 'none' }}><span>Перейти на страничку с Gulp</span></NavLink> </div>
            <div className="p-2"> column 3 </div>
        </div>

        <div className="col-sm-6 col-md-12 col-lg-12 d-flex flex-row align-items-end my-column justify-content-end">
            <div className="p-2"> column 1 </div>
            <div className="p-2"> column 2 </div>
            <div className="p-2"> column 3 </div>
        </div>
            </div>
                <div className="container-fluid my-container-2">
                <div className='row row-2'>
    <div className='col my-col-1 ml-3 '>
                <div className="card my-card">
                    <img className="card-img-top top"  src="https://www.scitecheuropa.eu/wp-content/uploads/2019/09/Colour-bird-e1568033112774.jpg" alt="card"></img>
                    <div className="card-body my-card-body">
                        <h4 className="card-title cardTitle">Bird one</h4>
                        <h6 className="card-subtitle mb-2 text-muted cardSubtitle">Птичка 1</h6>
                        <p className="card-text text">Colourful plumage is believed to have a great function in how birds select a mate, however it could also have an impact on several other physiological processes. New research has suggested that the colourful pigment of a bird might affect its microbial resistance.</p>
                    </div>

                </div>
                <div className="btn-group dropright drop mb-4">
                    <button type="button" className="btn btn-danger btn-lg">Выпадающий список</button>
                    <button className="btn btn-lg btn-danger dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="caret"></span>
                        <span className="sr-only">Кнопка <br/>выпадающего списка</span>
                    </button>
                    <div className="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton">
                        <a href="#" className="dropdown-item" role="menuitem">Action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" role="menuitem" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" role="menuitem" href="#">Something else here</a>
                    </div>
                </div>
    </div>
    <div className= 'col my-col-2 ml-1 mr-3 pl-5'>
                <div className="progress prog">
                    <div className="progress-bar  progress-bar-striped  progr" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                         aria-valuemax="100">
                        <span className="sr-only">60% Complete (warning)</span>60%
                    </div>
                </div>
                <div className="media my-media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object media-img" src="data:image/jpeg;base64,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"/>
                        </a>
                    </div>
                    <div className="media-body ml-5 my-media-body">
                        <h4 className="media-heading media-title">Birdy</h4>
                        <p className='media-text'>Приветик! А я птичка! Чирик-Чирик-Чирик тебе.
                        Как ты, чего не пишешь мне так долго, а?</p>
                    </div>
                </div>
                <div className="input-group inputDown">
                    <span className="input-group-addon font-adon" id="basic-addon1">@</span>
                    <input type="text" className="form-control inputText" placeholder="Username" aria-describedby="basic-addon1"/>
                </div>
</div>
</div>
                </div>
                <div className='row' ><div className="footer col-md-12">The end
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-around">
                            <li>
                                <a href="http://localhost:3000/" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav></div></div>

    </div>



        )
    }
}
export default Bootstrap;