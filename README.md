# Delegation & Diligence Discussion Tool

A single-page workshop tool that guides faculty through structured Delegation and Diligence questions for planning AI-built teaching tools. Responses are submitted to a Google Sheet in real time.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete application — open directly in any browser |
| `google-apps-script.js` | Google Apps Script backend for collecting responses |

## Quick Start (No Google Sheet)

Just open `index.html` in a browser. Participants can complete the full questionnaire and download their responses as a CSV. Responses are saved in the browser's localStorage so nothing is lost on refresh.

## Setting Up Google Sheets Collection

### 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like "DD Tool Responses".

### 2. Add the Apps Script

1. In the spreadsheet, go to **Extensions > Apps Script**.
2. Delete any existing code in `Code.gs`.
3. Paste the entire contents of `google-apps-script.js`.
4. Click **Save** (Ctrl+S).

### 3. Deploy the Script

1. Click **Deploy > New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** "DD Tool Backend" (optional)
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Authorize the script when prompted (you'll need to click through the "unsafe" warning since it's your own script).
6. Copy the **Web app URL**.

### 4. Configure the HTML File

Open `index.html` in a text editor and find this line near the top of the `<script>` section:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYED_SCRIPT_URL_HERE';
```

Replace `YOUR_DEPLOYED_SCRIPT_URL_HERE` with the URL you copied.

### 5. Host or Distribute

- **Local:** Just share the HTML file directly — participants open it in their browser.
- **Static hosting:** Upload to any web server, GitHub Pages, Netlify, etc.
- **No build step required.**

## How It Works

- Participants enter their name and walk through 7 sections of questions.
- Responses are auto-saved to localStorage as they type.
- On submission, responses are POSTed to the Google Apps Script, which appends a row to the spreadsheet.
- If the POST fails (offline, misconfigured URL), participants can still download their responses as a CSV.

## Column Headers in the Sheet

The script auto-creates headers on first submission:

| Timestamp | Name | Department | Q1–Q16 (see google-apps-script.js for full list) |
|-----------|------|------------|--------------------------------------------------|
