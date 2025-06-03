const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to your locally served site (make sure 'mkdocs serve' is running!)
    await page.goto("http://localhost:8000", { waitUntil: "networkidle0" });

    // Save PDF
    await page.pdf({
        path: "output.pdf",
        format: "A4",
        printBackground: true,
    });

    await browser.close();
})();
