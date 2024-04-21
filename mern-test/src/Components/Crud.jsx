import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AxiosCallApi = () => {

    const [userdata, setuserdata] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
                setuserdata(response.data);
            })
    }, [])

    return (
        <div>
            {userdata.map((data) => {
                return (
                    <div>
                        <h1>
                            id= {data.id},
                            name= {data.name},
                            username= {data.username}
                        </h1>
                    </div>
                )
            })}

        </div>
    )
}

export default AxiosCallApi

