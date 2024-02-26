# weathermen
Weathermen is an innovative extension that informs you on the weather. 

# Features

* set a static location and recieve live updates on current weather
* updates contain a short description of today's weather condition 

# Installation 

1. Clone this repository to a local directory
2. Run npm install
  * If issues are encountered on Windows, make sure node.js is installed. Use [this](https://www.youtube.com/watch?v=IkppqvoxoSI) link to guide installation.
  * If issues still arise, ensure that you're in the weatherman's project directory, for example: C:\Users\ahmed\Documents\ossd-s24\weathermen
  * Reason for the above being the package.json file must be available for ```npm install``` to work
4. Edit the existing config.js file in the src folder, to specify your current latitude and longitude:
```
const lon = 'your longitude'
const lat = 'your latitude'
const api_key = "your api key"

export {lon, lat, api_key}
```
3. Run ```npm run build```
5. Open firefox, and go to the address "about:debugging" 
6. Click this firefox
7. Then click load tempoary add-on, and click on any file within the newly created dist folder

# Contributing

If want to contribute, please check out [CONTRIBUTING](CONTRIBUTING.MD)

# Code of Conduct

Please check out our [CODE OF CONDUCT](CODE_OF_CONDUCT.MD)


# License

[LICENSE](LICENSE)
