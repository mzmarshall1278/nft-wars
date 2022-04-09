const Hero = ({cover, title, subtitle}) => {
    return (  
        <div
        className=" bg-cover h-96 bg-center relative"
        style={{backgroundImage: `url(${cover})`}}
        >
            {/* {!!name && <h1 className="text-white absolute top-8 text-center w-full text-6xl font-custom">Welcome</h1> } */}
            <div className="w-full h-full">
                
                <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                    <div className="text-4xl uppercase">The {title}</div>
                    <div className={`tracking-[1em] mt-2 py-4 px-2 rounded-lg font-semibold w-fit mx-auto`}>{subtitle}</div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;