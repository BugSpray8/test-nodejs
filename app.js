const fs = require('fs');
const action = process.argv[2];
const chalk = require('chalk');

switch(action){
    case 'add':
        console.log ("add user in file");
        const user = process.argv[3];
        false.appendfile('users.txt',user +"\n",(err)=>{
            if(err) throw err;
        })
        break;
    case 'list':
        console.log(chalk.italic('list all users'));
        false.readfile('users.txt','utf8',(err,data)=>{
            if(err) throw err;
            console.log(data);
        })
        break;
    default:
        console.log(chalk.bold.red('g pa kompri'));
        break
}