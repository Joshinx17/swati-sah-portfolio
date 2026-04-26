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
