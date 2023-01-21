import { getAllUsersLogic } from "../logic/getAllUsersLogic.js"
import { getAllUsersComponent } from "../components/getAllUsersComponent.js"


export const getAllUsersHandler = () => {

    const userContainer = document.getElementById('users');
    userContainer.innerHTML = "";

    getAllUsersLogic()
        .then(allUsers => {
            if (allUsers) {
                allUsers.forEach(user => {
                    const UserInfo = getAllUsersComponent(user);
                    userContainer.append(UserInfo);
                });
            }
        })
        .catch(err => console.error(err));
}