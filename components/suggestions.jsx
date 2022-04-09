import { useEffect, useState } from "react";
import NFT from "./NFT";

const Suggestions = ({id, club}) => {
    const [suggestions, setSuggestions] = useState([])
    useEffect( ()=> {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/nfts?club=${club}`)
            const data = await res.json()
            const sugs = data.filter(item=> item.id !==id)
            setSuggestions(sugs)
        }
        fetchData()
    }, [])

    return ( 
        <>
            <div className="w-fit mx-auto p-3">
                <h1 className="text-center text-3xl text-white">More from thesame club </h1>
                {/* <div>
                    <div className="w-full border-b-8 my-2 rounded-l-full"></div>
                    <div className="w-5/6 ml-auto border-b-8 my-2 rounded-l-full"></div>
                    <div className="w-2/3 ml-auto border-b-8 my-2 rounded-l-full"></div>
                </div> */}
            </div>
            <div className="flex justify-start space-x-3 py-8 w-5/6 mx-auto">
                {suggestions.map(item => {
                return (<div key={item.id} className="w-1/3 mx-3">
                    <NFT card={item}/>
                </div>)
                })}
            </div>
        </>
     );
}
 
export default Suggestions;