import {FcIdea} from 'react-icons/fc'
const Reward = () => {
    return ( 
        <div className=" mb-12 py-12 flex justify-around">
            
            <div
                className="w-1/2 bg-cover h-56 bg-center relative"
                style={{backgroundImage: "url('images/nft.png')"}}
                >
                <div className="w-full h-full">
                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                    </div>
                </div>
            </div>

            <div className="text-white">
                <h3 className="text-3xl text-center uppercase align-middle">Gain Fungible tokens and points</h3>
                <ul className="py-1 my-2 text-lg ">
                    <li className='flex w-full my-4'> <FcIdea className='h-5 mt-1' /> <span className='ml-3'>Earn Elixirs and heal</span></li>
                    <li className='flex w-full my-4'><FcIdea className='h-5 mt-1' /> <span className='ml-3'>win characters</span></li>
                    <li className='flex w-full my-4'><FcIdea className='h-5 mt-1' /> <span className='ml-3'>trade Characters</span></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Reward;