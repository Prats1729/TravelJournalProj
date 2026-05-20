import './App.css'
import { Locations } from './data/locationData';

export default function App() {
  return (
    <>
      <Header />
      <main>
        {locations}
      </main>
    </>
  );
}

function Header(){
  return (
    <header>
      <nav className="header">
        <img src="/src/assets/globe.png" alt="globe" />
        <span>my travel journal</span>
      </nav>
    </header>
  );
}


function Card(props){
  const { mainImg, location, gmapLink, locationName, date, facts } = props;
  
  return (
    <article className="card">
      <div className="main-img">
        <img
          src={mainImg}
          alt={locationName}
        />
      </div>
      <div className="loc-info">
        <div className="location">
          <img src="src/assets/marker.png" alt="marker" />
          <span>{location}</span>
          <a
            href={gmapLink}
            target="blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className='loc-name'>{locationName}</h2>
        <p className='date'>{date}</p>
        <p className="facts">
          {facts}
        </p>
      </div>
    </article>
  );

}

const locations = Locations.map(location => {
  return (
    <Card 
      key={location.id}
      {...location} // this is basically saying each property like location = {location.location}
    />
  );
});
