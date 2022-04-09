import Link from 'next/link';
import {BsImage, BsCameraVideo, BsMusicNote} from 'react-icons/bs'
import Chip from './chip';


const NFT = ({card}) => {
    const {url, title, price, club, type, id} = card;
    return ( 
        <Link href={`/marketplace/${id}`}>
            <div className="border-4 border-[#5e8dfc69] rounded-lg transform hover:-translate-y-2 duration-100 cursor-pointer">
                        <div
                            className=" bg-cover h-72 bg-center relative"
                            style={{backgroundImage: `url(${url})`}} 
                        >
                            <div className=" w-full h-full relative">
                                <div className="absolute top-0 left-0 bg-[#5e8dfc69] p-3 rounded-br-lg">
                                    {
                                        type ==='image'? <BsImage className="h-5 text-white"/> : type === 'video' ? <BsCameraVideo className="h-5 text-white" /> : <BsMusicNote className="h-5 text-white" />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="glass text-white p-3  w-full">
                            <h1 className='my-2'>{title}</h1>
                            <h1 className='my-2'>{price} Near</h1>
                            <Chip club={club}/>
                            <button className='w-full mx-auto text-center mt-5 border-2 rounded-lg py-2 hover:bg-[rgba(22,22,22,0.7)] duration-300 hover:text-white' >Buy</button>
                        </div>
            </div>
        </Link>
     );
}
 
export default NFT;