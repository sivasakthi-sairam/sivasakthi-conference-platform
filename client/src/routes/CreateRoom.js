import React from "react";
import { v1 as uuid } from "uuid";

import './Join.css';

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (

        <div className="joinOuterContainer">

<div class="background-container"></div>

<div class="stars"></div>

  
    
  


      <div className="joinInnerContainer">
        <h1 className="heading">𝐒𝐢𝐯𝐚𝐬𝐚𝐤𝐭𝐡𝐢'𝐬 𝐨𝐧𝐥𝐢𝐧𝐞 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>

        <div className={'content'}>

          <ul className={'deslist'}>

        <li><h4><span className={'desspan'}>🖤 </span>Maximum 4 users within the room.</h4></li>

        <li><h4><span className={'desspan'}>🖤 </span>Share the created room's link to others.</h4></li>

        </ul>

        </div>

        
        <button className={'button1 mt-20'} onClick={create}>»»ᅳCreate-meeting-roomᅳ►</button>

        <div className={'button2 mt-20'}>

        <h5 className="foot">Copyright &copy; {new Date().getFullYear()} Sivasakthi.</h5>

        </div>
        
        
      </div>


      
      

    </div>
        
    );
};

export default CreateRoom;
