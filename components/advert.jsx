
const Advert = () => {

    return ( 
        <div className="grid grid-cols-4 gap-3 w-3/5 mx-auto">
            <div className=" bg-cover h-72 bg-center relative rounded-t-lg transform -skew-y-6 -skew-x-6 hover:skew-y-6 hover:skew-x-6 duration-300"
                style={{backgroundImage: `url('/images/elixir.jpg')`}} >
            </div>
            <div className=" bg-cover h-72 bg-center relative rounded-t-lg transform skew-y-6 -skew-x-6"
                style={{backgroundImage: `url('/images/elixir2.jpg')`}} >
            </div>
            <div className=" bg-cover h-72 bg-center relative rounded-t-lg transform -skew-y-6 -skew-x-6"
                style={{backgroundImage: `url('/images/elixir3.jpg')`}} >
            </div>
            <div className=" bg-cover h-72 bg-center relative rounded-t-lg transform skew-y-6 -skew-x-6"
                style={{backgroundImage: `url('/images/elixir4.jpg')`}} >
            </div>
            
        </div>
     );
}
 
export default Advert;