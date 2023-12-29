import '../styles/Main.css'
import Women from '../images/women.jpg'

const Main = () => {
  return (
    <>
    <main>
       <div className="container">
            <h1>Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ullam fugit dicta, voluptates odit voluptatum veritatis optio fugiat officia magni. Ullam aliquam dolores dolore animi, numquam quasi distinctio fugiat explicabo?</p>
            <div className="images">
                <div className="image">
                    <img src={Women} alt="" />
                    <p>Ipsum Feuzgiat</p>
                </div>
            </div>
       </div>
    </main>
    </>
  )
}

export default Main