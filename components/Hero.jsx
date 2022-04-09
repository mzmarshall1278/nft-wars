const Hero = () => {
    return (  
        <div
        className=" bg-cover h-96 bg-center relative"
        style={{backgroundImage: "url('images/magic.jpg')"}}
        >
            <div className="w-full h-full">
                
                <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                    <div className="text-4xl uppercase">The Biggest NFT Cluster in the universe</div>
                    <div className="tracking-[1em] pt-4">find your superpower</div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;