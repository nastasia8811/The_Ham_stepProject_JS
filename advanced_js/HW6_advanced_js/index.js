// Асинхронність в JS це коли частина коду відкладається для виконання.
// На приклад код виконається з затримкою в часі (SetTimeOut) або після того як прийде відповідь від сервера (async\await) за це відповідає Event loop.

document.body.insertAdjacentHTML(`beforeend`, `<button class="ip">Знайти по IP</button>`)
const button = document.querySelector('.ip');
button.addEventListener('click', () => {
    getCards(this.country, this.region, this.city, this.regionName)
})

const getApi = async () => {
    const res = await fetch('https://api.ipify.org/?format=json')
    const ip = await res.json()
    return ip
}

const getCards = async () => {
    let ipObject = await getApi();
    const response = await fetch(`http://ip-api.com/json/${ipObject.ip}`)
        .then((response) => response.json())
        .then(({status, country, region, city, regionName}) => {
            if (status === "success") {
                new Address(country, region, city, regionName).createElements();
            } else throw new Error('Unable to load ...')
        })
}


class Address {
    constructor(country, region, city, regionName) {
        this.country = country;
        this.region = region;
        this.city = city;
        this.regionName = regionName;
    }

    createElements() {
        const ipAd = document.createElement('p');
        document.body.append(ipAd)
        ipAd.insertAdjacentHTML(`afterend`,
            `<ul class="ul_style">
                    <li class="address_style">${this.country}</li>
                    <li class="address_style">${this.region}</li>
                    <li class="address_style">${this.city}</li>
                    <li class="address_style">${this.regionName}</li>
                   </ul>`)
    }
}