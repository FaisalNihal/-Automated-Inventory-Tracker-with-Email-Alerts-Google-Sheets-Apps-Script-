function sendCriticalStockAlerts() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("inventory_100_items");
  var data = sheet.getDataRange().getValues();

  var emailBody = "🚨 CRITICAL STOCK ALERT 🚨\n\n";
  var tableHeader = formatRow("Product Name", "Stock", "Reorder Qty") + "\n";
  tableHeader += "-----------------------------------------------------\n";

  var tableRows = "";
  var hasCritical = false;

  for (var i = 1; i < data.length; i++) {
    var itemName = data[i][1];   // Column B
    var stock = data[i][6];      // Column G
    var reorder = data[i][8];    // Column I
    var status = data[i][9];     // Column J

    if (status === "CRITICAL") {
      tableRows += formatRow(itemName, stock, reorder) + "\n";
      hasCritical = true;
    }
  }

  if (hasCritical) {
    emailBody += tableHeader + tableRows;

    MailApp.sendEmail({
      to: "faisalnihal6666@gmail.com",
      subject: "❗ Critical Stock Alert – Inventory Tracker",
      body: emailBody
    });
  }
}

// Helper function to format rows with spacing
function formatRow(name, stock, reorder) {
  return (
    name.toString().padEnd(25) +  // 20 characters for name
    stock.toString().padEnd(15) + // 10 characters for stock
    reorder.toString().padEnd(20) // 12 characters for reorder
  );
}
