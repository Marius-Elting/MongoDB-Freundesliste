import AddFriend from "../../components/addFriend/AddFriend";
import OverView from "../../components/Overview/Overview";
function Home() {

    return (
        <main>
            <h1>This is Home</h1>
            <OverView />
            <AddFriend></AddFriend>        </main>
    );
}

export default Home;