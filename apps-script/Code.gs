/**
 * Scalbl.io lead collector — Google Apps Script Web App.
 *
 * Setup:
 *  1. Create a Google Sheet (this is where submissions land).
 *  2. In the Sheet: Extensions → Apps Script. Delete any boilerplate, paste this file.
 *  3. Deploy → New deployment → type "Web app".
 *       - Execute as: Me
 *       - Who has access: Anyone
 *  4. Authorize when prompted, then copy the Web app URL (ends in /exec).
 *  5. Put that URL in index.html as LEAD_ENDPOINT.
 *
 * Each landing-page submission appends a row to the "Submissions" tab.
 */

const SHEET_NAME = 'Submissions';
const HEADERS = [
  'Submitted At', 'Status', 'Name', 'Email', 'Phone', 'Industry',
  'Doing $20k+/mo', 'Has capacity', 'Can invest $1.5k+/mo',
  'Variant', 'All answers', 'Page'
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }
    // Ensure the header row matches the current schema.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }
    sheet.appendRow([
      data.submitted_at || new Date().toISOString(),
      data.status || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.industry || '',
      data.revenue_over_20k || '',
      data.has_capacity || '',
      data.can_invest || '',
      data.variant || '',
      data.answers || '',
      data.page || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: lets you open the /exec URL in a browser to confirm it's live.
function doGet() {
  return ContentService
    .createTextOutput('Scalbl lead collector is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
