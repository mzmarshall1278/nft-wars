import Advert from "../../components/advert";
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
            <div className="text-center text-white text-3xl my-4">Welcome to the Magic Realm</div>
                
            <div className="flex w-5/6 mx-auto font-sans my-8">

                <div className="w-1/2 py-8 text-white text-right pr-24 border-r border-b border-t rounded-lg mx-2 linear-right">
                    <div className="py-2 my-1">Win a free elixir</div>
                    <div className="py-2 my-1">3 free power Channeling </div>
                    <div className="py-2 my-1">Free team reviving</div>
                </div>
                <div className="w-1/2 py-8 text-white text-left pl-24 border-l border-t border-b  rounded-lg mx-2 linear-left">
                    <div className="py-2 my-1">Have access to ancestral Powers</div>
                    <div className="py-2 my-1">In battles You'll Never stand alone</div>
                    <div className="py-2 my-1">Fast health healing</div>
                </div>
            </div>
            <Advert/>
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