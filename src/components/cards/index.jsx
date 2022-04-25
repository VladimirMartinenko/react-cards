import React from "react";
import './style.css'
import './reset.css'

class Cards extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isRead: false,
    };
  }
  Img = () => {
    this.setState({
      isRead: !this.state.isRead
    });
  };
    render() {

    const {
      firstName,
      lastName,
      profilePicture,
    }=this.props;
    const { isRead } = this.state;
    const element = (
      <main className="container">
      <ul id="root" className="userCardsContainer">
      <li className="userCardWrapper">
        <article className="cardContainer">
          <div className="cardImgWrapper">
            <img className="cardImg" src={profilePicture} onError={this.Img} />
            {isRead && <div className="initials"> undefined</div>}
          </div>
          <h2 className="cardName">{firstName} {lastName}</h2>
          <p className="cardDescription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            numquam quod odit labore facilis temporibus amet, dicta saepe
            eveniet, maiores ab assumenda accusantium provident beatae
            molestiae. Ducimus inventore laboriosam mollitia.
          </p>
        </article>
      </li>
      </ul>
      </main>
    );
    return element
  }
}

export default Cards;
