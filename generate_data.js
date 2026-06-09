const fs = require('fs');

const categories = [
  'Hoodies', 
  'Oversized T-Shirts', 
  'Caps', 
  'Bottles', 
  'Posters', 
  'Metal Posters', 
  'Mouse Pads', 
  'Keychains', 
  'Figures', 
  'Manga'
];

const colors = ["Black", "White", "Red", "Blue", "Neon Purple", "Green", "Yellow", "Orange", "Pink", "Gray"];

// Image references that feel "anime" or "cyber/japanese"
const imagePools = {
  'Hoodies': [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1578587018452-892bace94f12?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1556821840-062e249b6e0b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200"
  ],
  'Oversized T-Shirts': [
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1200"
  ],
  'Caps': [
    "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1521369909029-2afed882ba54?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&q=80&w=1200"
  ],
  'Bottles': [
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1618220048126-1b4898fc0280?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1544243606-258d4a6f2bde?auto=format&fit=crop&q=80&w=1200"
  ],
  'Posters': [
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1598305886638-ce5fa4f9ce94?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1200"
  ],
  'Metal Posters': [
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1550684376-efcb91dfce86?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1606141381283-c286ccfbb230?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=1200"
  ],
  'Mouse Pads': [
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1589139556731-081ba5d0ea15?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1605773527852-c546c1001af1?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1200"
  ],
  'Keychains': [
    "https://images.unsplash.com/photo-1601552554625-f772ff2e4ec1?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1601618683510-cdb4ae2e7b75?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1616719875143-a61907decf33?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1563298723-dcfebf009e46?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1533038590840-1c79e604f326?auto=format&fit=crop&q=80&w=1200"
  ],
  'Figures': [
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1594916327318-7b94ce5e73ef?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1619641775199-52e8039918fb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1620336655055-088d080004f1?auto=format&fit=crop&q=80&w=1200"
  ],
  'Manga': [
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1606202462991-6228eebd43ed?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1601618585489-009ab9ee3d12?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1598285550608-aa28af3579ee?auto=format&fit=crop&q=80&w=1200"
  ]
};

const productNames = {
  'Hoodies': ["Cyber Samurai Drop", "Neo-Tokyo Skyline", "Ronin Tech-Wear", "Shinigami Guardian", "Mecha Core 01"],
  'Oversized T-Shirts': ["Acid Wash Akatsuki Style", "Vintage Mech Unit Target", "Ghost Shell Interface", "Demon Slayer Breathing", "Cyberpunk Syndicate Logo"],
  'Caps': ["Embroidered Kunai Dad Hat", "Neon Corporation Snapback", "Tokyo Drifter Cap", "Oni Mask Tech Cap", "Cursed Seal Beanie"],
  'Bottles': ["Titan Armor Flask", "Hokage Will Thermos", "Demon Blood Insulated", "Nerv HQ Water Bottle", "Cyber-Ninja Hydration Unit"],
  'Posters': ["Akira Bike Slide Print", "Hunter Target Outline", "Cursed Finger Shrine", "Titan Wall Breach", "Ninja Village Blueprint"],
  'Metal Posters': ["Glow in the Dark Mecha", "Katana Blood Splash", "Super Saiyan Aura Outline", "Espada Numbers", "Jutsu Signs Grid"],
  'Mouse Pads': ["Space Cowboy Jazz Mat", "Sorcerer Domain Expansion", "Pirate King Map Area", "Hero Association Desk Pad", "Alchemist Circle Glow Mat"],
  'Keychains': ["Dragon Ball Set", "Kunai Replica", "Bounty Hunter Tag", "Zanpakuto Miniature", "Devil Fruit Clear Resin"],
  'Figures': ["1/6 Scale Samurai Elite", "Chibi Demon Hunter", "Titan Form Bust", "Cybernetic Waifu 2077", "Rogue Shinobi Action Cast"],
  'Manga': ["Tokyo Underworld Vol 1", "Sorcery Clash Box Set", "Mecha Genesis Origin", "Blade of Shadows Complete", "Heroic Academy Chronicles"]
};

const products = [];
let idCounter = 1;

for (const category of categories) {
  for (let i = 0; i < 5; i++) {
    const isNew = Math.random() > 0.7;
    const isPopular = Math.random() > 0.7;
    const isFeatured = Math.random() > 0.8;
    
    // Pick price range based on category
    let minPrice = 10, maxPrice = 30;
    if (category === 'Figures') { minPrice = 60; maxPrice = 300; }
    if (category === 'Hoodies') { minPrice = 50; maxPrice = 120; }
    if (category === 'Oversized T-Shirts') { minPrice = 30; maxPrice = 60; }
    if (category === 'Manga') { minPrice = 15; maxPrice = 150; }
    
    const price = Math.floor(Math.random() * (maxPrice - minPrice + 1) + minPrice) - 0.01;
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    products.push({
      id: "p" + idCounter,
      name: productNames[category][i],
      description: "Premium anime-inspired merchandise explicitly designed for the true otaku. " + productNames[category][i] + " showcases authentic aesthetic qualities.",
      price: parseFloat(price.toFixed(2)),
      category: category,
      color: color,
      imageUrl: imagePools[category][i],
      galleryUrls: [ imagePools[category][i] ],
      specs: {
        "Material": "Premium Grade",
        "Authenticity": "100% Genuine OtakuVault",
        "Origin": "Neo-Tokyo Design Studio"
      },
      isNew,
      isPopular,
      isFeatured,
      stock: Math.floor(Math.random() * 200) + 0 // Avoid stockout mostly
    });
    idCounter++;
  }
}

const fileContent = `import { Product, Category } from './types';

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export const categories: Category[] = [
  'Hoodies', 
  'Oversized T-Shirts', 
  'Caps', 
  'Bottles', 
  'Posters', 
  'Metal Posters', 
  'Mouse Pads', 
  'Keychains', 
  'Figures', 
  'Manga'
];
`;

fs.writeFileSync('src/data.ts', fileContent);
console.log("Successfully generated src/data.ts with 50 anime-themed products");
