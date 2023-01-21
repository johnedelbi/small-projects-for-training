export const getAllUsersComponent = (user) => {

    const divC = document.createElement('div');
    divC.className = "user-info";

    const id = document.createElement('h2');
    id.innerHTML = `ID : ${user.id} <br/>`;

    const name = document.createElement('h2');
    name.innerHTML = `Name : ${user.name} <br/>`;

    const username = document.createElement('h2');
    username.innerHTML = `User name : ${user.username} <br/>`;

    const email = document.createElement('h2');
    email.innerHTML = `Email : ${user.email} <br/>`;

    const address = document.createElement('h2');
    address.innerHTML = `Address : ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}<br/>`;

    const geo = document.createElement('h2');
    geo.innerHTML = `Lat : ${user.address.geo.lat} Lng ${user.address.geo.lng} <br/>`;

    const phone = document.createElement('h2');
    phone.innerHTML = `Phone : ${user.phone} <br/>`;

    const website = document.createElement('h2');
    website.innerHTML = `Website : ${user.website} <br/>`;

    const company = document.createElement('h2');
    company.innerHTML = `Company : ${user.company.name} <br/>`;

    divC.append(id, name, username, email, address, geo, phone, website, company)

    return divC
}