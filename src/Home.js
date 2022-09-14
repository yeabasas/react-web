import Bloglist from "./BLogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data, isPending,error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {data && <Bloglist blogs={data} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;