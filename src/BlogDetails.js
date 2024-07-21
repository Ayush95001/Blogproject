import React, { useEffect } from 'react'
import { Blogdata } from './Blogdata';
import { useParams,useNavigate } from 'react-router-dom';
import Notfoundpage from './Notfoundpage';



function Detail({isloggedIn}) {
    const navigate=useNavigate();
    
    //step 1: fetch blog id
    const {D_id}=useParams();

    //step 2: fetch is login status
    useEffect(()=>{
        if(!isloggedIn){
            navigate("/login");

        }
    });

    //step 3: filter blogdata


    let item = null;
    for (const blog of Blogdata) {
     if(blog.id===parseInt(D_id)){
         item=blog;
     }
     
    };

    return (
        <>
            <div className='display-5 fw-bold text-center mb-3'>
                {/* <div >Blog Number - {D_id}</div> */}
            </div>
            <div className='d-flex align-items-center justify-content-center mx-5'>
                {

                    item ? 
                    
                    
                        <div style={{ height: '450px', width: '550px' }} className='card text '>
                            <img className='card-img-top object-fit-contain' src={item.thumbnail} alt='Blog' />
                            <div className='card-body'>
                                <div className='fs-4 fw-semibold'>{item.title}</div>
                                <div >{item.description}</div>
                            </div>
                        </div>
                   
                    :
                    (<Notfoundpage/>)
                }
            </div>
        </>
    )
}

export default Detail;