const Request = require("request-promise");
const APP_ID = "8ODyPeZUjceXCI0L42Qi";
const APP_CODE = "9fd3O2jpeuHiFnHzC-QcJA";

function getAddressInformation(latitude, longitude) {
        let address = {};
 return Request({
                 uri: "https://reverse.geocoder.api.here.com/6.2/reversegeocode$
                 qs: {
                                 "app_id": APP_ID,
                                 "app_code": APP_CODE,
                                 "mode": "retrieveAddress",
                                 "prox": latitude + "," + longitude
                 },
                 json: true
 }).then(result => {
                 if (result.Response.View.length > 0 && result.Response.View[0]$
                                 address = result.Response.View[0].Result[0].Lo$
                 }
                 return address;
 });
}

module.exports = {
        getAddressInformation
}

