import './index.scss';
import mainPhoto from "../../assets/images/main.jpg"
import portrait from "../../assets/images/portrait.jpg"
import vinyl from "../../assets/images/vinyl.jpg"
import smile from "../../assets/images/smile.jpg"
import game from "../../assets/images/game.jpg"

const Home = () => {
    return (
        <div className="container home-page">
            <div className="title">
                <h1>Cześć, jestem Milena,</h1>
                <h3>programuję kosmosy i robię rakiety.</h3>
            </div>
            <img className="main-photo" src={mainPhoto} alt="" ></img>
            <div className="section">
                <div className="about">
                    <div class="grid">
                        <div><img className="portrait" src={portrait} alt=""
                        ></img></div>
                        <div className='about__section'> <p><h3 className="title">O Mnie</h3>
                            Lorem ipsum dolor sit amet. Sit cupiditate voluptatem sit rerum illum aut enim voluptas in impedit dicta.
                            Ea praesentium repellat et fuga vero ut velit nulla aut voluptate voluptatem. </p>
                            <p>Eum itaque sint et beatae iure ut quod velit sit quia quam ut labore voluptas ut quia autem.
                                Aut quos autem 33 quaerat repellat et atque consequatur.
                                Qui impedit accusantium hic adipisci autem 33 unde expedita
                                quo repudiandae <br />beatae sed odit galisum aut cumque velit vel quia aspernatur! </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="bubblePhoto">
                    <section className="mosaic">
                        <div className="mosaic-wrap">
                            <div className="item material-1">
                                <img className="" src={game} alt=""
                                    width="100%" height="100%" ></img>
                            </div>
                            <div className="item material-2">
                                <img className="" src={vinyl} alt=""
                                    width="100%" height="100%" ></img>
                            </div>
                            <div className="item material-3">
                                <img className="" src={smile} alt=""
                                    width="100%" height="100%" ></img>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home