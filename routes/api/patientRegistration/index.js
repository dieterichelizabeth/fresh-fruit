const router = require("express").Router();
const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");

// The `/api/registration` endpoint
router.post("/", (req, res) => {
  async function createPDF(input, userInput, output) {
    try {
      // Get the PDF and Form
      const pdfDoc = await PDFDocument.load(await readFile(input));
      const form = pdfDoc.getForm();

      // Update the Form Fields
      form.getTextField("Last Name").setText(`${userInput.lastName}`);
      form.getTextField("First Name").setText(`${userInput.firstName}`);
      form.getTextField("Home Phone").setText(`${userInput.phone}`);
      form.getTextField("Email").setText(`${userInput.email}`);
      form
        .getTextField("Street Address")
        .setText(`${userInput.streetAddress} ${userInput.streetAddress2}`);
      form.getTextField("State").setText(`${userInput.state}`);
      // form.getTextField("Country").setText(`${userInput.country}`);
      form.getTextField("Zip").setText(`${userInput.zip}`);
      form.getTextField("Birth date").setText(`${userInput.birthday}`);
      form.getTextField("Insured.Self").setText("X");

      // Save the Updated PDF
      form.flatten();
      const newPDF = await pdfDoc.save();
      await writeFile(output, newPDF);
    } catch (err) {
      console.log(err);
    }
  }

  createPDF(
    "routes/api/patientRegistration/CBT.pdf",
    req.body,
    "output/results.pdf"
  );
});

module.exports = router;
