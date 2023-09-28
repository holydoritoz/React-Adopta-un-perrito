
import Header from './assets/components/Header'
import { MyCard } from './assets/components/MyCard'
import Footer from './assets/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
    <div className="container w-100 text-center p-5">
      <Header titulo="Adopta un perrito"/>
      <div className="container w-100 d-flex">
        <MyCard
        url="https://images.pexels.com/photos/4490129/pexels-photo-4490129.jpeg?auto=compress&cs=tinysrgb&w=1600"
        name="Kayla"
        description="Con su adorable cuerpo alargado y orejas caídas, nuestro encantador perrito Salchicha es el compañero perfecto para aquellos que buscan diversión y lealtad en un paquete compacto."
        texto="Dachshund"
        bg="primary"
        />
        <MyCard
        url="https://images.pexels.com/photos/18344058/pexels-photo-18344058.jpeg?auto=compress&cs=tinysrgb&w=1600"
        name="Niggy"
        description="El Schnauzer Miniatura, con su barba distintiva y mirada inteligente, es un perro lleno de carácter y energía. Llevalo a casa y dale mucho amor"
        texto="Schnauzer Miniatura"
        bg="danger"
        />
        <MyCard
        url="https://images.pexels.com/photos/18332731/pexels-photo-18332731/free-photo-of-camara-perro-mascota-vintage.jpeg?auto=compress&cs=tinysrgb&w=1600"
        name="Nizza"
        description="Nuestro adorable Bobtail es la personificación de la ternura y la elegancia peluda. Con su pelaje largo y esponjoso y su personalidad afectuosa, este perro es un verdadero abrazo en movimiento."
        texto="Old English Sheepdog"
        bg="info"
        />
        <MyCard
        url="https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_640.jpg"
        name="Stella"
        description="Nuestro cachorro Golden Retriever es la personificación de la lealtad y la simpatía. Su pelaje dorado y su sonrisa contagiosa iluminarán tus día."
        texto="Perfect dog"
        bg="success"
        />
        <MyCard
        url="https://cdn.pixabay.com/photo/2017/08/07/02/57/puppy-2599052_640.jpg"
        name="Kirita"
        description="¿Buscas una dosis diaria de ternura? Nuestro pequeño Shih Tzu es una bolita de pelo suave y ojos chispeantes que harán que tu corazón se derrita instantáneamente."
        texto="Perfect dog"
        bg="warning"
        />
        <MyCard
        url="https://cdn.pixabay.com/photo/2022/01/17/19/59/dog-6945696_640.jpg"
        name="Bartolo"
        description="Con su mirada juguetona y orejas caídas, nuestro cachorro de raza Beagle es una explosión de energía y alegría."
        texto="Perfect dog"
        bg="dark"
        />
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
