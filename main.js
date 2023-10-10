const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let parsedData = JSON.parse(data);

    for (let i = 0; i < parsedData.length; i++) {
        if (parsedData[i].value == 0) {
            value = parsedData[i].value;
        }
    }

    const content = `Інші резервні активи:${value}`;

    fs.writeFile('./output.txt', content, err => {
        if (err) {
            console.error(err);
        }
    });
});