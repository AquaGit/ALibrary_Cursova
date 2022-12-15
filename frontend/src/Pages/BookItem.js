import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default class BookItem extends React.Component {
  state = {
    books: []
  }
  


  componentDidMount() {
    axios.get(`http://localhost:8000/api/book/${window.location.pathname.split("/").reverse()[0]}/?format=json`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
  }

  render() {
    return (
      <>
      <div class="d-flex justify-content-center">
          {
            this.state.books
              .map(book => (
                <div class="col-md-4 text-center" >
                  <div class="card" key={book.id}>
                    <img class="card-img-top" src={book.photo} alt="Card image cap" />
                    <div class="card-body">
                      <h4 class="d-flex justify-content-center"> {book.title} </h4>
                      <h5> Жанр: {book.category} </h5>
                      <div >
                            <h7> Опис: {book.review} </h7>
                          </div>
                      <div class="d-flex justify-content-center">
                            <Button href={book.pdf}>
                              Download PDF
                            </Button>
                          </div>
                    </div>
                  </div>
                </div>
              ))}
        </div> 
      </>
    )
  }
}

