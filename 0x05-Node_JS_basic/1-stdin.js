process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Get user input and trim whitespace
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit(); // Exit the program after displaying the name
});

process.on('exit', () => {
    console.log("This important software is now closing");
});

