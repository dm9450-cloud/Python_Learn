const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const { Document, Packer, Paragraph } = require('docx');

// Function to append text to an existing DOCX document
const appendTextToDocx = async (filePath, data) => {
  let doc;
  let text ="";

  for(let key in data) {
     text = text+ data[key]+" ";
  }

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
              new Paragraph(text),
            ],
          },
        ],
      });
    } else {
      console.error('The file is not a valid DOCX file.');
      return;
    }

  } else {
    console.log(`File does not exist. Creating new file: ${filePath}.`);

    // Create a new document and add text
    doc = new Document({
      sections: [
        {
          children: [
            new Paragraph(text),
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

// File path and data to be written/appended
const filePath = path.join(__dirname, 'example.docx');
const data = {
    name:"Dipanshu123",
    roll:31
};

// Call the function
appendTextToDocx(filePath, data).catch((err) => console.error(err));
