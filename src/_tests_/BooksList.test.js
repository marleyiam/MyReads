import React, {Component} from 'react';
import { shallow, mount, render } from 'enzyme';
import BooksList from '../components/BooksList';

let books = [
  {
    title:"The Linux Command Line",
    subtitle:"A Complete Introduction",
    authors:["William E. Shotts, Jr."],
    publisher:"No Starch Press",
    publishedDate:"2012",
    description:"Desc",
    industryIdentifiers:[
      {
        type:"ISBN_13",
        identifier:"9781593273897"
      },
      {
        type:"ISBN_10",
        identifier:"1593273894"
      }
    ],
    readingModes:{
      text:true,
      image:false
    },
    pageCount:480,
    printType:"BOOK",
    categories:["COMPUTERS"],
    averageRating:4,
    ratingsCount:2,
    maturityRating:"NOT_MATURE",
    allowAnonLogging:true,
    contentVersion:"1.2.2.0.preview.2",
    panelizationSummary:{
      containsEpubBubbles:false,
      containsImageBubbles:false
    },
    imageLinks:{
      smallThumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    language:"en",
    previewLink:"http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    infoLink:"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    canonicalVolumeLink:"https://market.android.com/details?id=book-nggnmAEACAAJ",
    id:"nggnmAEACAAJ",
    shelf:"currentlyReading"
  }
];
let shelfs = [];

const updateBooks = () => {

}

const moveShelfsBook = (bookToMove, newShelf) => {
}

describe("BooksList component", () => {
  var component, product;

  beforeEach(()=> {
    product = {
      id: 1,
      name: 'NIKE Liteforce Blue Sneakers',
      description: 'Lorem ipsum.',
      status: 'Available'
    };
  })
  beforeEach(()=> {
    component = mount(
      <BooksList 
        books={books}
        moveShelfsBook={moveShelfsBook}
      />
    );
  })

  it('test #1' ,() => {
    
  })

})