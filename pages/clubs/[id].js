import Hero from "../../components/Hero";

const SingleClub = ({data}) => {
    const {url, title, subtitle, name} = data;
    return (
        <div>
            <Hero 
                cover={url}
                title={title}
                subtitle={subtitle}
                name={name}/>
                {/* <div
        className=" bg-cover h-96 bg-center relative"
        style={{backgroundImage: `url('/images/magic.jpg')`}}
        >
            {!!name && <h1 className="text-white absolute top-8 text-center w-full text-6xl font-custom">Welcome</h1> }
            <div className="w-full h-full">
                
                <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                    <div className="text-4xl uppercase">{title}</div>
                    <div className="tracking-[1em] pt-4">{subtitle}</div>
                </div>
            </div>
        </div> */}
        </div>
        
      );
}
 
export const getServerSideProps = async ({params}) => {
    const res = await fetch(`http://localhost:3000/clubs/${params.id}`);
    const data = await res.json();

    return {
        props: {data}
    }
}
export default SingleClub;