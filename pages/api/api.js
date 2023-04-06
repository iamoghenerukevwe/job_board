import axios from "axios";

export default function const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Frontend',
    page: '10',
    num_pages: '1',
    date_posted: 'week',
    remote_jobs_only: 'true'
  },
  headers: {
    'X-RapidAPI-Key': 'a47c6df4c4msh6595ea13aeba306p13a5bcjsneed6d6c85529',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});