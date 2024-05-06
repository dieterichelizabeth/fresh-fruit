const { PDFDocument } = require("pdf-lib");

const { readFile, writeFile } = require("fs/promises");

async function getFieldNames(input) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    // Read the PDF to get the field names
    const formFields = pdfDoc.getForm().getFields();
    const fieldNames = formFields.map((f) => f.getName());
    console.log(fieldNames);
  } catch (err) {
    console.log(err);
  }
}

async function createPDF(input, output) {
  try {
    // Get the PDF and Form
    const pdfDoc = await PDFDocument.load(await readFile(input));
    const form = pdfDoc.getForm();

    // Update the Form Fields
    form.getTextField("Name").setText("Mickey Mouse II");
    form.getTextField("Work Phone").setText("(402)128-1938");
    form.getTextField("Home Phone").setText("(402)128-9192");
    form.getTextField("Email").setText("Mouse_Mickey@gmail.com");

    // Save the Updated PDF
    form.flatten();
    const newPDF = await pdfDoc.save();
    await writeFile(output, newPDF);
  } catch (err) {
    console.log(err);
  }
}

// ** Uncomment to see Field names in the console ** //
// getFieldNames("pdf/test_pdf_editable.pdf");

// ** Uncomment to create a new PDF ** //
// createPDF("pdf/test_pdf_editable.pdf", "output/result.pdf");
