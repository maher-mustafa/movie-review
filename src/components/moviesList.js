import { Row } from "react-bootstrap"
import Movie from "./movieCard"
import Paginat from "../pagination";
const MoviesList = (props) => {
    return (
      <Row className="mt-2">
        {props.List.map((ele) => (
          <Movie key={ele.id} data={ele} />
        ))}
        <Paginat getPaginate={props.getPaginate} />
      </Row>
    );
}
export default MoviesList