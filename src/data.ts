import { Product } from './types';

export type Category = 'Hoodies' | 'Oversized T-Shirts' | 'Pants' | 'Figures' | 'Mouse Pads' | 'Manga' | 'Metal Posters';

export const categories: Category[] = [
  'Hoodies',
  'Oversized T-Shirts',
  'Figures',
  'Mouse Pads',
  'Manga',
  'Metal Posters'
];

export const products: Product[] = [
  { id: "h1", name: "Uchiha Moon Drop Hoodie", description: "Premium oversized black hoodie featuring an iconic red moon and shadow crows.", price: 89.99, category: "Hoodies", color: "Black", imageUrl: "/hoodie-itachi.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 50 },
  { id: "h2", name: "Shinigami Throne Elite", description: "Gothic dark fantasy streetwear hoodie displaying a skeleton throne graphic.", price: 79.99, category: "Hoodies", color: "Black", imageUrl: "/hoodie-throne.jpg", galleryUrls: [], specs: {}, stock: 30 },
  { id: "h3", name: "Sun God Nika Awakening", description: "Joyful warrior awakening! White graphic typography on deep black cotton.", price: 95.00, category: "Hoodies", color: "Black", imageUrl: "/hoodie-gear5.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 15 },
  { id: "h4", name: "Shadow Monarch Aura", description: "Dark aura shadow swordsman graphic layered with vibrant paint strokes.", price: 85.00, category: "Hoodies", color: "Black", imageUrl: "/hoodie-solo.jpg", galleryUrls: [], specs: {}, stock: 42 },
  { id: "h5", name: "Rogue Ninja Clouds Graphic", description: "Minimalist blood-red clouds on the chest and sleeves of a black fleece.", price: 65.00, category: "Hoodies", color: "Black", imageUrl: "/hoodie-akatsuki.jpg", galleryUrls: [], specs: {}, stock: 5 },
  { id: "h6", name: "Pirate King Comic Layout", description: "Iconic comic panels featuring various power levels printed on the back.", price: 70.00, category: "Hoodies", color: "Black", imageUrl: "/hoodie-onepiece.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 12 },
  { id: "h7", name: "Uchiha Moon - Arctic Variant", description: "The iconic red moon graphics printed on a stark white premium hoodie.", price: 89.99, category: "Hoodies", color: "White", imageUrl: "/hoodie-itachi-white.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 25 },
  { id: "h8", name: "Mangekyou Vision Hoodie", description: "Red-eyed character panels and intense sharingan graphics on solid black.", price: 92.00, category: "Hoodies", color: "Black", imageUrl: "/hoodie-sharingan.jpg", galleryUrls: [], specs: {}, stock: 30 },

  { id: "t1", name: "Mecha Spine Oversized Tee", description: "Washed dark grey t-shirt featuring an embossed neon-green mecha spine graphic on the back.", price: 45.00, category: "Oversized T-Shirts", color: "Gray", imageUrl: "/tshirt-mech-spine.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 35 },
  { id: "t2", name: "Uchiha Crow Master Tee", description: "Black streetwear t-shirt depicting a bloody-handed ninja surrounded by crows and red text.", price: 38.00, category: "Oversized T-Shirts", color: "Black", imageUrl: "/tshirt-itachi-blood.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 110 },
  { id: "t3", name: "Threat Level Dragon Tee", description: "Grey oversized shirt with a stark black lightning aura martial artist graphic.", price: 40.00, category: "Oversized T-Shirts", color: "Gray", imageUrl: "/tshirt-threat-dragon.jpg", galleryUrls: [], specs: {}, stock: 65 },
  { id: "t4", name: "Statue of God Tee", description: "Stark white tee with a menacing, creepy smiling colossal statue sketched on the back.", price: 35.00, category: "Oversized T-Shirts", color: "White", imageUrl: "/tshirt-smiling-statue.jpg", galleryUrls: [], specs: {}, stock: 45 },
  { id: "t5", name: "No Enemies Vintage Wash", description: "Acid-wash brown tee with a deeply detailed warrior portrait and 'I have no enemies' typography.", price: 42.00, category: "Oversized T-Shirts", color: "Brown", imageUrl: "/tshirt-no-enemies.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 20 },

  { id: "f1", name: "Soul Reaper Subsitute", description: "1/6 scale highly detailed figure wielding a massive black blade.", price: 120.00, category: "Figures", color: "Black", imageUrl: "/figure-ichigo.jpg", galleryUrls: [], specs: {}, stock: 15 },
  { id: "f2", name: "Akatsuki Leader Throne", description: "Premium diorama figure featuring the Six Paths of Pain around a massive sculpt.", price: 250.00, category: "Figures", color: "Black", imageUrl: "/figure-pain.jpg", galleryUrls: [], specs: {}, stock: 5 },
  { id: "f3", name: "Virtual Idol Singer", description: "Dynamic pose figure of the iconic digital pop star with flowing twin-tails.", price: 65.00, category: "Figures", color: "Blue", imageUrl: "/figure-miku.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 42 },
  { id: "f4", name: "Joyboy Captain Resting", description: "Relaxed sitting pose of the future pirate king with his straw hat.", price: 85.00, category: "Figures", color: "Red", imageUrl: "/figure-luffy.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 25 },
  { id: "f5", name: "Three-Sword Master", description: "Fierce standing pose of the master swordsman ready for battle in a green coat.", price: 110.00, category: "Figures", color: "Green", imageUrl: "/figure-zoro.jpg", galleryUrls: [], specs: {}, stock: 12 },

  { id: "mp1", name: "Joyboy Awakening Mat", description: "Large desk mat featuring the laughing warrior in a moon with vibrant purple 'HAHA' typography.", price: 34.00, category: "Mouse Pads", color: "Black", imageUrl: "/mousepad-joyboy.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 100 },
  { id: "mp2", name: "Uchiha Blood Moon Mat", description: "Immersive desk pad capturing a crimson moon, flying crows, and a legendary rogue ninja.", price: 35.00, category: "Mouse Pads", color: "Red", imageUrl: "/mousepad-itachi.jpg", galleryUrls: [], specs: {}, stock: 85 },
  { id: "mp3", name: "Purple Lightning Warrior", description: "Dynamic glowing purple energy radiating from a powerful warrior mid-strike.", price: 32.00, category: "Mouse Pads", color: "Neon Purple", imageUrl: "/mousepad-purple-lightning.jpg", galleryUrls: [], specs: {}, stock: 45 },
  { id: "mp4", name: "Limitless Eyes Desk Pad", description: "Intense close-up of striking blue eyes piercing through white hair on a dark aesthetic background.", price: 35.00, category: "Mouse Pads", color: "Black", imageUrl: "/mousepad-blue-eyes.jpg", galleryUrls: [], specs: {}, stock: 60 },
  { id: "mp5", name: "Cybernetic Android Mat", description: "Sleek and highly detailed illustration of a blindfolded silver-haired android.", price: 34.00, category: "Mouse Pads", color: "White", imageUrl: "/mousepad-android.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 40 },
  { id: "mp6", name: "Pink Blossom Swordswoman", description: "Delicate yet deadly swordsman surrounded by soft pink aesthetics and petals.", price: 36.00, category: "Mouse Pads", color: "Pink", imageUrl: "/mousepad-pink-swordsman.jpg", galleryUrls: [], specs: {}, stock: 25 },

  { id: "m1", name: "Rainbow: Nisha Rokubou no Shichinin Vol 3", description: "A gripping tale of survival and brotherhood in postwar Japan.", price: 12.99, category: "Manga", color: "White", imageUrl: "/manga-rainbow.jpg", galleryUrls: [], specs: {}, stock: 35 },
  { id: "m2", name: "Kingdom: La Guerra dei 500 Anni Vol 1", description: "Epic historical manga set in ancient China, following Shin's journey.", price: 14.50, category: "Manga", color: "Red", imageUrl: "/manga-kingdom.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 42 },
  { id: "m3", name: "Beautiful Things", description: "A beautifully illustrated story by Narise Konohara and Nao Inui.", price: 15.00, category: "Manga", color: "White", imageUrl: "/manga-beautiful-things.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 15 },
  { id: "m4", name: "Le Guide Complet du Dessin Manga", description: "Comprehensive guide to mastering manga drawing techniques.", price: 19.99, category: "Manga", color: "Pink", imageUrl: "/manga-drawing-guide.jpg", galleryUrls: [], specs: {}, stock: 60 },
  { id: "m5", name: "Tokyo Ghoul Vol 1", description: "The beginning of Ken Kaneki's descent into the world of ghouls.", price: 13.00, category: "Manga", color: "Black", imageUrl: "/manga-tokyo-ghoul.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 110 },
  { id: "m6", name: "Your Name (Kimi no Na wa) Vol 1", description: "The beautiful manga adaptation of Makoto Shinkai's masterpiece.", price: 14.00, category: "Manga", color: "Blue", imageUrl: "/manga-your-name.jpg", galleryUrls: [], specs: {}, stock: 25 },

  { id: "mpst1", name: "Red Haired Emperor", description: "Vibrant metallic poster featuring the blazing red haired emperor enveloped in fiery aura.", price: 45.00, category: "Metal Posters", color: "Red", imageUrl: "/metal-shanks.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 40 },
  { id: "mpst2", name: "Unraveling Ghoul", description: "Intense metallic artwork of the iconic one-eyed ghoul with a glowing red background.", price: 45.00, category: "Metal Posters", color: "Red", imageUrl: "/metal-kaneki.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 35 },
  { id: "mpst3", name: "Hidden Leaf Hero", description: "High-quality metallic poster of the blonde ninja taking a break.", price: 45.00, category: "Metal Posters", color: "Orange", imageUrl: "/metal-naruto.jpg", galleryUrls: [], specs: {}, stock: 50 },
  { id: "mpst4", name: "Sun Breathing Swordsman", description: "Stunning metallic artwork of the demon slayer in the pouring rain with a fierce gaze.", price: 45.00, category: "Metal Posters", color: "Black", imageUrl: "/metal-tanjiro.jpg", galleryUrls: [], specs: {}, isNew: true, stock: 30 },
  { id: "mpst5", name: "Limitless Sorcerer", description: "Aesthetic metallic poster of the strongest sorcerer revealing his glowing blue eye.", price: 45.00, category: "Metal Posters", color: "Blue", imageUrl: "/metal-gojo.jpg", galleryUrls: [], specs: {}, isPopular: true, stock: 65 }
];
