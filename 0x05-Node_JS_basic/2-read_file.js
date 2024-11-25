const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8').trim(); // Read and trim whitespace

        if (!data) {
            throw new Error('Cannot load the database');
        }

        const lines = data.split('\n'); // Split into lines

        if (lines.length < 2) { // Ensure there's at least one student row
            throw new Error('Cannot load the database');
        }

        const students = lines.slice(1).filter(line => line.trim() !== ''); // Exclude empty lines
        console.log(`Number of students: ${students.length}`);

        const fieldCounts = {};

        students.forEach(line => {
            const [firstname, , , field] = line.split(',');
            if (field) {
                if (!fieldCounts[field]) {
                    fieldCounts[field] = [];
                }
                fieldCounts[field].push(firstname);
            }
        });

        Object.entries(fieldCounts).forEach(([field, names]) => {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

