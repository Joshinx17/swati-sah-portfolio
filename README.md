# Prof. Swati Sah — Portfolio Website

## 📁 Folder Structure

```
swati-portfolio/
├── index.html          ← Main entry point (open this in browser)
├── css/
│   └── style.css       ← All styles & design tokens
├── js/
│   └── app.js          ← All page logic + SITE_DATA (edit here)
└── assets/             ← Place all images & downloadable files here
    ├── photo.jpg       ← Prof. Swati Sah's photo (circular in hero)
    ├── resume.pdf      ← CV/Resume (linked in About page)
    ├── book1.jpg       ← Book covers (optional)
    ├── book2.jpg
    └── ...
```

---

## 🖼️ Adding the Photo

1. Copy the photo into the `assets/` folder.
2. Name it `photo.jpg` (or update the path in `js/app.js` → `professor.photo`).

---

## ✏️ How to Edit Content

Open `js/app.js`. At the very top is the `SITE_DATA` object.
Every section is clearly labelled with comments like:

```
// ── ADD/EDIT COURSES HERE ──
// ── ADD MORE UNIVERSITIES BELOW ──
// ── ADD/EDIT BOOKS HERE ──
```

### Add a new University + Courses

```js
// In SITE_DATA.universities array, add a new object:
{
  key: "amity",                         // unique URL-safe identifier
  name: "Amity University",
  location: "Noida, UP, India",
  icon: "🏫",
  courses: [
    {
      key: "cn",                        // unique URL-safe identifier
      code: "CSE 201",                  // optional course code
      title: "Computer Networks",
      description: "Covers OSI model, TCP/IP, routing protocols...",
      topics: [
        "OSI & TCP/IP Models",
        "Data Link Layer",
        // ... add more topics
      ],
      syllabusUrl: "assets/cn-syllabus.pdf",  // or external URL
      notesUrl: "#",
      assignmentsUrl: "#",
    },
  ],
},
```

### Add a new Course to an existing University

Find the university block and add to its `courses` array:
```js
{
  key: "os",
  code: "CSE 301",
  title: "Operating Systems",
  description: "...",
  topics: [ "Introduction", "Process Management", ... ],
  syllabusUrl: "#",
  notesUrl: "#",
  assignmentsUrl: "#",
},
```

### Add a Syllabus/Notes/Assignment link

Update the `syllabusUrl`, `notesUrl`, or `assignmentsUrl` fields in the course object.
These can be:
- Local file: `"assets/cn-syllabus.pdf"`
- External URL: `"https://drive.google.com/file/..."`

### Add a YouTube Video

In `SITE_DATA.lectures`:
```js
{ title: "My New Lecture", playlist: "Playlist Name", youtubeUrl: "https://youtu.be/...", thumbnailUrl: "" },
```

### Add a Paper or Article

In `SITE_DATA.papers` or `SITE_DATA.articles`:
```js
{ title: "Paper Title", authors: "Swati Sah, et al.", venue: "IEEE Conference 2025", tags: ["AI", "Security"], url: "https://doi.org/..." },
```

### Update Contact/Social Links

Edit at the top of `SITE_DATA.professor`:
```js
email: "swati.sah@sharda.ac.in",
linkedin: "https://linkedin.com/in/...",
googleScholar: "https://scholar.google.com/...",
youtubeChannel: "https://youtube.com/@...",
```

---

## 📧 Setting Up the Contact Form (EmailJS)

