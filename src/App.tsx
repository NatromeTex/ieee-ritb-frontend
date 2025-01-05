import './App.css';
import TopBar from './components/topbar';
import Footer from './components/footnote';
import logo from './assets/cropped-transparent-bg.webp';
import teampic from './assets/team.png';

function App() {
  const buttons = ['Home', 'Events', 'Blog', 'Portfolio', 'Contact', 'About us'];
  
  return (
    <div>
      <div className='topbar'>
        <TopBar buttons={buttons} logoSrc={logo} altText='IEEE Ramaiah'/>
      </div>
      <div className="parallax-container">
        <div className="background-image" />
      </div>
      <div className="content">
        <h2 className="text-4xl font-bold mb-8">What is IEEE RIT-B?</h2>
        <div className='teampic'>
          <img src={teampic} alt='team' className='h-full object-contain rounded-lg'/>
        </div>
        <div className='textcontainer'>
          <p className="mb-2 text-2xl font-semibold text-justify">
            IEEE RIT-B is the IEEE student branch at Ramaiah Institute of Technology. It is one of the largest, most active student branches in the Bengaluru section.
            IEEE RIT-B was inaugurated in 2003 and has strived to enrich the students of RIT with the latest developments in various fields of
            technology and research, advancing technology for humanity.
          </p>
          <p className="mb-2 text-2xl font-semibold text-justify">
            Over the two decades, we have garnered many accolades,
            including “The Best Large Student Chapter,” “Best Student Volunteer,” and many others. We conduct a multitude of competitions, workshops, seminars, and other events,
            including our flagship event 'Aavishkaar' and coordinating the recent RIT TechFest 2023.            
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
