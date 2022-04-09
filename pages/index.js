// import Head from 'next/head'
import Link from 'next/link'
import ClubHighlight from '../components/club-highlight'
import Hero from '../components/Hero'
import Promo from '../components/promo'
import Reward from '../components/reward'

export default function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden'
    // style={{backgroundImage: "url(images/bg.jpg)"}}
    >
      <Hero 
        cover="images/magic.jpg"
        title="The Biggest NFT Cluster in the universe" 
        subtitle="find your superpower"/>
      <div className='text-green-400 py-5 pt-12 mx-auto w-full '>
        <Promo/>
        <div className='w-1/3 mx-auto'>
          <button className='text-black duration-300  hover:bg-[#ffffff31] hover:text-white w-full text-center font-bold  bg-white rounded-full py-4 px-2 text-xl mx-auto'>Connect your wallet</button>
        </div>
      </div>
      <ClubHighlight/>
      <div className='w-1/3 mx-auto mb-12'>
          <Link href="/marketplace" passHref>
            <button className='text-black duration-300  hover:bg-[#ffffff31] hover:text-white w-full text-center font-bold  bg-white rounded-full py-4 px-2 text-xl mx-auto'>Explore our market places</button>
          </Link>
      </div>
      <Reward/>
      <div className='w-1/3 mx-auto mb-12'>
          <button className='text-black duration-300  hover:bg-[#ffffff31] hover:text-white w-full text-center font-bold  bg-white rounded-full py-4 px-2 text-xl mx-auto'>Discover Now</button>
      </div>
    </div>
  )
}
