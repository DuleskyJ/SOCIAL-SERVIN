import {ReadAllUsers} from "./users/ReadAll.tsx";
import {ModalNewUser} from "./components/modalNewUser.tsx";
import {useState} from "react";

function App() {
    const [open, setOpen] = useState(false)

    return (
        <div className="App h-screen w-screen">
            <header className="border-b-[1px] border-gray-300 flex justify-between items-center p-2">
                <h1 className="m-0 text-2xl font-bold pl-2">User list</h1>
                <button className="px-3 py-2 rounded bg-blue-500 text-white" onClick={() => setOpen(true)}>Create new user</button>
            </header>
            <div className="flex justify-center">
                <ReadAllUsers />
            </div>
            <ModalNewUser open={open} handleClick={() => setOpen(!open)} />
        </div>
    );
}

export default App;
