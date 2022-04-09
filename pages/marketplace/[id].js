import Image from "next/image";
import { GiGreekTemple, GiPirateFlag, GiVampireDracula, GiWomanElfFace } from "react-icons/gi";
import {FaHatWizard} from 'react-icons/fa'
import Link from "next/link";
import Suggestions from "../../components/suggestions";

const SingleNft = ({data}) => {
    const {title, url, description, type, id, price, club, clubId} = data
    return ( 
        <div className="mt-12 py-8 px-8 w-full">
            <div className="grid grid-cols-5 gap-3 mb-12">
                <div className="col-span-2"> 
                {type === 'image' ? 
                    <Image src={url} height={500} width={500} objectFit="cover" className="" /> :

                <video id="video" className="w-full h-full" poster={url} controls controlsList="nodownload" loop muted>
                    <source src='/sound.wma' />
                </video>
                }
                </div>

                <div className="text-white col-span-3 ml-4 px-8">
                    <h1 className="text-7xl text-center mb-8  font-custom tracking-widest">{title}</h1>
                    <ul>
                        <li className="text-xl my-8 font-semibold">{description}</li>
                            <Link href={`/clubs/${clubId}`}>
                                <li className={`text-xl my-8 font-semibold w-fit cursor-pointer rounded-md py-2 px-2 flex ${
                                    club ==='Wizards Club'? ' bg-wizard':
                                    club ==='Vampires Club'? ' bg-vampire':
                                    club === 'Grecian Club'? ' bg-greece':
                                    club === 'Pirates Club'? ' bg-pirate':
                                    club === 'Elves Club'? 'bg-elf': 
                                    club === 'Warriors Club'? 'bg-warrior': 'bg-monster'
                                }`}>
                                {club} 
                                    
                                    {
                                        club ==='Wizards Club'? <FaHatWizard className="h-7 ml-3" /> :
                                        club ==='Vampires Club'? <GiVampireDracula className="h-7 ml-3" />:
                                        club === 'Grecian Club'? <GiGreekTemple className="h-7 ml-3" />:
                                        club === 'Pirates Club'? <GiPirateFlag className="h-7 ml-3" /> : <GiWomanElfFace className="h-7 ml-3" />
                                    }
                                </li>
                            </Link>
                        <li className="text-xl my-8 font-semibold">price : {price} Near</li>
                        <li className="text-xl my-8 font-semibold">Media type : {type}</li>
                    </ul>
                    <button className="text-center w-4/5 hover:bg-[#003] hover:text-white rounded-lg bg-white text-black py-4 px-2 duration-300">Buy</button>
                </div>

            </div>
            <hr/>
            
            <Suggestions club={club} id={id} />
            
        </div>
     );
}
 
export const getServerSideProps = async ({params})=> {
    console.log(params);
    const res = await (fetch(`http:localhost:3000/nfts/${params.id}`));
    const data = await res.json();

    return {
        props: {data}
    }
}
export default SingleNft;