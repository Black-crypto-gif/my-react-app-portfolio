import React from 'react'
import BlogList from './BlogList'
import { useState, useEffect} from 'react'

function Home() {
    const [blogs, setBlogs] = useState(
        [
            {
              "name": "Tianna Kreiger",
              "birthday": "2021-10-15T09:25:03.276Z",
              "phone": "(166) 400-4375 x769",
              "zip": "18025-6907",
              "city": "South Tryciaview",
              "email": "Kaycee.Fahey45@gmail.com"
            },
            {
              "name": "Dr. Autumn Hamill",
              "birthday": "2021-04-11T00:59:45.843Z",
              "phone": "654-317-4659",
              "zip": "53928-6562",
              "city": "South Omerstad",
              "email": "Reginald.OKeefe30@yahoo.com"
            },
            {
              "name": "Alex Pacocha",
              "birthday": "2021-03-29T15:33:38.574Z",
              "phone": "(286) 818-7235",
              "zip": "48372",
              "city": "Murlberg",
              "email": "Dominique.Herzog@gmail.com"
            },
            {
              "name": "Mr. Terrill Senger",
              "birthday": "2021-11-13T03:56:58.015Z",
              "phone": "1-567-713-6739 x10358",
              "zip": "99586-7119",
              "city": "Mabelshire",
              "email": "Madelyn_Price@yahoo.com"
            },
            {
              "name": "Alisha Reynolds",
              "birthday": "2021-12-31T21:06:18.947Z",
              "phone": "(964) 531-5924",
              "zip": "81803-6140",
              "city": "New Skylastad",
              "email": "Dan.Quigley@hotmail.com"
            },
            {
              "name": "Steve Schuster",
              "birthday": "2021-07-06T09:55:03.584Z",
              "phone": "(864) 406-9902 x27983",
              "zip": "47172-0260",
              "city": "South Jarod",
              "email": "Celia.Nader@gmail.com"
            },
            {
              "name": "Stan Rogahn",
              "birthday": "2021-11-16T02:46:39.200Z",
              "phone": "1-617-713-6171",
              "zip": "82943",
              "city": "South King",
              "email": "Gilbert.Bednar59@hotmail.com"
            },
            {
              "name": "George Simonis",
              "birthday": "2021-10-13T19:33:21.467Z",
              "phone": "767.509.1311 x8059",
              "zip": "53263-5802",
              "city": "Emmaton",
              "email": "Chesley.Waelchi59@gmail.com"
            },
            {
              "name": "Doyle Hackett",
              "birthday": "2021-10-10T14:58:24.300Z",
              "phone": "(465) 073-1454 x70749",
              "zip": "87133",
              "city": "Larkintown",
              "email": "Bonita.Brown@gmail.com"
            },
            {
              "name": "Fausto Rogahn",
              "birthday": "2021-12-21T21:12:49.928Z",
              "phone": "1-446-363-8458 x2420",
              "zip": "26773",
              "city": "New Shirley",
              "email": "Emory58@hotmail.com"
            }
          ]
    );
    const handleDelete = (email) => {
      const newBlogs = blogs.filter(blog => blog.email !== email);
      setBlogs(newBlogs);
    }
    useEffect(() => {
      console.log('useEffect runs');
      console.log(blogs);
    },[blogs]);
    return (
        <div className="home">
            <BlogList blogs ={ blogs } title=" All data" handleDelete={
              handleDelete
            }/>
            <BlogList blogs ={ blogs.filter((blog)=> blog.email === "Emory58@hotmail.com" ) } title="marios gamer"/>
            <span className='' ></span>
            
        </div>
    )
}

export default Home
