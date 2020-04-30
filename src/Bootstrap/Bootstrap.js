import React, {Component} from 'react';
import $ from 'jquery';
import styles from './Bootstrap.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class Bootstrap extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className=".carousel">
                <div className="row">
                    <div className="col-sm">
                        Одна из трёх колонок
                    </div>
                    <div className="col-sm">
                        Одна из трёх колонок
                    </div>
                    <div className="col-sm">
                        Одна из трёх колонок
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block">h</button>

            </div>
        )
    }
}
export default Bootstrap;