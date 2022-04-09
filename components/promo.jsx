import { AiOutlineCheckCircle } from "react-icons/ai";

const Promo = () => {
    return ( 
        <ul className='flex my-12 justify-around flex-wrap text-white'>
        <li className=' py-2 flex  mx-12 text-2xl font-semibold'>
          <span className='mr-4'>Many clubs </span>
          <AiOutlineCheckCircle className=' h-full' />
        </li>
        <li className=' py-2 flex mx-12 text-2xl font-semibold'>
          <span className='mr-4'>NFT Airdrops </span>
          <AiOutlineCheckCircle className=' h-full' />
        </li>
        <li className=' py-2 flex mx-12 text-2xl font-semibold'>
          <span className='mr-4'>NFT Battles </span>
          <AiOutlineCheckCircle className=' h-full' />
        </li>
        <li className=' py-2 flex mx-12 text-2xl font-semibold'>
          <span className='mr-4'>Lots of treasures </span>
          <AiOutlineCheckCircle className=' h-full' />
        </li>
        </ul>
     );
}
 
export default Promo;
