import React, { useEffect, useState } from 'react';
// import { BLOG_DATA } from './Blog_data';
import { Link } from 'react-router-dom';


function Blog() {
  const [data,setdata] = useState([]);

  useEffect(()=>{
    fetch("./Data.json")
    .then((res)=>res.json())
    .then((res)=>setdata(res))
    .catch((err)=>console.log(err))

  });

  return (
    <div className='container my-4'>
      <div className='fw-bold fs-3 mb-4'>All Blogs</div>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 '>
        {data.map((item, index) => (
          <div key={index} className='col'>
            <Link className='text-decoration-none' to={`/blog/${item.id}`}  >
            <div className='card h-100 '>
              <img className='card-img-top rounded object-fit-contain' src={item.thumbnail} alt='Blog' />
              <div className='card-body'>
                <div className='card-title fw-semibold fs-6'>{item.title}</div>            
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;