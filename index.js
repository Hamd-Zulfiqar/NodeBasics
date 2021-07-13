const temp = require('./fileSys');

const main = async () => {
    const data = await temp.read("example.txt");
    console.log(data);
}

main();