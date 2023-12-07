// Togel Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

//klik diluar hamburger untuk exit
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});


//Get Data jadi tabel
const tbody = document.querySelector('tbody')
// const detail = document.getElementById('detail')
const searchForm = document.getElementById('search')
let usersData = [];

const loadData = async () => {
    try {
        const url = await fetch('https://be-2-bandung-20-production.up.railway.app/list');
        usersData = await url.json();
        // console.log(usersData)
        loadUserData(usersData);
    } catch (err) {
        console.log(err)
    }
}

const loadUserData = (data) => {
    let no = 1;
    const output = data.map((el) => {
        return `
        <tr>
            <td>` + (no++) + `</td>
            <td>${el.name}</td>
            <td>${el.email}</td>
            <td>${el.time}</td>
            <td>${el.date}</td>
        </tr>
        `
    }).join('')
    tbody.innerHTML = output;
}


function showDetail(id) {
    fetch('https://be-2-bandung-20-production.up.railway.app/list' + id)
        .then((res) => res.json())
        .then((data) => {
            detail.innerHTML = ''
            detail.insertAdjacentHTML('beforeend', `
                    <ul>
                        <li>${data.name}</li>
                        <li>${data.people}</li>
                        <li>${data.email}</li>
                        <li>${data.address.city}</li>
                        <li>${data.phone}</li>
                    </ul>
            `)
        })
}

searchForm.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();
    const input = usersData.filter((data) => {
        return (
            data.name.toLowerCase().includes(value)
        )
    })
    loadUserData(input)
})

loadData()
