import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Details = (props) => {
    let [mov, setMov] = useState([])
    let [movEn, setMovEn] = useState([])
    let prams = useParams();
     const getDetails = async (page) => {
       let res = await axios.get(
         `
https://api.themoviedb.org/3/movie/${prams.id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=ar`
       );
       let resEn = await axios.get(
         `
https://api.themoviedb.org/3/movie/${prams.id}?api_key=f1aca93e54807386df3f6972a5c33b50`
       );

       setMov(res.data);
       setMovEn(resEn.data);
    
     };
    useEffect(() => {
    getDetails()
},[])

    return (
      <>
        <div dir="rtl" className="card mb-3">
          <div className="row g-0">
            <div className="col-sm-4">
              <img
                src={
                  `https://www.themoviedb.org/t/p/w220_and_h330_face` +
                  mov.poster_path
                }
                className="img-fluid rounded-start w-100"
                alt="..."
              />
            </div>
            <div className="col-sm-8">
              <div className="card-body text-center">
                <p>اسم الفلم :{mov.title} </p>
                <p>تاريخ الاصدار :{mov.release_date}</p>

                <p>عدد المقيمين :{mov.vote_count} </p>
                <p>التقيم : {mov.vote_average}</p>
              </div>
            </div>
          </div>
        </div>
        <Row dir="rtl" className="border">
          <h2>قصة الفلم </h2>
          <p>{mov.overview}</p>
        </Row>
        <Row dir="rtl" className="d-flex justify-content-center my-3">
          <Col className="">
            <Link to="/">
              <Button>الرجوع للصفحة الرئيسية</Button>
            </Link>
          </Col>
          <Col>
            <a target="_blank" href={mov.homepage!=""?mov.homepage:movEn.homepage}>
              <Button className="">مشاهدة الفلم</Button>
            </a>
          </Col>
        </Row>
      </>
    );
    
}
export default Details