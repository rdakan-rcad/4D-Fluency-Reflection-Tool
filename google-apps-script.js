/**
 * Google Apps Script — Delegation & Diligence Discussion Tool
 *
 * Setup:
 * 1. Create a new Google Sheet.
 * 2. Open Extensions > Apps Script.
 * 3. Paste this entire file into Code.gs (replace any existing code).
 * 4. Click Deploy > New deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL and paste it into index.html as the
 *    GOOGLE_SCRIPT_URL value.
 */

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);

  // Route to correct sheet based on phase
  if (data.phase === 2) {
    handlePhase2(ss, data);
  } else {
    handlePhase1(ss, data);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handlePhase1(ss, data) {
  var sheet = ss.getSheetByName('Phase 1 Responses');
  if (!sheet) {
    sheet = ss.insertSheet('Phase 1 Responses');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Department',
      'All Brainstormed Ideas',
      'Selected Idea',
      'Who Benefits (Selected)',
      'Existing Tool/Gap (Selected)',
      'Success Criteria',
      'Excellent Version',
      'Mediocre Version',
      'Failure',
      'What to Check First',
      'Hardest for AI',
      'Signs Tool Makes Work Worse',
      'Student Data Required',
      'LMS Integration',
      'Technical Complexity',
      'AI Mode',
      'Why This Mode',
      'How It Would Work',
      'Data Needed',
      'Privacy Concerns',
      'Privacy Detail',
      'Who to Consult',
      'How It Works',
      'Limitations',
      'Worst Case',
      'Testing Plan',
      'Tool Concept'
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.name                   || '',
    data.department             || '',
    data.all_ideas              || '',
    data.selected_idea          || '',
    data.selected_who_benefits  || '',
    data.selected_existing_tool || '',
    data.q3                     || '',
    data.d1                     || '',
    data.d2                     || '',
    data.d3                     || '',
    data.d4                     || '',
    data.d5                     || '',
    data.d6                     || '',
    data.q5                     || '',
    data.q6                     || '',
    data.q7                     || '',
    data.q8                     || '',
    data.q8_why                 || '',
    data.q8_how                 || '',
    data.q9                     || '',
    data.q10                    || '',
    data.q10_detail             || '',
    data.q11                    || '',
    data.q12                    || '',
    data.q13                    || '',
    data.q14                    || '',
    data.q15                    || '',
    data.q16                    || ''
  ]);
}

function handlePhase2(ss, data) {
  var sheet = ss.getSheetByName('Phase 2 Responses');
  if (!sheet) {
    sheet = ss.insertSheet('Phase 2 Responses');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Email',
      'Department',
      'What You Built',
      'Closeness to Vision (1-5)',
      'Biggest Gap',
      'Quality Assessment',
      'AI Surprises',
      'Professional Errors',
      'Change Delegation Mode?',
      'Harder Than Expected',
      'Easier Than Expected',
      'New Concerns',
      'Fix or Test First',
      'Who Should Review',
      'Most Important Next Step',
      'Help & Resources Needed',
      'Workshop Recommendation'
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.name       || '',
    data.email      || '',
    data.department || '',
    data.p2q1       || '',
    data.p2q2       || '',
    data.p2q3       || '',
    data.p2q4       || '',
    data.p2q5       || '',
    data.p2q6       || '',
    data.p2q7       || '',
    data.p2q8       || '',
    data.p2q9       || '',
    data.p2q10      || '',
    data.p2q11      || '',
    data.p2q12      || '',
    data.p2q13      || '',
    data.p2q14      || '',
    data.p2q15      || ''
  ]);
}
