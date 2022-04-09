import Image from "next/image";

const SingleNft = ({data}) => {
    const {title, url, description, type, id, price, club} = data
    return ( 
        <div className="mt-12 py-8 px-8 w-full">
            <div className="grid grid-cols-5 gap-3">
                <div className="col-span-2"> 
                    <Image src={url} height={500} width={500} objectFit="cover" className="" />
                </div>

                <div className="text-white col-span-3 ml-4 px-8">
                    <h1 className="text-7xl text-center mb-8  font-custom tracking-widest">{title}</h1>
                    <ul>
                        <li className="text-xl my-8 font-semibold">{description}</li>
                        <li className="text-xl my-8 font-semibold text-wizard">{club}</li>
                        <li className="text-xl my-8 font-semibold">{price} Near</li>
                    </ul>
                </div>

            </div>
            
            
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