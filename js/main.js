// ---------------- QUOKKA --------------------------------

({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": "/index.html"
    },
    "env": {
        "params": {
          "runner": "--experimental-fetch"
        }
    }
})

// ---------------- QUOKKA --------------------------------




const LOCATIONS = fetch('../locations.json')
                    .then(res => res.json())
                    .then(data => {

                        let data2 = Object.values(data)
                        console.log(typeof data2);
                        console.log(data2.map(({lat, lng, country, city}) => {

                            return ({lat, lng, country, city})
                        }))
                    })
                    .catch(error => console.error(error));




