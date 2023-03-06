var https = require('follow-redirects').https;
var fs = require('fs');

const sendWhatsappNotification = () => {
    var options = {
        'method': 'POST',
        'hostname': 'graph.facebook.com',
        'path': '/v15.0/100218946280474/messages',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer EABLiy3Ih8K4BAPqslZBZB9qoCUWsJI2xRMoUZCr83JnQ07LmxaBP4ASyRIUCMRkZCXu3T1IP7z8nJ39UPHWj1sT1o0qhspZAmcIcXd7HXsrlrBvyo2dTZCTfZChZAspsZBrtFns3gVLoWPYsve2dZCrG90NmROlflTOEFr3Tq7yNeQkNqBO1DQ8O3Pwkd2E000HTZBimfkyoL46SZBaPSyVRADa91immNAKRudgZD'
        },
        'maxRedirects': 20
      };
      
      var req = https.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          console.log(body.toString());
        });
      
        res.on("error", function (error) {
          console.error(error);
        });
      });
      
      var postData = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": "+918971171155",
        "type": "template",
        "template": {
          "name": "hello_world",
          "language": {
            "code": "en_US"
          }
        }
      });
      
      req.write(postData);
      
      req.end();
}

sendWhatsappNotification()