# Content That Sells Challenge Waitlist

Opt-in landing page for the Content That Sells Challenge waitlist. Visitors submit their name, email, and business/niche, then receive download links for the Content Recognition Scorecard and Personalized Recognition Results Guide.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Google Sheets Waitlist Storage

The waitlist API sends submissions to Google Sheets when this environment variable is configured:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

If the variable is not set, local development submissions are saved to `data/waitlist-submissions.jsonl`.

### Create The Google Sheet

Create a Google Sheet with this header row:

```text
Submitted At | Name | Email | Business / Niche
```

### Add The Apps Script

In the Google Sheet, go to **Extensions -> Apps Script** and paste this code. Make sure `SHEET_NAME` matches the tab name at the bottom of the Google Sheet:

```js
const SHEET_NAME = 'CTSCHALLENGEWAITLIST'

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'Webhook is live' }))
    .setMimeType(ContentService.MimeType.JSON)
}

function doPost(event) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName(SHEET_NAME)

  if (!sheet) {
    throw new Error(`Sheet tab not found: ${SHEET_NAME}`)
  }

  if (!event || !event.postData || !event.postData.contents) {
    throw new Error('No POST data received')
  }

  const data = JSON.parse(event.postData.contents)

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.business || '',
  ])

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
```

If your tab is not named `Sheet1`, update `SHEET_NAME`.

### Deploy The Apps Script

1. Click **Deploy -> New deployment**.
2. Choose **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone**.
5. Click **Deploy**.
6. Copy the Web app URL.

When you edit the Apps Script later, click **Deploy -> Manage deployments**, edit the Web App deployment, choose **New version**, then click **Deploy** again. Saving the script alone does not update the live `/exec` URL.

### Add The Vercel Environment Variable

In Vercel, open the waitlist project:

1. Go to **Settings -> Environment Variables**.
2. Add `GOOGLE_SHEETS_WEBHOOK_URL`.
3. Paste the Apps Script Web app URL.
4. Apply it to **Production**.
5. Redeploy the latest deployment.

After redeploying, new waitlist signups will append to the Google Sheet.
