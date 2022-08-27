import { writable } from "svelte/store";

export const user = writable({
    id: 0,
    username: "",
    verified: false,
    isAdmin: false,
    isBanned: false,
    streak: 0
})


/**
 * @param {any} username
 * @param {any} password
 */
async function login(username, password) {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    const data = await response.json()
    if (data.success) {
        user.set(data.user)
    }
    return data
}