
/**
 * Module dependencies.
 */

var net = require('net')

/**
 * Keep track of connections.
 */

var count = 0
    , users = {}

/**
 * Create server.
 */

var server = net.createServer(function (conn) {
    conn.write(
        ' > welcome to \033[92mnode-chat\033[39m!'
        + ' > ' + count + ' other people are connected at this time.'
        + ' > please write your name and press enter: '
    );
    count++;

    conn.setEncoding('utf8');

    // the nickname for the current connection
    var nickname;
    var chunk='';
    conn.on('data', function (data) {
        // we remove the "enter" character
        if(!(data=='\r\n'||data=='\r'||data=='\n')){
            chunk += data;
        }
        else
        {
            if (!nickname) {
                if (users[chunk]) {
                    conn.write('\033[93m > nickname already in use. try again:\033[39m ');
                    return; //return哪里去了呢
                }
                else
                {
                    nickname = chunk;
                    users[nickname] = conn;
                    for (var i in users) {
                        users[i].write(nickname + ' joined the room');
                    }
                }
            }
            else
            {
                // otherwise we consider it a chat message
                for (var i in users) {
                    if (i != nickname) {
                        users[i].write(nickname + ': '+ chunk );
                    }
                }
            }
        }
        // the first piece of data we expect is the nickname

    });

    conn.on('close', function () {
        count--;
    });
});

/**
 * Listen.
 */

server.listen(3000, function () {
    console.log('\033[96m   server listening on *:3000\033[39m');
});
