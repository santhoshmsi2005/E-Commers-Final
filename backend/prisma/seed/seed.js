const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// ---------------------------------------------
// 50 dummy products
// ---------------------------------------------
const products = [
  {
    name: "Apple iPhone 16 Pro",
    description: "Latest Apple flagship smartphone with A18 Pro chip and titanium design.",
    price: "1299",
    stock: "35",
    category: "Smartphones",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    rating: "4.9",
    numReviews: "320",
    isFeatured: "true",
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    description: "Premium Android smartphone with AI-powered camera.",
    price: "1199",
    stock: "28",
    category: "Smartphones",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    rating: "4.8",
    numReviews: "280",
    isFeatured: "true",
  },
  {
    name: "MacBook Air M4",
    description: "Ultra-light laptop powered by Apple's M4 chip.",
    price: "1499",
    stock: "20",
    category: "Laptops",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    rating: "4.9",
    numReviews: "190",
    isFeatured: "true",
  },
  {
    name: "Dell XPS 15",
    description: "Powerful Windows laptop with OLED display.",
    price: "1799",
    stock: "15",
    category: "Laptops",
    brand: "Dell",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    rating: "4.7",
    numReviews: "150",
    isFeatured: "false",
  },
  {
    name: "Sony WH-1000XM5",
    description: "Industry-leading wireless noise cancelling headphones.",
    price: "399",
    stock: "60",
    category: "Headphones",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: "4.8",
    numReviews: "450",
    isFeatured: "true",
  },
  {
    name: "AirPods Pro 2",
    description: "Wireless earbuds with Active Noise Cancellation.",
    price: "249",
    stock: "80",
    category: "Earbuds",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37",
    rating: "4.9",
    numReviews: "500",
    isFeatured: "true",
  },
  {
    name: "Apple Watch Series 10",
    description: "Advanced smartwatch with health tracking.",
    price: "499",
    stock: "40",
    category: "Smart Watches",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: "4.8",
    numReviews: "230",
    isFeatured: "false",
  },
  {
    name: "Samsung Galaxy Watch 7",
    description: "Smartwatch with AI health monitoring.",
    price: "349",
    stock: "38",
    category: "Smart Watches",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    rating: "4.7",
    numReviews: "170",
    isFeatured: "false",
  },
  {
    name: "Canon EOS R10",
    description: "Mirrorless camera for photography enthusiasts.",
    price: "999",
    stock: "18",
    category: "Cameras",
    brand: "Canon",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    rating: "4.8",
    numReviews: "120",
    isFeatured: "true",
  },
  {
    name: "PlayStation 5",
    description: "Next-generation gaming console.",
    price: "549",
    stock: "30",
    category: "Gaming",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    rating: "4.9",
    numReviews: "620",
    isFeatured: "true",
  },
  {
    name: "Xbox Series X",
    description: "Powerful gaming console from Microsoft.",
    price: "549",
    stock: "25",
    category: "Gaming",
    brand: "Microsoft",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
    rating: "4.8",
    numReviews: "350",
    isFeatured: "false",
  },
  {
    name: "Logitech MX Master 3S",
    description: "Premium wireless productivity mouse.",
    price: "99",
    stock: "70",
    category: "Accessories",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    rating: "4.9",
    numReviews: "410",
    isFeatured: "false",
  },
  {
    name: "Keychron K8",
    description: "Wireless mechanical keyboard.",
    price: "89",
    stock: "55",
    category: "Accessories",
    brand: "Keychron",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    rating: "4.7",
    numReviews: "180",
    isFeatured: "false",
  },
  {
    name: "iPad Air M3",
    description: "Powerful tablet for work and entertainment.",
    price: "799",
    stock: "35",
    category: "Tablets",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    rating: "4.9",
    numReviews: "250",
    isFeatured: "true",
  },
  {
    name: "Samsung Galaxy Tab S10",
    description: "Android tablet with AMOLED display.",
    price: "749",
    stock: "25",
    category: "Tablets",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9",
    rating: "4.8",
    numReviews: "170",
    isFeatured: "false",
  },
  {
    name: "JBL Flip 6",
    description: "Portable Bluetooth speaker.",
    price: "149",
    stock: "90",
    category: "Speakers",
    brand: "JBL",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    rating: "4.7",
    numReviews: "260",
    isFeatured: "false",
  },
  {
    name: "GoPro HERO13",
    description: "Action camera for adventure enthusiasts.",
    price: "499",
    stock: "22",
    category: "Cameras",
    brand: "GoPro",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    rating: "4.8",
    numReviews: "210",
    isFeatured: "true",
  },
  {
    name: "ASUS ROG Zephyrus G16",
    description: "Gaming laptop with RTX graphics.",
    price: "1999",
    stock: "14",
    category: "Laptops",
    brand: "ASUS",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    rating: "4.8",
    numReviews: "160",
    isFeatured: "true",
  },
  {
    name: "Nothing Phone 3",
    description: "Unique transparent design smartphone.",
    price: "699",
    stock: "45",
    category: "Smartphones",
    brand: "Nothing",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    rating: "4.6",
    numReviews: "140",
    isFeatured: "false",
  },
  {
    name: "Anker 737 Power Bank",
    description: "High-capacity fast charging power bank.",
    price: "129",
    stock: "100",
    category: "Accessories",
    brand: "Anker",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    rating: "4.8",
    numReviews: "300",
    isFeatured: "false",
  },
  {
    name: "Nintendo Switch OLED",
    description: "Portable gaming console with OLED display.",
    price: "349",
    stock: "32",
    category: "Gaming",
    brand: "Nintendo",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
    rating: "4.9",
    numReviews: "510",
    isFeatured: "true",
  },
  {
    name: "LG UltraWide Monitor 34\"",
    description: "34-inch curved ultrawide monitor.",
    price: "699",
    stock: "20",
    category: "Monitors",
    brand: "LG",
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    rating: "4.8",
    numReviews: "195",
    isFeatured: "false",
  },
  {
    name: "Amazon Echo Dot 5",
    description: "Smart speaker with Alexa.",
    price: "59",
    stock: "120",
    category: "Smart Home",
    brand: "Amazon",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230",
    rating: "4.7",
    numReviews: "420",
    isFeatured: "false",
  },
  {
    name: "Dyson V15 Detect",
    description: "Cordless vacuum cleaner with laser detection.",
    price: "799",
    stock: "16",
    category: "Home Appliances",
    brand: "Dyson",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001",
    rating: "4.9",
    numReviews: "145",
    isFeatured: "true",
  },
  {
    name: "Kindle Paperwhite",
    description: "Waterproof e-reader with glare-free display.",
    price: "189",
    stock: "48",
    category: "E-Readers",
    brand: "Amazon",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    rating: "4.8",
    numReviews: "340",
    isFeatured: "false",
  }
];

