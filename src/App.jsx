import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Card
          mainImg="https://scrimba.com/links/travel-journal-japan-image-url"
          location="JAPAN"
          gmapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          locationName="Mount Fuji"
          date="12 Jan, 2023 - 24 Jan, 2023"
          facts="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
        />
        <Card
          mainImg="https://scrimba.com/links/travel-journal-australia-image-url"
          location="AUSTRALIA"
          gmapLink="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          locationName="Sydney Opera House"
          date="27 May, 2023 - 8 Jun, 2023"
          facts="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
        />
        <Card 
          mainImg="https://scrimba.com/links/travel-journal-norway-image-url"
          location="NORWAY"
          gmapLink="https://www.google.com/maps/place/Geirangerfjord/@62.1047507,6.9098361,11z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          locationName="Geirangerfjord"
          date="01 Oct, 2023 - 18 Nov, 2023"
          facts="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />
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