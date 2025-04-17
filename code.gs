function doPost(e) {
  var sheet = SpreadsheetApp.openById("1O0rakCDwbAKmnI3ZBTb6Gh79GKcqHsu8QtfVnJNa5zA").getSheetByName("Sheet1");

  var data = JSON.parse(e.postData.contents);
  var serialNo = sheet.getLastRow(); // Serial number = current row - 1 (excluding header)

  sheet.appendRow([
    serialNo,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.brith,   // Change to 'birth' if needed
    data.gender,
    data.password,
    new Date()
  ]);

  formatSheetAsTable();  // Apply table design

  return ContentService
    .createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}

function formatSheetAsTable() {
  var sheet = SpreadsheetApp.openById("1O0rakCDwbAKmnI3ZBTb6Gh79GKcqHsu8QtfVnJNa5zA").getSheetByName("Sheet1");
  var range = sheet.getDataRange();
  var numRows = range.getNumRows();

  // Make header row bold and colored
  sheet.getRange(1, 1, 1, sheet.getLastColumn())
       .setFontWeight("bold")
       .setBackground("#dfe6e9");

  // Add grid-style borders
  range.setBorder(true, true, true, true, true, true);

  // Apply alternating row colors
  var banding = sheet.getRange(1, 1, numRows, sheet.getLastColumn()).applyRowBanding();
  banding.setHeaderRowColor("#dfe6e9");
  banding.setFirstBandColor("#ffffff");
  banding.setSecondBandColor("#f0f0f0");
}