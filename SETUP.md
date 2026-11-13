# Workout Tracker — iPad setup

This is a browser-based app (PWA), not an App Store app. It requires HTTPS hosting; opening index.html directly from Files will not work. It uses Microsoft Graph to download and replace the existing personal OneDrive workbook. It does not require reuploading the workbook manually for each session.

## 1. Host the app
Upload all files in this folder together to a static HTTPS host, such as Netlify or GitHub Pages. Keep the URL (including index.html if your host needs it). Libraries MSAL and ExcelJS are loaded from public CDNs, so an internet connection is required.

## 2. Register your own Microsoft app
In the Microsoft Entra admin center > App registrations > New registration, choose **Accounts in any organizational directory and personal Microsoft accounts**, or **Personal Microsoft accounts only** if available. Add a **Single-page application (SPA)** platform and enter the *exact hosted URL* ending in index.html (or your host's canonical redirect URL). Do not configure a client secret. Copy the Application (client) ID. The app requests delegated `Files.ReadWrite` and `User.Read` and uses Microsoft sign-in; consent may be requested.

## 3. Connect the existing master
Open the hosted app on the iPad. Paste the application ID, tap Sign in, tap Find workbook, and choose the correct Workout_Master.xlsx. Tap Use selected workbook. Do not select an outdated copy of the workbook. The file search matches names containing 'Workout'.

## 4. Add to Home Screen
In Safari, open the hosted app and use Share > Add to Home Screen. Name it Workout Tracker.

## 5. Use
Choose A or B, enter the date, then record weights, reps/seconds (e.g. `12x12x10`), and reps left in reserve for all nine exercises. Enter #10 workout time in minutes. Tap Save to OneDrive. The app checks the workbook's ETag before saving, and uses `If-Match` to avoid overwriting concurrent edits.

## Important limitations
- The app writes to Sheet1 using the original workbook layout. The starting rows for exercises are 7, 23, 40, 58, 76, 94, 112, 130, 148, and workout time at 166. Workout A uses B/D/E/F; Workout B uses H/J/K/L. It searches for the first blank date in each block. Each block currently has a fixed 16-row capacity. If a block fills up, the app stops rather than overwriting the next exercise.
- Workout time is stored in the **reps/duration** column (E for A, K for B) of the Workout Time block, with the date in B/H.
- The original workbook has only been inspected, not modified. Delete the two extra tabs in the actual OneDrive master as you planned.
- Exercise visuals are original schematic illustrations, not medical/anatomical diagrams or photographs. They are accompanied by exercise-specific technique cues and muscle descriptions.
- ExcelJS reserializes the workbook on save. Advanced Excel features unsupported by ExcelJS may not survive. **Back up the OneDrive workbook and test the first save on a copy before using the live master.** Verify formatting and historical data after the test.
- Microsoft may change permissions or registration requirements. The first connection and live OneDrive write cannot be tested without your Microsoft account and registered app.
- Session selection is stored only for the current browser session. Microsoft access tokens are kept in session storage, not written into the workbook.
