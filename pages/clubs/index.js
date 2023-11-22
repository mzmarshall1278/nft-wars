import Link from "next/link";
import Hero from "../../components/Hero";

const AllClubs = ({ data }) => {
    const clubs = data.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }

        if (a.title > b.title) {
            return 1
        }

        else return 0
    })
    return (
        <div>
            <Hero
                cover='images/clubs.jpg'
                title='All Clubs'
                subtitle='Its all here'
            />
            <div className="grid grid-cols-2 gap-5 my-8 w-9/12 mx-auto">
                {clubs.map(item => {
                    return (
                        <Link href={`/clubs/${item.id}`} passHref key={item.id}>
                            <div key={item.id}
                                className=" bg-cover h-72 rounded-lg bg-center relative cursor-pointer"
                                style={{ backgroundImage: `url(${item.url})` }}
                            >
                                <div className={`rounded-lg w-full h-full ${item.theme} hover:bg-[transparent] duration-300`}>
                                    <div className="absolute bottom-2 w-full text-center mb-2 text-white transform hover:scale-110 duration-300">
                                        <div className="text-2xl uppercase">{item.title}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}

            </div>

        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/clubs');
    const data = await res.json()

    return {
        props: { data }
    }
}

export default AllClubs;