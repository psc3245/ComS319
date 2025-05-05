/*
Author: Peter Collins
ISU Netid : psc3245@iastate.edu
Date : March 28th, 2025
*/
import React from 'react';
import {UserCard} from './UserCard.jsx';

function App() {
  return (
    <div>
      <UserCard 
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9gcQFDcwrn-ojY65XbXItgoxDwzrEjydFPu_ocw6s"
        name="Mark Zuckerberg"
        salary={3000}
        status={true}
        address={{street: "123 Bellmont Rd.", city: "San Francisco", state: "California"}}
      />
      <UserCard 
        picture="https://shifters.tech/wp-content/uploads/2020/12/Microsoft.jpg"
        name="Bill Gates"
        salary={10000}
        status={true}
        address={{street: "456 Montbell Rd.", city: "Seattle", state: "Washington"}}
      />
    </div>
  );
}

export default App;