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
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    console.log(catData);

    return (
        <div>
            <h1>THIS IS THE HOMEPAGE</h1>
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Update Data</button>
        </div>
    )
}

export default Home