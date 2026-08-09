const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Acessando o site...');
  await page.goto('https://familia.free.nf/cron_notificar.php?chave=familia2026notif', {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  await page.waitForTimeout(3000);

  const conteudo = await page.content();
  console.log('Conteúdo final da página:');
  console.log(conteudo);

  await browser.close();
})();
