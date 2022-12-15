import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import BookItem from './BookItem'

export default class Books extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/books/?format=json`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
        console.log(res)
      })
  }

  render() {
    return (
      <>
        <div class="d-flex justify-content-center">
          <h1>All Books</h1>
        </div>


        <div >
          <div className="container">
            <div class="row gy-5">
              {
                this.state.books
                  .map(book => (
                    <div class="col-sm-4" >
                      <div class="card" key={book.id}>
                        <img class="card-img-top" src={book.photo} alt="Card image cap" />
                        <div class="card-body">
                          <h4 class="d-flex justify-content-center"> {book.title} </h4>
                          {/* <h5> Жанр: {book.category} </h5> */}
                          {/* <div >
                            <h7> Опис: {book.review} </h7>
                          </div> */}
                          <div class="col-md-12 text-center">
                            <Button href={`books/${book.id}`}> More</Button>
                          </div>
                          {/* <div class="d-flex justify-content-center">
                            <Button href={book.pdf}>
                              Download PDF
                            </Button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        
    
      </>
    )
  }
}

