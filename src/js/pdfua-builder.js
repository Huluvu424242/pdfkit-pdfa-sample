

// gemixte manipulation per builder und manuell
doc = PDFKit();

builder = PDFuaBuilder(doc);

// Manipulation per builder
doc=builder
.addHeader("Überschrift",{"level":1,"font":"arial","size":24})
.addHeader("Überschrift",{"level":1,"font":"arial","size":24})
.getDoc(); // optional denn der builder ändert sofort.

// manuelle manipulationen
doc.addHeader("blah")


// Manipulation per builder
doc=builder
    .addHeader("Überschrift",{"level":1,"font":"arial","size":24})
    .addHeader("Überschrift",{"level":1,"font":"arial","size":24})
    .getDoc();

