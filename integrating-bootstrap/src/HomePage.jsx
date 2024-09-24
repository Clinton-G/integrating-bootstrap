import { Button, Container, Image } from 'react-bootstrap';
import './HomePage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Bowser from './Bowser-Peaches.jpg';

const HomePage = () => {
  return (
    <div>
      <Container>
        <Image src={Bowser}/>
        <Button className="shop-now-text">Shop Now</Button>
      </Container>
    </div>
  );
};

export default HomePage;
