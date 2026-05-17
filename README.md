# Siddhesh Salunke — Portfolio

A handcrafted single-page portfolio designed to be hosted on GitHub Pages. The aesthetic is editorial and scientific: a dark theme, serif-led headlines in Fraunces, monospace details in JetBrains Mono, and a phosphor-cyan accent that nods to the laboratory instruments behind the work.

The site is built with vanilla HTML, CSS, and a small amount of JavaScript. There is no build step, no framework, and no dependencies beyond Google Fonts. You can edit any file in any text editor and the changes are immediately visible.

## What is included

The `portfolio/` folder contains five files. `index.html` holds the semantic, accessible markup for the page. `style.css` contains every style rule, organized section by section. `script.js` powers the custom cursor, the mobile navigation, and the scroll-reveal effect. `.nojekyll` tells GitHub Pages to serve the files literally rather than running them through Jekyll. This `README.md` documents everything.

## What is on the page

The site flows through six numbered sections in an editorial style. The hero opens with your name in large italic Fraunces, a status pill showing Somerset, NJ and your role at Regeneron, and a tech-stack marquee. The About section combines a drop-capped biography with a working terminal-style card and a four-up block of impact metrics (twenty-five-plus petabytes processed, two thousand-plus users served, a thirty-five percent cost reduction, and ten-plus years of progression). The Patent feature is dedicated entirely to US 12,254,347 B2, including an animated SVG pipeline diagram with a pulsing data marker and the abstract from the granted filing. The Stack section groups your tools by capability rather than by category. The Experience section is a full timeline from your current role as Tech Lead, HPC Engineering and Operations back through Platform Engineering Lead, Senior Cloud Data Engineer, Cloud DevOps Engineer II, the associate role, the earlier Cloud Solutions Architect work at the Institute for Criminal Justice Training Reform, and the 2014-2016 roles. It closes with an Education and Credentials block covering Pace, PVPPCOE, the USPTO patent, SAFe 6, AWS, NVIDIA, and Red Hat. Selected Work showcases five projects in a card grid, and the Contact section offers three large hover-driven links to LinkedIn, your email, and the patent on Google Patents.

## Before publishing

Open `index.html` and confirm three details. The first is your contact email, which is set to `siddhesh.salunke45@gmail.com` from your profile but should be updated if you prefer to route enquiries through a different address. The second is the location in the hero and footer, currently Somerset, NJ. The third is the brand wordmark in the top-left, currently rendered as `SS / salunke`. If you would prefer something else — `siddhesh.dev`, `salunke.io`, your initials only — search the file for `salunke` and adjust.

Beyond those three, every fact on the page is drawn from your LinkedIn profile and the granted patent. The metrics in the impact block (twenty-five petabytes, two thousand users, thirty-five percent cost reduction) are quoted directly from your own summary. If any of these become outdated, simply edit them in the relevant section.

## Deploying to GitHub Pages

There are three reasonable paths. The first and cleanest is a user site at `https://<your-username>.github.io`. Create a new public repository named exactly `<your-username>.github.io` — for example, `siddheshsalunke.github.io` — and do not initialize it with a README, since this one already exists. From inside the `portfolio` directory in your terminal, run the standard initialization sequence: `git init`, then `git add .`, then `git commit -m "Initial portfolio"`, then `git branch -M main`, then `git remote add origin https://github.com/<your-username>/<your-username>.github.io.git`, and finally `git push -u origin main`. Once the push completes, navigate to the repository on GitHub, open Settings, then Pages, and under "Build and deployment" set the Source to "Deploy from a branch," the Branch to `main`, and the Folder to `/ (root)`. Save. Within a minute the site will be live at `https://<your-username>.github.io`.

The second path is a project site at `https://<your-username>.github.io/portfolio`. This is useful if you want to keep your user-site URL free for a different project. Create a public repository with any name, push the files exactly as above, and configure Pages identically. The URL will include the repository name as a path segment.

The third path requires no terminal. Create the repository on GitHub, click "Add file" and then "Upload files," and drag every file from the `portfolio` directory into the upload area. On macOS, press Command-Shift-Period in Finder to reveal hidden files including `.nojekyll` before dragging. Commit and then enable Pages as above.

## Adding a custom domain

If you decide to use a custom domain — `salunke.dev` or `siddheshsalunke.com`, for instance — purchase the domain from any registrar and configure two DNS records. The first is a set of four A records on the apex (`@`) pointing to GitHub's IP addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. The second is a CNAME record on `www` pointing to `<your-username>.github.io`. Once DNS is in place, return to Settings, Pages, and enter the domain in the "Custom domain" field. After a few minutes you will be able to check "Enforce HTTPS" and the certificate will provision automatically.

## Editing the site

The patent pipeline diagram is constructed entirely in SVG inside `index.html`. Each node is a `<g class="node">` block with a rectangle and two text lines, and the animated marker is driven by an `animateMotion` element travelling along a path. Adding a new project card means duplicating any `<article class="work__card">` block in the `#work` section and editing the contents. Changing the accent color requires only a single edit: in `style.css`, near the top of the `:root` declaration, change the value of `--cyan` to whatever hex value you prefer. The rest of the page updates automatically. Switching to a light theme would mean swapping `--bg` to a near-white such as `#F4F0E8` and `--ink` to a near-black such as `#0B0D12`, and revisiting the gradient overlays in the patent section.

## Accessibility and performance

All interactive elements use real `<a>` and `<button>` tags with proper labels. The custom cursor is disabled on touch devices and respects the operating system's reduced-motion preference, as do the marquee, the data-flow pulse, and the scroll-reveal animation. There are no JavaScript libraries; the only external network calls are to Google Fonts. Total page weight is approximately thirty kilobytes of HTML, CSS, and JavaScript plus the fonts.

## A note on the design direction

The reference site you sent leans into a familiar dark-terminal aesthetic that is common among machine-learning engineers. Your work sits in a different space — biopharma data infrastructure, HPC, an issued patent — so the design here reflects that. The editorial typography in Fraunces italic moves the tone away from a generic tech-portfolio feel and toward something closer to a magazine feature, which fits a body of work that has actually been recognized by the patent office and which serves thousands of scientists. The phosphor-cyan accent is a quiet reference to the cryo-EM and instrumentation worlds you operate in. The patent has its own dedicated section with a real pipeline diagram rather than being buried in a project grid, which mirrors the actual weight of that achievement in your career. The numbered editorial section indices — No. 01 through No. 06 — create a deliberate reading rhythm rather than the dashboard density that has become the default in technology portfolios.

Edit it, break it, and make it yours.
