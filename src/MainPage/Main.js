import React, {Component} from 'react';
import styles from './Main.module.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
        <div className={styles.wrapper}>
          <div className={styles.hatFoot}>Header</div>
          <div className={styles.header}>
          <div className={styles.conteiner1}>
            <div className={styles.section}>1</div>
            <div>2</div>
          </div>
            <div className={styles.conteiner2}>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          </div>
          <div className={styles.hatFoot}>Footer</div>
        </div>
    )
  }
}
export default Main;