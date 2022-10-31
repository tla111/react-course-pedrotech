//App 9
// import React from 'react'

// const Home = ({ username }) => {
//     return (
//         <div>
//             <h1>THIS IS THE HOMEPAGE: {username}</h1>
//         </div>
//     )
// }

// export default Home

//App 10
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from "axios"

const Home = () => {
    const { data } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })
    return (
        <div>
            <h1>THIS IS THE HOMEPAGE</h1>
            <p>{data?.fact}</p>
        </div>
    )
}

export default Home