import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = (props) => {
 
    return (
      <Col ks="6" md="4" sm="6" lg="3">
        <Link to={`/movie/${props.data.id}`}>
          <Card className="bg-dark text-white my-4 movie">
            <Card.Img
              className=""
              src={
                `https://www.themoviedb.org/t/p/w220_and_h330_face` +
                props.data.poster_path
              }
              alt="Card image"
            />
            <Card.ImgOverlay className="text-center pt-2 dtails">
              <p>اسم الفلم : {props.data.title}</p>
              <p>تاريخ الاصدار :{props.data.release_date}</p>

              <p>التقيم : {props.data.vote_average}</p>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Col>
    );
    
}
export default Movie