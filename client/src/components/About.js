
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function About() {

    const navigate = useNavigate();
   const callAboutPage = async () => {
   try{
     const res = await fetch('/about',{

      method:"GET",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     });
      const data =await res.json();
      console.log(data);
      if(!res.status===200)
        {
          const error = new Error(res.error);
           throw error;

        }

   }catch(err){
     console.log(err);
    navigate("/login"); 
   }
}
useEffect(() => {

  callAboutPage();

}, []);


return (
  <div class=" justify-content-center ">
    <h1 class=" text-center ">Hi ROHAN !</h1>
    <div class="text-center">
      <img src="https://cdn.xxl.thumbs.canstockphoto.com/portrait-of-a-smiling-young-man-looking-at-camera-closeup-portrait-of-a-smiling-young-man-looking-at-stock-images_csp15964556.jpg" class="rounded-circle" alt="..." />
    </div>

    <h3 class=" text-center  text-success">Contest Details</h3>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contest Name</th>
          <th scope="col">Status</th>
          <th scope="col">Results</th>
          <th scope="col">Transactions</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>WON</td>
          <td>@mdo</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>LOSE</td>
          <td>@fat</td>
          <td>-200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
      </tbody>
    </table>


  </div>
)
}

export default About