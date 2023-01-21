/**
 * get All users from json placeholder API
 * 
 */

export const getAllUsersLogic = () => {

    const userURL = "https://jsonplaceholder.typicode.com/users";
    const users = fetch(userURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error("Not successful ")
            }
        })
        .catch(err => console.error(err));
    return users
}



