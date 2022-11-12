import { writable } from "svelte/store";

export const user = writable({
    id: 0,
    username: "",
    verified: false,
    isAdmin: false,
    isBanned: false,
    streak: 0
})

