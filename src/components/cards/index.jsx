import React from "react";
import './reset.css'
import './style.css'


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
      <main className="container">
      <ul id="root" className="userCardsContainer">
      <li className="userCardWrapper">
        <article className="cardContainer">
          <div className="cardImgWrapper">
            <img className="cardImg" src={profilePicture} alt={`${firstName} ${lastName}`} onError={this.Img} />
            {isLoading && <div className="initials"> undefined</div>}
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
