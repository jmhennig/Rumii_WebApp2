import decoration1 from './Media/decoration1.png';
import rumiigif from './Media/rumii-gif.gif';
import essentials1 from './Media/essentials1.png';
import essentials2 from './Media/essentials2.png';
import ellipses from './Media/Ellipses.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Header-text">
          rumii bags
        </p>
        <div className="Page-names">
          <li>
            <a
              className="Page-name"
              style={{textAlign: 'center'}}
              href="https://reactjs.org"
              rel="noopener noreferrer"
            >
              The Essential Bag
            </a>
          </li>
          <li>
            <a
              className="Page-name"
              href="https://reactjs.org"
              rel="noopener noreferrer"
            >
              Our Story
            </a>
          </li>
        </div>
      </header>
      <body>
        <div className="Container">
          <h1 className="Title1">Essential bag is essential in name, form, & function <span>for nurses</span>.</h1>
          <img 
            src={decoration1}
            style={{paddingTop: "70px", paddingRight: "37%"}}>
          </img>
          <div className="Rumii-bag"></div>
          <div className='Ellipses'></div>
        </div>

        <div className="Container">
          <div className="Row">
            <div className="bn4n-col1">
              <h1 className="Title2">Designed by nurses, <span>for nurses</span></h1>
            </div>
            <div className="bn4n-col2">
              <p className="Description">
                The Rumii Essential Bag seamlessly integrates <span>utility</span>, <span>comfort</span>, and <span>style</span>. It is the ultimate companion for nurses seeking practicality and fashion-forward functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="Container">
          <div className="Row">
              <img
                className="col-imgs"
                src={rumiigif}>
              </img>
          </div>
        </div>

        <div className="Container">
          <div className="Row">
            <div className="essentials-col1">
              <h2 className="Sub-title">All of the essentials for the <span>essential worker</span></h2>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Maintain your stride uninterrupted as you tend to patients,
                equipped with all your essential tools securely stored at your waist. This bag effortlessly
                accommodates everything you require for the task at hand.
              </p>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Read more
              </p>
            </div>
            <div className="essentials-col2">
              <img
                className="essentials-img"
                src={essentials1}>
              </img>
            </div>
          </div>
          <div className="Row">
            <div className="essentials-col1">
              <img
                className="essentials-img"
                src={essentials2}>
              </img>
            </div>
            <div className="essentials-col2">
              <h2 className="Sub-title">All of the essentials for the <span>essential worker</span></h2>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Maintain your stride uninterrupted as you tend to patients,
                equipped with all your essential tools securely stored at your waist. This bag effortlessly
                accommodates everything you require for the task at hand.
              </p>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Read more
              </p>
            </div>
          </div>
        </div>

        <div className="Container">
          
        </div>
      </body>
    </div>
  );
}

export default App;
