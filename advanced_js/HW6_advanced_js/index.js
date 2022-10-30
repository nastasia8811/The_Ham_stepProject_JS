
document.body.insertAdjacentHTML(`beforeend`, `<button class="ip">Знайти по IP</button>`)
const button = document.querySelector('.ip');
button.addEventListener('click', (e) => {
    getApi()
})

const getApi = async () => {
    await fetch('https://api.ipify.org/?format=json')
        .then(res => res.json())
        .then(elem => {

        })
}

const getCards = async () => {
    try {
        let result = await getApi();
        const response = await fetch('https://ip-api.com/ip');
        const {status, continent, country, region, city, district} = await response.json();
        if (status === 'success') {
             new Address(continent, country, region, city, district).createElements();
        } else throw new Error('Unable to load Data...')
    } catch (err) {
        console.warn(err)
    }

}

class Address {
    constructor(continent, country, region, city, district) {
        this.continent = continent;
        this.country = country;
        this.region = region;
        this.city = city;
        this.district = district;
    }

    createElements() {
        const ipAd = document.createElement('p');
        document.body.append(ipAd)
        ipAd.insertAdjacentHTML(`afterend`,
            `<li >
                    <ul>${this.continent}</ul>
                    <ul>${this.country}</ul>
                    <ul>${this.region}</ul>
                    <ul>${this.city}</ul>
                    <ul>${this.district}</ul>
                   </li>`)
        }
}
