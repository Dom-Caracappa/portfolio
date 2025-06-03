const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to your locally served site (make sure 'mkdocs serve' is running!)
    await page.goto("http://127.0.0.1:8000/docs-as-code-starter/", {
        waitUntil: "networkidle0",
        timeout: 60000,
    });


    // Save PDF
    await page.pdf({
        path: "output.pdf",
        format: "A4",
        printBackground: true,
    });

    await browser.close();
})();
