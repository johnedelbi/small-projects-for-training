import { errorComponent } from "../components/errorComponent.js"


/**
 * get single users from json placeholder API
 * 
 */

export const getUserByIdLogic = (id) => {

    const userContainer = document.getElementById('users');
    let message = "please enter a number";

    const userURL = `https://jsonplaceholder.typicode.com/users/${id}`;
    console.log(userURL)
    const user = fetch(userURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                const userErr = errorComponent(message);
                userContainer.append(userErr);
            }
        })
        .catch(err => console.error(err));
    return user
}



