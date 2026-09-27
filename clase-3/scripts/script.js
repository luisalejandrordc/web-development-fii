/* ===== DATOS DE PRODUCTOS =====
   Las imágenes se obtienen de loremflickr.com, que sirve fotos reales
   (con licencia libre) según una palabra clave; el parámetro "lock"
   fija siempre la misma foto para cada producto. */
const PRODUCTS = [
  {
    id: 1,
    name: "Notebook HP 15, 8GB RAM, 256GB SSD",
    price: 51999,
    category: "Computación",
    img: "https://rimage.ripley.com.pe/home.ripley/Attachment/WOP/1/2004306270608/full_image-2004306270608.jpg",
  },
  {
    id: 2,
    name: "iPhone 13, 128GB, Azul",
    price: 389999,
    category: "Celulares",
    img: "https://plazavea.vteximg.com.br/arquivos/ids/31608137-418-418/image-7019bcef67974afbb11c1218893a9801.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy A54, 256GB",
    price: 219999,
    category: "Celulares",
    img: "https://rimage.ripley.com.pe/home.ripley/Attachment/WOP/1/2065311734325/full_image-2065311734325.",
  },
  {
    id: 4,
    name: "Motorola Edge 40, 128GB",
    price: 179999,
    category: "Celulares",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cn7GXoKwJ5UTLgrjKHOBJf_-Qpx7GF2ZsJMejq3EjA&s",
  },

  {
    id: 5,
    name: "Notebook Samsung, i5, 16GB RAM",
    price: 431999,
    category: "Computación",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GvpX-k0OwQD5ZQRDbyrk2uSXJm5UPNkg0uVqYGFHxw&s=10",
  },
  {
    id: 6,
    name: "Notebook Lenovo, i7, 512GB SSD",
    price: 355299,
    category: "Computación",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEBsDXcDhJdtTlcaduRZGO5YMWJvJyLLSX7JdqQVxMA&s=10",
  },
  {
    id: 7,
    name: "Monitor Samsung 24 pulgadas",
    price: 59900,
    category: "Computación",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDfnua71HRu56uCLiZ1Yx8bNrhiR5tNbi3Ez9wcldiw&s=10",
  },
  {
    id: 8,
    name: "Teclado mecánico RGB",
    price: 24900,
    category: "Computación",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgneY51DieGyfO3zGIQ5Cniq_AKOZaD-iDs9WdSJLdw&s=10",
  },

  {
    id: 9,
    name: "Auricular Gamer HyperX",
    price: 12900,
    category: "Audio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnt5wa3lEkPBGmRPAGqHNKnUuU4d0W68piyDPv--vlA&s=10",
  },
  {
    id: 10,
    name: "Parlante Bluetooth JBL Flip 6",
    price: 89900,
    category: "Audio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ZSi2P1bTkhr7DlnW_QxQNMXd00Pn9-56F833jEzmA&s=10",
  },
  {
    id: 11,
    name: "Auriculares inalámbricos Sony",
    price: 45900,
    category: "Audio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmx9ac3kVla12CyDrWa5DA070sYBDMF2AHFLjID_W7HQ&s=10",
  },

  {
    id: 12,
    name: "Mouse inalámbrico Logitech",
    price: 8900,
    category: "Accesorios",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHiJnr25GuEExw-nyIwVPj3DXcFg0aa2uzlnNOTu3Yg&s=10",
  },
  {
    id: 13,
    name: 'Funda para notebook 15"',
    price: 6900,
    category: "Accesorios",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6P2vbINQDs7qOmCYgblfLHeE2uzeaEYrwKsOgorYd6w&s=10",
  },
  {
    id: 14,
    name: "Cargador rápido USB-C 30W",
    price: 5900,
    category: "Accesorios",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnGHat3c0HW1HEMvF_yU_WZh4afdkl2oQdWH7Toh6aw&s",
  },
];

/* ===== CARRITO (persistido en localStorage) =====
   Se guarda como objeto { idProducto: cantidad } */
const CART_KEY = "mf_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function getQty(id) {
  const cart = getCart();
  return cart[id] || 0;
}

function increaseQty(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
}

function decreaseQty(id) {
  const cart = getCart();
  if (!cart[id]) return;
  cart[id] -= 1;
  if (cart[id] <= 0) delete cart[id];
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const cart = getCart();
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

function formatPrice(n) {
  return "$ " + n.toLocaleString("es-AR");
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