// ---------------------------------------------
// 5 dummy users
// ---------------------------------------------
const users = [
  { name: "Admin User", email: "admin@example.com", password: "admin123", role: "admin", avatar: "https://i.pravatar.cc/150?img=1", phone: "9876543210" },
  { name: "John Doe", email: "john.doe@example.com", password: "password123", role: "user", avatar: "https://i.pravatar.cc/150?img=2", phone: "9876543211" },
  { name: "Jane Smith", email: "jane.smith@example.com", password: "password123", role: "user", avatar: "https://i.pravatar.cc/150?img=3", phone: "9876543212" },
  { name: "Michael Brown", email: "michael.brown@example.com", password: "password123", role: "user", avatar: "https://i.pravatar.cc/150?img=4", phone: "9876543213" },
  { name: "Emily Davis", email: "emily.davis@example.com", password: "password123", role: "user", avatar: "https://i.pravatar.cc/150?img=5", phone: "9876543214" },
];

async function main() {
  console.log("Cleaning existing data...");
  await prisma.cart.deleteMany();
  await prisma.product.deleteMany();
  await prisma.users.deleteMany();

  console.log("Seeding users...");
  const createdUsers = [];
  for (const user of users) {
    const created = await prisma.users.create({ data: user });
    createdUsers.push(created);
  }

  console.log("Seeding products...");
  const createdProducts = [];
  for (const product of products) {
    const created = await prisma.product.create({ data: product });
    createdProducts.push(created);
  }

  console.log("Seeding carts...");
  // Give each non-admin user a few random cart items
  const shoppers = createdUsers.filter((u) => u.role === "user");
  for (const user of shoppers) {
    const numItems = Math.floor(Math.random() * 4) + 2; // 2-5 items
    const shuffled = [...createdProducts].sort(() => 0.5 - Math.random());
    const picks = shuffled.slice(0, numItems);

    for (const product of picks) {
      await prisma.cart.create({
        data: {
          userId: user.id,
          productId: product.id,
          quantity: Math.floor(Math.random() * 3) + 1, // 1-3 qty
        },
      });
    }
  }

  console.log(`Done! Seeded ${createdUsers.length} users, ${createdProducts.length} products, and cart entries.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

