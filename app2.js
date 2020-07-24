const yargs = require('yargs');

const fs = require('fs');
const action = process.argv[2];
const chalk = require('chalk');
/*yargs
    .command({
        command: 'add',
        describe: 'Add user in file',
        builder: {
            name: {
                describe: "User's name",
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log("Add user in file");
            const user = argv.name;
            fs.appendFile('users.txt', user + "\n", (err) => {
                if(err) throw err;
                console.log('User added');
            })
        }
    })
    .command({
        command: 'list',
        describe: 'List all users',
        handler: () => {
            console.log("List all users");
            fs.readFile('users.txt', 'utf8', (err, data) => {
                if(err) throw err;
                console.log(data);
            });
        }
    })
    .argv

    fs.readFile('messages.json',(err, data) => {
        if(err) throw err;
        // console.log(data);
        // const dataString = data.toString();
        // console.log(dataString);
        // const dataJson = JSON.parse(dataString);
        // console.log(dataJson);
        let messages = JSON.parse(data.toString());
        console.log(messages);
    })
    const user = {
        name: "JB Lavisse",
        age: 22,
        job: "Glandeur pro"
    }
    fs.writeFile('user.json',JSON.stringify(user),(err) => {
        if(err) throw err;
        console.log(`Utilisateur ${user.name} ajouté`);
    })

    function loadDatas(path) {
        let data = fs.readFileSync(path);
        return JSON.parse(data.toString());
    }
    function loadDatas(path) {
        let data = fs.readFileSync(path);
        return JSON.parse(data.toString());
    }*/
    yargs
        .command({
            command: 'add',
            describe: 'Add user in file',
            builder: {
                name: {
                    describe: "User's name",
                    demandOption: true,
                    type: "string"
                }
            },
            handler: (argv) => {
                console.log("Add user in file");
                let users = loadDatas('users.json');
                users.push(argv.name);
                fs.writeFile('users.json',JSON.stringify(users), (err) => {
                    if(err) throw err;
                    console.log("Utilisateur ajouté");
                })
            }
        })
        .command({
            command: 'list',
            describe: 'List all users',
            handler: () => {
                console.log("List all users");
                let users = loadDatas('users.json');
                console.log(users);
            }
        })
        .argv