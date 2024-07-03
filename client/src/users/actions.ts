import {instance} from "../utils/axios.ts";

export function getAllUsers() {
    return instance.get("/users")
}

export function addUser(user) {
    return instance.post("/users", user)
}