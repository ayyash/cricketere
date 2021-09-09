// var https = require('https');

module.exports = function (config) {
    return function (req, res, next) {
        // find user location or default
        const defaultCountryCode = "JO";

        let country = req.cookies.country;

        // for ssr, set country on global resources
        global.resources && (global.resources.country = country);

        if (country) {
            next();
            return;
        }

        // no cookie? try fetching
        let ipaddress = req.ip;
        if (req.headers) {
            // first try getting country from cloudflare
            if (req.headers['cf-ipcountry']) {
                setCountryCookie(res, req.headers['cf-ipcountry']);
                next();
                return;
            }
            if (req.headers['x-forwarded-for']) {
                ipaddress = req.headers['x-forwarded-for'].split(":")[0]; // "x-forwarded-for": "92.241.51.159:25287",
            }
        }
        if (!ipaddress) {
            setCountryCookie(res, defaultCountryCode)
            next();
            return;
        }

        // finally fetch from ipgeo
        /************** ipgeo sepcific
        https.get('https://api.ipgeolocation.io/ipgeo?apiKey=' + config.ipkey + '&fields=country_code2&ip=' + ipaddress, (remres) => {

            remres.on('data', function (data) {

                // for a year
                country = JSON.parse(data).country_code2;
                setCountryCookie(res, country)

                // next here?
                next();
            });
        }).on('error', (e) => {
            console.log('Error');
            console.log(e);
            setCountryCookie(res, defaultCountryCode)
            next();
        });
        ********************end ip geo specific ************/
       // non ipgeo: next
       setCountryCookie(res, defaultCountryCode)
       next();


    };
};

function setCountryCookie(res, value) {
    res.cookie('country', value, { expires: new Date(Date.now() + 31622444360), sameSite: 'none', secure: true });

}
