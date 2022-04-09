import {GiCancel} from 'react-icons/gi';
import {CgMenuHotdog} from 'react-icons/cg';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBarItem =  ({title, classProps, link}) => {
    const router = useRouter()
    return <Link href={link} passHref><a ><li className={`${router.pathname == link? 'border-b-2 border-white': ''}py-2 px-1 text-xl font-semibold rounded-sm mx-4 cursor-pointer ${classProps}`}>{title}</li></a></Link>
}

const NavBar = () => {
    const items = [{text: 'Home', link: '/'}, {text: 'Market Places', link: '/marketplace'},{text: 'Join', link: '/join'}];
    const [toggle, setToggle] = useState(false);
    return ( 
        <nav className='w-full mx-6 flex md:justify-between justify-between items-center p-4'>
            <div className="md:flex-[0.5] flex-initial items-center text-white font-bold text-4xl">
                Harmonic Cluster
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {items.map((item, index)=> (
                    <NavBarItem key={item+index} title={item.text} link={item.link}  />
                ))}
                <button className="bg-transparent border py-2 px-7 mx-4 rounded-lg cursor-pointer font-bold hover:bg-white hover:text-[#003]">Connect</button>
            </ul>
            <div className="flex-relative">
            {toggle
                    ? <GiCancel fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggle(false)} />
                    : <CgMenuHotdog fontSize={28} className="text-white md:hidden cursor-pointer mr-4" onClick={()=> setToggle(true)} />
                }

                {toggle && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md glass text-white animate-slide-in">
                        <li className="text-xl w-full my-2">
                            <GiCancel className='cursor-pointer' fontSize={28} onClick={()=> setToggle(false)} />
                        </li>
                        {items.map((item, index)=> (
                            <NavBarItem key={item+index} title={item.text} link={item.link} classProps="my-2 text-lg" />
                        ))}
                    </ul>
                )

                }
            </div>
        </nav>
     );
}
 
export default NavBar;