The contact form is configured to send emails securely in the background using [EmailJS](https://www.emailjs.com/). To connect it to your own email address:

### 1. Create your EmailJS Account
1. Sign up for a free account at [EmailJS.com](https://www.emailjs.com/).
2. On the left sidebar, click **Email Services**, then **Add New Service**.
3. Select **Gmail** (or your preferred provider), connect your account, and click **Create Service**.
4. You will get a **Service ID** (e.g., `service_abc123`). Save this.

### 2. Create the Email Template
1. Click **Email Templates** on the left sidebar and click **Create New Template**.
2. On the right-side settings panel, set the **Reply To** field to exactly `{{reply_to}}` (this allows you to easily reply to senders).
3. Switch to the `<>` Source Code mode in the editor.
4. Delete everything and paste this premium template to match the portfolio's design:

```html
<div style="font-family: 'Georgia', serif; font-size: 15px; color: #3a2210; background-color: #fdfcf9; padding: 30px; line-height: 1.6;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #eaddcf; border-radius: 8px; padding: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    <div style="text-align: center; border-bottom: 2px solid #cdab84; padding-bottom: 20px; margin-bottom: 30px;">
      <h2 style="margin: 0; color: #4a2e14; font-size: 22px; font-weight: normal; letter-spacing: 1px;">New Portfolio Message</h2>
      <p style="margin: 5px 0 0; color: #8a6a50; font-family: sans-serif; font-size: 13px;">You have received a new inquiry.</p>
    </div>
    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-family: sans-serif; font-size: 14px;">
      <tbody>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px dashed #eaddcf; width: 100px; color: #8a6a50; font-weight: bold;">From:</td>
          <td style="padding: 10px 0; border-bottom: 1px dashed #eaddcf; color: #2a1a0a;">{{from_name}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px dashed #eaddcf; color: #8a6a50; font-weight: bold;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px dashed #eaddcf; color: #cdab84; font-weight: bold;"><a href="mailto:{{reply_to}}" style="color: #cdab84; text-decoration: none;">{{reply_to}}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #8a6a50; font-weight: bold;">Subject:</td>
          <td style="padding: 10px 0; color: #2a1a0a;">{{subject}}</td>
        </tr>
      </tbody>
    </table>
    <div style="background-color: #fefdfb; border: 1px solid #f2e8de; border-radius: 4px; padding: 25px;">
      <p style="margin: 0; white-space: pre-wrap; font-size: 15px; color: #4a2e14;">{{message}}</p>
    </div>
  </div>
</div>
```
5. Click **Save** in the top right.
6. You will get a **Template ID** (e.g., `template_xyz789`). Save this.

### 3. Get your Public Key
1. Go to **Account** (left sidebar).
2. Under the API Keys tab, copy your **Public Key** (e.g., `abcd1234efgh5678`).

### 4. Paste IDs into the Code
1. Open `index.html`. Scroll to the bottom and replace `YOUR_PUBLIC_KEY` with your actual Public Key:
   ```js
   emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });
   ```
2. Open `js/app.js`. Scroll to the bottom and replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`:
   ```js
   const SERVICE_ID = "YOUR_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   ```

---

## 🚀 Deployment

This is a **static website** — no server required.

**Option 1: Local**
Just double-click `index.html` or open in browser.
> Note: The photo may not load due to browser CORS restrictions when opened directly.
> Use a local server for best results:
> ```bash
> cd swati-portfolio
> python3 -m http.server 8080
> # Then open http://localhost:8080
> ```

**Option 2: GitHub Pages**
1. Push this folder to a GitHub repository
2. Go to Settings → Pages → Deploy from main branch
3. Your site will be live at `https://username.github.io/repo-name`

**Option 3: Netlify / Vercel**
Drag and drop the `swati-portfolio/` folder into Netlify or Vercel — instant deployment.

---

## 🎨 Design Customization

Open `css/style.css`. At the top in `:root {}` you'll find all color tokens:
```css
--teal-deep:   #1a4a4a;   /* Main dark color */
--gold:        #c4973a;   /* Accent color */
--ivory:       #f8f4ee;   /* Background */
```
Change these to instantly retheme the entire site.

---

## 📄 Pages Available

| Page | URL Hash |
|------|----------|
| Home | `#home` |
| About | `#about` |
| Recognitions | `#recognitions` |
| Qualifications | `#qualifications` |
| Workshops | `#workshops` |
| Lectures & Videos | `#lectures` |
| Books | `#books` |
| Conference Papers | `#papers` |
| Articles & Journals | `#articles` |
| Contact | `#contact` |
| Course Detail | `#course?uni=sharda&course=pps` |
