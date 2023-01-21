export const errorComponent = (message) => {

    const divC = document.createElement('div');
    divC.className = "user-info";

    const err = document.createElement('h1');
    err.innerText = message;

    divC.appendChild(err);
    return divC;
}