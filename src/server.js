const http = require('http');

const app = require('./app');
const map = require('./map');
const gps = require('./devices').gps;
const raspberry = require('./devices').raspberry;

const server = http.createServer(app);
const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
        socket.emit('message','Vous êtes bien connecté');

         gps.on('data', async (data) => {
                if (data.type == 'GGA') {
                   if(data.quality !=null){
                        try {
                                let address = await map.getAddressInformation(data.lat, data.lon);
                                console.log(`${address.Label} [${data.lat}, ${data.lon}]`);
                                socket.on('petit_nouveau', (data) => {
                                        socket.data = data ;
                                });
                        } catch(e) {
                                console.log(e);
                        }
                   }
                else{
                        console.log("no gps fix availabe");
		}
        }
});

        raspberry.parser.on('data', (data) => {
                try {
                        gps.update(data);
                } catch (e) {
                        throw e;
                }
        });

});

