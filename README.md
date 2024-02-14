# weathermen
Weathermen is an innovative extension that informs you on the weather. 

# Features

* set a static location and recieve live updates on current weather
* updates contain a short description of today's weather condition 

# Installation 

1. Clone this repository to a local directory
2. Run npm install
3. create an config.js file in src:
```
const lon = 'your longitude'
const lat = 'your latitude'
const api_key = "your api key"

export {lon, lat, api_key}
```
3. Run npm run build
4. Open firefox, and go to the address "about:debugging" 
5. Click this firefox
6. Then click load tempoary add-on, and click on any file within the newly created dist folder

# Contributing

If want to contribute, please check out [CONTRIBUTING](CONTRIBUTING.MD)

# Code of Conduct

Please check out our [CODE OF CONDUCT](CODE_OF_CONDUCT.MD)


# License

[LICENSE](LICENSE)
