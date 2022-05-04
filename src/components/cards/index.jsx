import React from "react";
import reset from './reset.module.css'
import styles from "./styles.module.css"


class Cards extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
    };
  }
  Img = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };
    render() {

    const {
      firstName,
      lastName,
      profilePicture,
    }=this.props;
    const { isLoading } = this.state;
    const element = (
      
      <li className={styles.userCardWrapper}>
        <article className={styles.cardContainer}>
          <div className={styles.cardImgWrapper}>
            <img className={styles.cardImg} src={profilePicture} alt={`${firstName} ${lastName}`} onError={this.Img} />
            {isLoading && <div className={styles.initials}> undefined</div>}
          </div>
          <h2 className={styles.cardName}>{firstName} {lastName}</h2>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            numquam quod odit labore facilis temporibus amet, dicta saepe
            eveniet, maiores ab assumenda accusantium provident beatae
            molestiae. Ducimus inventore laboriosam mollitia.
          </p>
        </article>
      </li>
    );
    return element
  }
}

export default Cards;
