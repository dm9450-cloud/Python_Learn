const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});

// Serve static files (if any)
app.use(express.static('public'));

// Handle favicon.png requests
app.get('/favicon.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'favicon.png'));
});

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
    const { groupNumber, groupName } = req.body;

    // File path and data to be written/appended
    const filePath = path.join(__dirname, 'example.xlsx');
    const data = {
        groupNumber,
        groupName,
    };

    try {
        await appendTextToExcel(filePath, data);
        res.send('Data appended to Excel file successfully.');
    } catch (error) {
        console.error('Error appending data to Excel file:', error);
        res.status(500).send('Error appending data to Excel file.');
    }
});

// Function to append text to an existing Excel document
const appendTextToExcel = async (filePath, data) => {
    let workbook;
    let worksheet;

    try {
        if (fs.existsSync(filePath)) {
            console.log(`File exists. Appending data to ${filePath}.`);
            
            // Read the existing workbook
            workbook = xlsx.readFile(filePath);
            
            // Get the first worksheet
            worksheet = workbook.Sheets[workbook.SheetNames[0]];
            
            // Find the last row number
            const range = xlsx.utils.decode_range(worksheet['!ref']);
            const lastRow = range.e.r + 2; // Corrected to move to the next empty row
            console.log(`Last row is: ${lastRow}`);
            
            // Append the new data
            worksheet[`A${lastRow}`] = { t: 's', v: data.groupNumber };
            worksheet[`B${lastRow}`] = { t: 's', v: data.groupName };
            
            // Update the range
            range.e.r += 1;
            worksheet['!ref'] = xlsx.utils.encode_range(range);
        } else {
            console.log(`File does not exist. Creating new file: ${filePath}.`);
    
            // Create a new workbook and add data
            workbook = xlsx.utils.book_new();
            worksheet = xlsx.utils.aoa_to_sheet([
                ['Group Number', 'Group Name'],
                [data.groupNumber, data.groupName],
            ]);
            xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        }
    
        // Write the workbook to file
        xlsx.writeFile(workbook, filePath);
        console.log('Data written to file.');
    } catch (error) {
        console.error('Error in appendTextToExcel function:', error);
        throw error;
    }
};

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
