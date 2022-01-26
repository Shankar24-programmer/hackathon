const url="https://api.openbrewerydb.org/breweries";



async function getBrewer(){
    let brewer;
    try {
        const data = await fetch(
            "https://api.openbrewerydb.org/breweries",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        brewer = await data.json();
    } catch(error){
        console.log(error);
    }
    return brewer;
}
// getBrewer();


// async function displayUser(brewery){
//     let brewer = await getBrewer();
//     console.log(brewer);
// }
// displayUser();


async function displayUser(brewery){
    let brewer = await getBrewer();
    const brewerList = document.querySelector(".user-list");
    brewer.forEach((brewery)=> {
        let ms = brewery.name;
        let some = brewery.brewery_type;
        // console.log(ms);
        let a = document.getElementById("1");
        a.append(ms);
        let b = document.getElementById("1.1");
        b.append(some);
        // console.log(sankar);
        // console.log(brewery.name);
        // console.log(brewery.brewery_type);
    // brewerList.innerHTML += `
    // <div class="user-container">
    // `
    });
}
// displayUser();


async function displayUser1(brewery1){
    let brewer = await getBrewer();
    const brewerList = document.querySelector(".user-list");
    brewer.forEach((brewery1)=> {
        let ms = brewery1.address_2;
        let some = brewery1.address_3;
        // console.log(ms);
        let a = document.getElementById("2");
        a.append(ms);
        let b = document.getElementById("2.2");
        b.append(some);
        // console.log(brewery1.address_2);
        // console.log(brewery1.address_3);
    // brewerList.innerHTML += `
    // <div class="user-container">
    // `
    });
}


async function displayUser2(brewery2){
    let brewer = await getBrewer();
    const brewerList = document.querySelector(".user-list");
    brewer.forEach((brewery2)=> {
        let ms = brewery2.website_url;
        // console.log(ms);
        let a = document.getElementById("3");
        a.append(ms);
        // console.log(brewery2.website_url);
    // brewerList.innerHTML += `
    // <div class="user-container">
    // `
    });
}


async function displayUser3(brewery3){
    let brewer = await getBrewer();
    const brewerList = document.querySelector(".user-list");
    brewer.forEach((brewery3)=> {
        let ms = brewery3.phone;
        // console.log(ms);
        let a = document.getElementById("4");
        a.append(ms);
        // console.log(brewery3.phone);
    // brewerList.innerHTML += `
    // <div class="user-container">
    // `
    });
}




// let filteredUrl = url.filter((value)=> value);
// console.log(filteredUrl);

// //PUT method
// function updateData() {
//     let data = {
//         name: "Brewery Construction",
//     };
//     fetch(url + "/10-56-brewing-company-knox", {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//     .then((result)=> result.json())
//     .then((data)=> {
//         console.log(data);
//     })
//     .catch((error)=> {
//         console.log(error);
//     });
// }

// updateData();





