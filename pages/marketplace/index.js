import NFT from "../../components/NFT";

const MarketPlace = ({data}) => {
    return ( 
        <div className='min-h-screen overflow-x-hidden bg-repeat-y bg-cover'>
                
                <div className="w-2/3 mx-auto flex mt-4">
                    <button className="w-1/4 bg-white text-black duration-300  hover:bg-[#ffffff31] hover:text-white outline-none text-center font-bold">Search</button>
                    <input type="text" placeholder="Search by club" className="w-3/4 outline-none py-3 px-2 border ml-4 border-white rounded-sm"/>
                </div>

                <div className="grid gap-3 grid-cols-4 mt-12 w-5/6  mx-auto">
                    
                    {data.map(item=> {
                        return <NFT card={item} key={item.id}/>
                    })}
                    

                </div>
                {/* end of grid */}
      </div>
     );
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/nfts')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

 
export default MarketPlace;