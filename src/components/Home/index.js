import './index.scss';
import mainPhoto from "../../assets/images/main.jpg"

const Home = () => {
    return (
        <div className="container home-page">
            <div className="title">
                <h1>Cześć, jestem Milena,</h1>
                <h3>programuję kosmosy i robię rakiety.</h3>
            </div>
            <img className="main-photo" src={mainPhoto} alt="" ></img>

            {/* <div className='about'>
                <p><h3>Lorem ipsum dolor sit amet.</h3> Sit cupiditate voluptatem sit rerum illum aut enim voluptas in impedit dicta.
                    Ea praesentium repellat<br /> et fuga vero ut velit nulla aut voluptate voluptatem. </p>
                <p>Eum itaque sint et beatae iure ut quod velit sit quia quam ut labore voluptas ut quia autem.
                    Aut quos autem 33 <br />quaerat repellat et atque consequatur.
                    Qui impedit accusantium hic adipisci autem 33 unde expedita
                    quo repudiandae <br />beatae sed odit galisum aut cumque velit vel quia aspernatur! </p>
            </div> */}

        </div>
    )
}

export default Home