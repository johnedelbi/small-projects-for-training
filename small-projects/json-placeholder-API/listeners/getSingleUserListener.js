import { getSingleUserHandler } from "../handlers/getSingleUserHandler.js"

export const getSingleUserListener = () => {
    document.getElementById('getUserById').addEventListener('click', (e) => {
        e.preventDefault();
        getSingleUserHandler();
    });
}