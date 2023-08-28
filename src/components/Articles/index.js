import './index.scss';
import 'react-tabs/style/react-tabs.css';

const Articles = () => {
    return (
        <div class="container--tab">
            <h1>Artykuły </h1>
            <h2>Blog, prelekcje, Wydarzenia.... </h2>
            <div className="tab-wrap">

                <input type="radio" id="tab1" name="tabGroup1" className="tab" checked />
                <label for="tab1">Blog</label>

                <input type="radio" id="tab2" name="tabGroup1" className="tab" />
                <label for="tab2">Prelekcje i wydarzenia </label>

                <div className="tab__content">
                    <h3>Tytuł</h3>
                    <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                </div>

                <div className="tab__content">
                    <h3>Tytuł</h3>
                    <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

                    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
                </div></div></div>


    )
}





export default Articles