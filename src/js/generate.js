const fs = require('fs');
const PDFDocument = require('pdfkit');
const {createPdfUaBuilder} = require("./pdfua-builder");

const fontName = 'OpenSans';


const doc = new PDFDocument({ pdfVersion: '1.7', size: 'A4', lang: 'de-DE' });

const pdfuaBuilder = createPdfUaBuilder(doc);

pdfuaBuilder.setColorProfile();
pdfuaBuilder.setMetaData();
pdfuaBuilder.registerFont(fontName, 'OpenSans-Regular.ttf');

pdfuaBuilder.addHeading("Klassenübersicht",{"fontName":fontName});





doc.pipe(fs.createWriteStream('sample.pdf'));
doc.end();




// // gemixte manipulation per builder und manuell
// doc = PDFKit();
//
// builder = PDFuaBuilder(doc);
//
// // Manipulation per builder
// doc=builder
//     .addHeader("Überschrift",{"level":1,"font":"arial","size":24})
//     .addHeader("Überschrift",{"level":1,"font":"arial","size":24})
//     .getDoc(); // optional denn der builder ändert sofort.
//
// // manuelle manipulationen
// doc.addHeader("blah")
//
//
// // Manipulation per builder
// doc=builder
//     .addHeader("Überschrift",{"level":1,"font":"arial","size":24})
//     .addHeader("Überschrift",{"level":1,"font":"arial","size":24})
//     .getDoc();
//
