
import Card from '../Components/card'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import './App.css'
import data from '../data'

function App() {

  const carddata = data.map((card) => 
  {
    return(
      <Card
      key={card.id}
     img={card.coverImg}
     rating={card.stats.rating} 
     reviewCount={card.stats.reviewCount} 
     location={card.location}
      title={card.title}
       price={card.price}
       openspots={card.openSpots}
   />
    ) 
  }
  )
  return (
    <>
      <Navbar />
   <Hero />
   <section className='cards-data'>
   {carddata}
   </section>
 
   

    </>
 
  )
}

export default App
