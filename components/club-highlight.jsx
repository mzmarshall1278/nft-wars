const ClubHighlight = () => {
    return ( 
        <div className="w-5/6 mx-auto my-12">
            
        <div className="grid grid-cols-3 gap-5">
            <div
                className=" bg-cover h-72 rounded-lg bg-center relative"
                style={{backgroundImage: "url('images/wizard.jpg')"}}
                >
                <div className="w-full h-full bg-[rgba(28,77,26,0.7)] hover:bg-[transparent] duration-300   ">
                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                        <div className="text-2xl uppercase">The Wizards Club</div>
                    </div>
                </div>
            </div>

            <div
                className=" bg-cover h-72 rounded-lg bg-center relative"
                style={{backgroundImage: "url('images/medusa.jpg')"}}
                >
                <div className="w-full h-full bg-[rgba(22,22,22,0.7)] hover:bg-[transparent] duration-300   ">
                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                        <div className="text-2xl uppercase">The Grecian Club</div>
                    </div>
                </div>
            </div>

            <div
                className=" bg-cover h-72 rounded-lg bg-center relative"
                style={{backgroundImage: "url('images/vampire1.jpg')"}}
                >
                <div className="w-full h-full bg-[rgba(153,51,51,0.7)] hover:bg-[transparent] duration-300   ">
                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                        <div className="text-2xl uppercase">The Vampires Club</div>
                    </div>
                </div>
            </div>

            <div
                className=" bg-cover h-72 rounded-lg bg-top relative"
                style={{backgroundImage: "url('images/pirate2.jpg')"}}
                >
                <div className="w-full h-full bg-[rgba(13,18,38,0.78)] hover:bg-[transparent] duration-300   ">
                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                        <div className="text-2xl uppercase">The Pirates Club</div>
                    </div>
                </div>
            </div>

            <div
                className=" bg-cover h-72 rounded-lg bg-center relative"
                style={{backgroundImage: "url('images/elf2.png')"}}
                >
                <div className="w-full h-full bg-[rgba(253,255,255,0.7)] hover:bg-[transparent] duration-300   ">
                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                        <div className="text-2xl uppercase">The Elves Club</div>
                    </div>
                </div>
            </div>

            <div
                className=" bg-cover h-72 rounded-lg bg-center relative"
                style={{backgroundImage: "url('images/treasure.jpg')"}}
                >
                <div className="w-full h-full bg-[rgba(255,243,81,0.7)] hover:bg-[transparent] duration-300   ">
                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                        <div className="text-2xl uppercase">And More...</div>
                    </div>
                </div>
            </div>
        </div>

        </div>
     );
}
 
export default ClubHighlight;