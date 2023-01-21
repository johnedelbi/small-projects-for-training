import { getAllUsersHandler } from "../handlers/getAllUsersHandler.js"


export const getAllUsersListener = () => {
    document.getElementById('getAllUsers').addEventListener('click', (e) => {
        e.preventDefault();
        getAllUsersHandler();
    });
}