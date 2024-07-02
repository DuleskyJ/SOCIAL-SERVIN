import {useEffect, useState} from "react";
import {getAllUsers} from "./actions.ts";

export function ReadAllUsers() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllUsers()
            .then((res) => {
                setUsers(res.data)
                setLoading(false)
            })
            .catch((err) => {
                alert(err)
                setLoading(false)
            })
    }, []);

    if(loading) return <div>Loading...</div>
    if(!loading && users.length === 0) return <div>No users found</div>

    return (
        <div className="flow-root p-4 border-[1px] border-gray-300">
            <ul role="list" className="divide-y divide-gray-200">
                {
                    users.map((user) =>
                        <li className="py-3 sm:py-4">
                            <div className="flex  items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">{user.username}</p>
                                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}