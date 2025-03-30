import { useEffect } from "react";
import { useState } from "react";
import User from '../Vlog/Vlog'


const Vlogs = ({hendleBookMark}) => {

    // get users data from public json 
    const [users, setUsers] = useState([])

    

    // user useEfects for users
    useEffect(() =>{
        fetch('users.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]) 


    return (
        <div className=" max-w-2/3">
               {
                users.map(user => <User 
                    hendleBookMark={hendleBookMark}
                    key={user.id} 
                    user={user}></User>)
               }
        </div>
    );
};

export default Vlogs;