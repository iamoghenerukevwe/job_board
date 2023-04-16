import { useState,  useEffect } from 'react';

export default function Result() {
  
  const [data, setData] = useState();

  const url = 'https://jsearch.p.rapidapi.com/search?query=web&page=2&num_pages=1&date_posted=3days&remote_jobs_only=true';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a47c6df4c4msh6595ea13aeba306p13a5bcjsneed6d6c85529',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };


        fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)})
      .catch(err => console.error('error:' + err));
  })

  
}