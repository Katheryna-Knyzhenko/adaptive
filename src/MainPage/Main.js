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
          <div className={styles.content}>Header</div>
          <header className={styles.header}>
          <div className={styles.conteiner}>
            <div className={styles.section}>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          </header>
          <div className={styles.content}>Footer</div>
        </div>
    )
  }
}
export default Main;