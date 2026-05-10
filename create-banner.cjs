const Jimp = require('jimp');

// Create a new image with 1200x630 dimensions
async function createBanner() {
  try {
    // Create a new image
    const image = new Jimp(1200, 630, 0xFFFFFFFF);

    // Load fonts (using default fonts)
    const fontLarge = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
    const fontMedium = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

    // Create gradient background (white to light gray)
    for (let y = 0; y < 630; y++) {
      for (let x = 0; x < 1200; x++) {
        const gradient = Math.floor((y / 630) * 30) + 220; // Light gradient
        const color = Jimp.rgbaToInt(gradient, gradient, gradient, 255);
        image.setPixelColor(color, x, y);
      }
    }

    // Add main title "BODHIX"
    const titleText = "BODHIX";
    const titleWidth = Jimp.measureText(fontLarge, titleText);
    const titleX = (1200 - titleWidth) / 2;
    const titleY = 150;
    image.print(fontLarge, titleX, titleY, titleText);

    // Add subtitle
    const subtitleText = "Innovative Tech Solutions";
    const subtitleWidth = Jimp.measureText(fontMedium, subtitleText);
    const subtitleX = (1200 - subtitleWidth) / 2;
    const subtitleY = 320;
    image.print(fontMedium, subtitleX, subtitleY, subtitleText);

    // Add tagline
    const taglineText = "Transforming Businesses with SaaS Solutions";
    const taglineWidth = Jimp.measureText(Jimp.FONT_SANS_16_BLACK, taglineText);
    const taglineX = (1200 - taglineWidth) / 2;
    const taglineY = 400;
    image.print(Jimp.FONT_SANS_16_BLACK, taglineX, taglineY, taglineText);

    // Save the image
    await image.writeAsync('./public/banner.png');
    console.log('Banner created successfully!');

    // Also create og-image.png (can be the same or slightly different)
    await image.writeAsync('./public/og-image.png');
    console.log('OG image created successfully!');

  } catch (error) {
    console.error('Error creating banner:', error);
  }
}

createBanner();