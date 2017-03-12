import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import TileList from './TileList.js'


const media = [{
  title: "Oh, The Places You'll Go!",
  thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  details: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
},{
  title: "Light & Gold",
  thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/91rPHJtuMeL._SX522_.jpg',
  details: {
    composer: 'Eric Whitacre',
    released: '5 April, 2011',
    aisn: 'B003ODHXEG'
    }
},{
  title: "Contact",
  thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51t4bFM4uML._SX200_QL80_.jpg',
  details: {
    released: '1997',
    rating: 'PG',
    genre: 'Science Fiction, Drama, Thriller, Mystery'
    }
}];

ReactDOM.render(
  //<TileList list={media}/>,
  <App media={media} />,
  document.getElementById('root')
);
