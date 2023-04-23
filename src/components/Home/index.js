import './index.scss';
import mainPhoto from "../../assets/images/main.jpg"
import rocket from "../../assets/images/rocket.jpg"
import spacerover from "../../assets/images/spacerover.jpg"
import milena from "../../assets/images/MilenaMichalska.png"

const Home = () => {
    return (
        <div className="container home-page">
            <div className="title">
                <h1>Cześć, jestem Milena,</h1>
                <h3>programuję kosmosy i robię rakiety.</h3>
            </div>
            <img className="main-photo" src={mainPhoto} alt="" ></img>
                 <div className='about'>
                <p><h3 className="title">Lorem ipsum dolor sit amet.</h3> Sit cupiditate voluptatem sit rerum illum aut enim voluptas in impedit dicta.
                    Ea praesentium repellat et fuga vero ut velit nulla aut voluptate voluptatem. </p>
                <p>Eum itaque sint et beatae iure ut quod velit sit quia quam ut labore voluptas ut quia autem.
                    Aut quos autem 33 quaerat repellat et atque consequatur.
                    Qui impedit accusantium hic adipisci autem 33 unde expedita
                    quo repudiandae <br />beatae sed odit galisum aut cumque velit vel quia aspernatur! </p>
            </div> 
         <div className="wrapper">
                <section className="mosaic">
                    <div className="mosaic-wrap">
                        <div className="item material-1">
                            <img className="" src={milena} alt=""
                                width="100%" height="100%" ></img>
                        </div>
                        <div className="item material-2">
                            <img className="" src={spacerover} alt=""
                                width="100%" height="100%" ></img>
                        </div>
                        {/* <div className="item material-3">
         <img className="original" src={} alt="" 
         width="100%" height="100%"></img>
         </div> */}
                        <div className="item material-4">
                            <img className="" src={rocket} alt=""
                                width="100%" height="100%" ></img>
                        </div>
                          {/* <div className="item material-5">
         <img className="original" src={} alt="" 
         width="100%" height="100%"></img>
         </div> */}
                    </div>

                </section>
            </div>

       

        </div>


    )
}

export default Home