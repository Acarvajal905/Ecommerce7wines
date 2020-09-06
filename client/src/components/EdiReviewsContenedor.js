import React from 'react';
import axios from "axios";
import Reviews from "./Reviews.js"

export default function ContenedorReviews(id) {

    const [review, setReview] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/products/${id.props}/review`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    .then(ress => {
        let arr = ress.data.filter(p => p.user.id == localStorage.getItem('userId'))
      setReview(arr);
    })
    .catch(error =>{console.log(error)})
  }, [])

    return(
        <div>
            {review.map(re =>  /* Aca renderizamos las reviews, LIMITADO A LAS ULTIMAS 3 REVIEWS */
          <Reviews
            calificacion = {re.calificacion}
            descripcion ={re.descripcion}
            createdAt = {re.createdAt}
            userId = {re.userId}
          />)}
        </div>
    )
};