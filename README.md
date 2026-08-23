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

In the Google Sheet, go to **Extensions -> Apps Script** and paste this code:

```js
const SHEET_NAME = 'Sheet1'

function doPost(event) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
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

### Add The Vercel Environment Variable

In Vercel, open the waitlist project:

1. Go to **Settings -> Environment Variables**.
2. Add `GOOGLE_SHEETS_WEBHOOK_URL`.
3. Paste the Apps Script Web app URL.
4. Apply it to **Production**.
5. Redeploy the latest deployment.

After redeploying, new waitlist signups will append to the Google Sheet.
