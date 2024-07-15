const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph } = require('docx');
const mammoth = require('mammoth');

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
    const filePath = path.join(__dirname, 'example.docx');
    const data = {
        groupNumber,
        groupName,
    };

    try {
        await appendTextToDocx(filePath, data);
        res.send('Data appended to DOCX file successfully.');
    } catch (error) {
        console.error('Error appending data to DOCX file:', error);
        res.status(500).send('Error appending data to DOCX file.');
    }
});

// Function to append text to an existing DOCX document
const appendTextToDocx = async (filePath, data) => {
    let doc;

    // Function to check if the file is a valid DOCX file
    const isValidDocx = async (buffer) => {
        try {
            await mammoth.extractRawText({ buffer });
            return true;
        } catch (error) {
            return false;
        }
    };

    if (fs.existsSync(filePath)) {
        console.log(`File exists. Appending data to ${filePath}.`);

        // Read the existing document
        const buffer = fs.readFileSync(filePath);

        if (await isValidDocx(buffer)) {
            // Extract text from existing DOCX file using mammoth
            const result = await mammoth.extractRawText({ buffer });
            const existingText = result.value;

            // Create a new document with the existing text and the new text
            doc = new Document({
                sections: [
                    {
                        children: [
                            new Paragraph(existingText),
                            new Paragraph(`Group Number: ${data.groupNumber}`),
                            new Paragraph(`Group Name: ${data.groupName}`),
                        ],
                    },
                ],
            });
        } else {
            console.error('The file is not a valid DOCX file.');
            throw new Error('The file is not a valid DOCX file.');
        }

    } else {
        console.log(`File does not exist. Creating new file: ${filePath}.`);

        // Create a new document and add text
        doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph(`Group Number: ${data.groupNumber}`),
                        new Paragraph(`Group Name: ${data.groupName}`),
                    ],
                }
            ],
        });
    }

    // Save the document
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(filePath, buffer);
    console.log('Data written to file.');
};

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
