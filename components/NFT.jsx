import Link from 'next/link';
import {BsImage, BsCameraVideo, BsMusicNote} from 'react-icons/bs'
import Chip from './chip';
import Download from './download';


const NFT = ({card}) => {
    const {url, title, price, club, type, id} = card;
    return ( 
        // <Link href={`/marketplace/${id}`}>
            <div className="border-4 border-[#5e8dfc69] rounded-lg transform hover:-translate-y-2 duration-100 cursor-pointer">
                        <div
                            className=" bg-cover h-72 bg-center relative rounded-t-lg"
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
                            <h1 className={`my-2 text-xl
                            ${
                                club ==='Magic Club'? 'text-wizard':
                                club ==='Vampires Club'? 'text-vampire':
                                club === 'Grecian Club'? 'text-greece':
                                club === 'Pirates Club'? 'text-pirate': 
                                club === 'Elves Club'? 'text-elf': 
                                club === 'Warriors Club'? 'text-white': 'text-monster'
                            }
                            `}>{title}</h1>
                            <h1 className='my-2'>{price} Near</h1>
                            <Chip club={club}/>
                            <Link href={`/marketplace/${id}`} >
                                <button className='block w-full mx-auto text-center mt-5 border-2 rounded-lg py-2 hover:bg-[rgba(22,22,22,0.7)] duration-300 hover:text-white'>
                                    Buy
                                </button>
                                </Link>
                            {/* <Download dataurl="https://www.mintbase.io/_next/image?url=https%3A%2F%2Farweave.net%2FGn4KESJCWPtbvCCHDjVMQuOyE5qyXrvKsFVfnwZFGUQ&w=1920&q=75" filename="test"/> */}
                        </div>
            </div>
        // </Link>
     );
}
 
export default NFT;