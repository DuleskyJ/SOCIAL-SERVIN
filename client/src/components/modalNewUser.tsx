import {useState} from "react";
import {addUser} from "../users/actions.ts";

export function ModalNewUser({open, handleClick}) {
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");

    const handleSubmit = () => {
        alert("Loading")
        if(username.length < 4) return alert("Username cannot be less than 4 characters. Sorry!")
        addUser({email, username})
            .then((res) => {
                alert("User created successfully!")
            })
            .catch((err) => {
                alert("Error creating user. Please try again.\n" + err)
            })
    }

    return (
        <div id="authentication-modal" tabIndex="-1"
             className={(open ? "" : "hidden") + " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">Create new user</h3>
                        <button type="button"
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600"
                                data-modal-hide="authentication-modal"
                                onClick={() => handleClick()}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <input type="email" name="email" id="email"
                                       className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Enter email" required
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" name="name" id="name" placeholder="Enter name"
                                       className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       required
                                       value={username}
                                       onChange={(e) => setUserName(e.target.value)}/>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={() => handleSubmit()}>Create new user
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}