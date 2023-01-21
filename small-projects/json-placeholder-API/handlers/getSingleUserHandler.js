import { getUserByIdLogic } from "../logic/getUserByIdLogic.js"
import { getAllUsersComponent } from "../components/getAllUsersComponent.js"
import { errorComponent } from "../components/errorComponent.js"

export const getSingleUserHandler = () => {
    const userId = document.getElementById('idToSearch');
    const idToSearch = userId.value;
    const userContainer = document.getElementById('users');
    userContainer.innerHTML = "";
    let message = "";
    console.log(typeof (idToSearch));
    if (idToSearch === "" | idToSearch > 10 | idToSearch < 1) {
        message = "please enter the Id you want to search, and just use numbers in your input with value between 1 and 10";
        const userErr = errorComponent(message);
        userContainer.append(userErr);
    }
    else {
        getUserByIdLogic(idToSearch)
            .then(singleUsers => {
                if (singleUsers) {
                    const UserInfo = getAllUsersComponent(singleUsers);
                    userContainer.append(UserInfo);
                }
            })
            .catch(err => console.error(err));
    }
}