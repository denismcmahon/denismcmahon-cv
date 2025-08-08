import puppeteer from "puppeteer";

const URL = "https://denismcmahon.github.io/denismcmahon-cv/";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Good defaults for crisp output
  await page.setViewport({ width: 1200, height: 1800, deviceScaleFactor: 2 });
  await page.emulateMediaType("screen"); // keep your site’s screen styles

  // Load the page and wait for it to settle
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 120000 });

  // Optional: ensure fonts/animations are stable before printing
  await page.addStyleTag({ content: `
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    html, body { background: white !important; }
    /* Freeze animations for deterministic output */
    *, *::before, *::after { animation: none !important; transition: none !important; }
    /* Kill sticky headers/footers if you have them */
    .sticky, header, footer { position: static !important; }
  `});

  await page.pdf({
    path: "Denis-McMahon-CV.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true, // respects @page size if you add it
    margin: { top: "10mm", right: "12mm", bottom: "12mm", left: "12mm" }
  });

  await browser.close();
  console.log("Saved -> Denis-McMahon-CV.pdf");
})();
