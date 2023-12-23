import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyTitle from './components/MyTitle';
import MyFilmList1 from './components/MyFilmList1';
import MyFilmList2 from './components/MyFilmList2';
import MyFilmList3 from './components/MyFilmList3';
import MyFooter from './components/MyFooter';
import SearchBook from './components/SearchBook';
import { Container } from 'react-bootstrap';




function App() {
  return (
    <>
      <Container fluid className="bg-dark">
        <MyNavbar />
        <SearchBook />
        <MyTitle />
        <MyFilmList1 />
        <MyFilmList2 />
        <MyFilmList3 />
        <hr className='text-white'/>
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
