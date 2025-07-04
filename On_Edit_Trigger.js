function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var editedCol = e.range.getColumn();   // Which column was edited?
  var row = e.range.getRow();            // Which row was edited?

  // Run only if we're on the "Inventory Tracker" sheet and edited column D or E
  if (sheet.getName() === "inventory_100_items" && (editedCol === 5 || editedCol === 6)) {
    sheet.getRange(row, 11).setValue(new Date());  // Set column I (Last Updated) to current time
  }
}
