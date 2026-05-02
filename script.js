'use strict';

const CATEGORY_LABELS = {
  sofas:   'Sofas & Sets',
  beds:    'Beds & Mattresses',
  bedroom: 'Bedroom Furniture',
  tables:  'Tables & Chairs',
};

const SALE_TAGS = ['Sale', 'Clearance'];

const CARD_GRADIENTS = [
  'linear-gradient(145deg,#3d2b20,#7a5438)',
  'linear-gradient(145deg,#1e2535,#3a507a)',
  'linear-gradient(145deg,#251a10,#6b4020)',
  'linear-gradient(145deg,#1a2520,#3a5040)',
  'linear-gradient(145deg,#2a1525,#553555)',
  'linear-gradient(145deg,#1f1510,#5a3810)',
  'linear-gradient(145deg,#1a1820,#3a3555)',
  'linear-gradient(145deg,#201a10,#5a4820)',
];

const SOFA_ICON  = `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M10 50V34a6 6 0 0 1 6-6h48a6 6 0 0 1 6 6v16"/><path d="M4 50h72v12H4z"/><path d="M16 62v8M64 62v8"/><path d="M10 50h12V40H10v10zM58 50h12V40H58v10z" fill="currentColor" opacity=".25"/></svg>`;
const BED_ICON   = `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 56V28h8v28"/><path d="M8 40h64v16H8z"/><path d="M16 40V30a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v10"/><rect x="20" y="28" width="16" height="12" rx="2" fill="currentColor" opacity=".2"/><rect x="44" y="28" width="16" height="12" rx="2" fill="currentColor" opacity=".2"/></svg>`;
const ROOM_ICON  = `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="8" y="20" width="64" height="48" rx="2"/><path d="M8 38h28v30H8zM36 38h36v30H36z" fill="currentColor" opacity=".15"/><path d="M28 68V38M8 50h28"/></svg>`;
const TABLE_ICON = `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="6" y="30" width="68" height="8" rx="3"/><path d="M16 38v24M64 38v24"/><rect x="20" y="52" width="40" height="6" rx="2" fill="currentColor" opacity=".2"/><ellipse cx="26" cy="24" rx="5" ry="5" fill="currentColor" opacity=".25"/><ellipse cx="40" cy="24" rx="5" ry="5" fill="currentColor" opacity=".25"/><ellipse cx="54" cy="24" rx="5" ry="5" fill="currentColor" opacity=".25"/></svg>`;

const PRODUCT_ICONS = { sofas: SOFA_ICON, beds: BED_ICON, bedroom: ROOM_ICON, tables: TABLE_ICON };

const PRODUCTS = [
  // Sofas & Sets
  { id: 1,  name: '3+2 Verona Grey Sofa Set',          price: 649,  category: 'sofas',   tag: 'Best Seller' },
  { id: 2,  name: '3+2 Milan Sofa Set',                 price: 900,  category: 'sofas',   tag: null },
  { id: 3,  name: '3+2 Nevada Sofa Set',                price: 1250, category: 'sofas',   tag: null },
  { id: 4,  name: '3 Seater Black Orlando Sofa',        price: 725,  category: 'sofas',   tag: null },
  { id: 5,  name: 'Amy 3+2 Sofa Set',                   price: 949,  category: 'sofas',   tag: null },
  { id: 6,  name: '3+2 LED Recliner Set',               price: 1495, category: 'sofas',   tag: 'Premium' },
  { id: 7,  name: '3+2 Miami Electric Recliner Black',  price: 1499, category: 'sofas',   tag: 'Premium' },
  { id: 8,  name: '3+3 Electric Recliner Suite',        price: 2000, category: 'sofas',   tag: 'Luxury' },
  { id: 9,  name: '3+2 Rio Recliner Set',               price: 1199, category: 'sofas',   tag: null },
  { id: 10, name: 'Verona Corner Sofa — Left Hand',     price: 679,  category: 'sofas',   tag: 'Corner' },
  { id: 11, name: 'Amy Corner Sofa 2C2',                price: 949,  category: 'sofas',   tag: 'Corner' },
  { id: 12, name: '2C2 Essex Sofa',                     price: 1035, category: 'sofas',   tag: null },
  { id: 13, name: 'Amy Armchair',                       price: 479,  category: 'sofas',   tag: null },
  { id: 14, name: 'Alissa U-Shape Sofa Bed',            price: 1299, category: 'sofas',   tag: 'Sofa Bed' },
  { id: 15, name: '2C2 Buxton Sofa Bed',                price: 1129, category: 'sofas',   tag: 'Sofa Bed' },
  { id: 16, name: 'Ex-Display Armchair — Clearance',    price: 49,   originalPrice: 199,  category: 'sofas',   tag: 'Clearance' },
  { id: 17, name: 'Ex-Display Premium Armchair',        price: 149,  originalPrice: 399,  category: 'sofas',   tag: 'Clearance' },
  { id: 18, name: 'Ex-Display Corner Section',          price: 299,  originalPrice: 699,  category: 'sofas',   tag: 'Clearance' },
  // Beds
  { id: 19, name: 'Freya Double Bed Frame',             price: 199,  category: 'beds',    tag: 'Best Value' },
  { id: 20, name: 'Maren Double Bed Frame',             price: 199,  category: 'beds',    tag: 'Best Value' },
  { id: 21, name: 'Basil Double Bed Frame',             price: 199,  category: 'beds',    tag: null },
  { id: 22, name: 'Ingrid Double Bed Frame',            price: 199,  category: 'beds',    tag: null },
  { id: 23, name: 'Jasper Double Bed — 1 Drawer',       price: 199,  category: 'beds',    tag: null },
  { id: 24, name: 'Maren Kingsize Bed Frame',           price: 249,  category: 'beds',    tag: null },
  { id: 25, name: 'Freya Double + Mattress Bundle',     price: 399,  category: 'beds',    tag: 'Bundle' },
  { id: 26, name: 'Maren Double + Mattress Bundle',     price: 399,  category: 'beds',    tag: 'Bundle' },
  { id: 27, name: 'Basil Double + Mattress Bundle',     price: 399,  category: 'beds',    tag: 'Bundle' },
  { id: 28, name: 'Freya Kingsize + Mattress Bundle',   price: 449,  category: 'beds',    tag: 'Bundle' },
  { id: 29, name: 'Divan Bed + Storage & Headboard',    price: 449,  category: 'beds',    tag: 'Storage' },
  // Bedroom
  { id: 30, name: '250 Sliding Wardrobe White',         price: 699,  originalPrice: 899,  category: 'bedroom', tag: 'Sale' },
  // Tables & Chairs
  { id: 31, name: 'Milano Dining Table & 4 Chairs',     price: 399,  category: 'tables',  tag: 'Best Seller' },
  { id: 32, name: 'Roma Marble-Effect Dining Set',       price: 549,  category: 'tables',  tag: null },
  { id: 33, name: 'Extending Oak Dining Table',          price: 299,  category: 'tables',  tag: null },
  { id: 34, name: 'Luna Glass Dining Table',             price: 229,  category: 'tables',  tag: null },
  { id: 35, name: 'Jasper Oak Coffee Table',             price: 149,  category: 'tables',  tag: null },
  { id: 36, name: 'Velvet Dining Chair (Per Chair)',     price: 79,   category: 'tables',  tag: 'Best Value' },
  { id: 37, name: 'Nest of 2 Side Tables',               price: 99,   category: 'tables',  tag: null },
  { id: 38, name: 'Black Marble Coffee Table',           price: 249,  category: 'tables',  tag: 'Premium' },
  { id: 39, name: '6-Seat White Gloss Dining Set',       price: 649,  category: 'tables',  tag: null },
  { id: 40, name: 'Industrial Dining Table',             price: 319,  originalPrice: 449,  category: 'tables',  tag: 'Sale' },
];

/* ── STATE ── */
let activeFilter = 'all';
let reserveProduct = null;

/* ── PRODUCT RENDERING ── */
function tagClass(tag) {
  if (!tag) return '';
  return tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function buildProductCard(product) {
  const gradient = CARD_GRADIENTS[product.id % CARD_GRADIENTS.length];
  const icon     = PRODUCT_ICONS[product.category] || SOFA_ICON;
  const catLabel = CATEGORY_LABELS[product.category] || '';
  const tagHtml  = product.tag
    ? `<span class="product-card__tag product-card__tag--${tagClass(product.tag)}">${product.tag}</span>`
    : '';
  const origHtml = product.originalPrice
    ? `<span class="product-card__original">£${product.originalPrice.toLocaleString()}</span>`
    : '';

  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-card__img" style="background:${gradient}">
        <div class="product-card__icon">${icon}</div>
        <div class="product-card__img-inner">${tagHtml}</div>
      </div>
      <div class="product-card__body">
        <p class="product-card__cat">${catLabel}</p>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__pricing">
          ${origHtml}
          <span class="product-card__price">£${product.price.toLocaleString()}</span>
        </div>
        <div class="product-card__actions">
          <button class="btn btn--gold btn--sm" data-reserve-id="${product.id}">Reserve Now</button>
          <a href="tel:02894466705" class="btn btn--outline btn--sm">Enquire</a>
        </div>
      </div>
    </article>`;
}

function isSale(p) {
  return (p.tag && SALE_TAGS.includes(p.tag)) || !!p.originalPrice;
}

function filterProducts(filter) {
  activeFilter = filter;
  const grid    = document.getElementById('product-grid');
  const counter = document.getElementById('product-count');

  const filtered = filter === 'all'  ? PRODUCTS
                 : filter === 'sale' ? PRODUCTS.filter(isSale)
                 : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(buildProductCard).join('');
  counter.textContent = filtered.length;

  grid.querySelectorAll('[data-reserve-id]').forEach(btn => {
    btn.addEventListener('click', () => openReserve(Number(btn.dataset.reserveId)));
  });
}

function renderProducts() { filterProducts('all'); }

/* ── FILTER TABS ── */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      filterProducts(tab.dataset.filter);
    });
  });
}

/* ── CATEGORY CARDS ── */
function initCategoryCards() {
  document.querySelectorAll('.cat-card[data-filter]').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      document.querySelectorAll('.filter-tab').forEach(t => {
        const match = t.dataset.filter === filter;
        t.classList.toggle('active', match);
        t.setAttribute('aria-selected', match ? 'true' : 'false');
      });
      filterProducts(filter);
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-filter-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const filter = link.dataset.filterLink;
      document.querySelectorAll('.filter-tab').forEach(t => {
        const match = t.dataset.filter === filter;
        t.classList.toggle('active', match);
        t.setAttribute('aria-selected', match ? 'true' : 'false');
      });
      filterProducts(filter);
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ── RESERVE MODAL ── */
const modal = document.getElementById('reserve-modal');

function openReserve(productId) {
  reserveProduct = PRODUCTS.find(p => p.id === productId) || null;
  document.getElementById('modal-product-name').textContent =
    reserveProduct ? `${reserveProduct.name} — £${reserveProduct.price.toLocaleString()}` : '';
  showModal();
}

function openReserveGeneral() {
  reserveProduct = null;
  document.getElementById('modal-product-name').textContent = 'General Enquiry / Reserve';
  showModal();
}

function showModal() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-success').hidden = true;
  document.getElementById('reserve-form').hidden  = false;
  clearErrors();
  setTimeout(() => document.getElementById('f-name').focus(), 50);
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  reserveProduct = null;
}

function clearErrors() {
  ['err-name','err-phone','err-email'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
  ['f-name','f-phone','f-email'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('error');
  });
}

function validateForm() {
  let valid = true;
  const name  = document.getElementById('f-name');
  const phone = document.getElementById('f-phone');
  const email = document.getElementById('f-email');

  if (!name.value.trim()) {
    document.getElementById('err-name').textContent = 'Please enter your name.';
    name.classList.add('error'); valid = false;
  }
  const pv = phone.value.replace(/\s/g, '');
  if (!pv || !/^[\d+]{7,15}$/.test(pv)) {
    document.getElementById('err-phone').textContent = 'Please enter a valid phone number.';
    phone.classList.add('error'); valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById('err-email').textContent = 'Please enter a valid email address.';
    email.classList.add('error'); valid = false;
  }
  return valid;
}

function initModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
  document.getElementById('modal-done').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  const form   = document.getElementById('reserve-form');
  const submit = document.getElementById('submit-btn');
  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();
    if (!validateForm()) return;
    submit.disabled    = true;
    submit.textContent = 'Confirming…';
    setTimeout(() => {
      document.getElementById('reserve-form').hidden  = true;
      document.getElementById('modal-success').hidden = false;
      submit.disabled    = false;
      submit.textContent = 'Confirm Reservation';
    }, 1200);
  });
}

window.openReserveGeneral = openReserveGeneral;

/* ── NAVBAR ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── MOBILE DRAWER ── */
function initMobileDrawer() {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobile-drawer');
  const closeBtn  = document.getElementById('drawer-close');
  const overlay   = document.getElementById('overlay');

  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── SMOOTH SCROLL ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ── LIGHTBOX ── */
const GALLERY_IMAGES = [
  { src: 'img/gallery-1.jpg', label: 'LED U-Shape Recliner — Customer Home' },
  { src: 'img/gallery-2.jpg', label: 'Corner Leather Recliner — Customer Home' },
  { src: 'img/gallery-3.jpg', label: 'LED Electric Recliner Set — Customer Home' },
  { src: 'img/gallery-4.jpg', label: 'Premium Cinema Recliner — Customer Home' },
  { src: 'img/gallery-5.jpg', label: 'Luxury Bed Frame — Customer Home' },
  { src: 'img/gallery-6.jpg', label: 'Corner Sofa Bed — Customer Home' },
];
let lbCurrent = 0;

function initLightbox() {
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lb-img');
  const lbLabel = document.getElementById('lb-label');
  const lbCount = document.getElementById('lb-count');
  if (!lb) return;

  function showLb(idx) {
    lbCurrent = (idx + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    const d = GALLERY_IMAGES[lbCurrent];
    lbImg.src = d.src;
    lbImg.alt = d.label;
    if (lbLabel) lbLabel.textContent = d.label;
    if (lbCount) lbCount.textContent = `${lbCurrent + 1} / ${GALLERY_IMAGES.length}`;
  }

  function closeLb() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-item[data-lb]').forEach(item => {
    item.addEventListener('click', () => {
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      showLb(parseInt(item.dataset.lb, 10));
    });
  });

  document.getElementById('lb-close').addEventListener('click', closeLb);
  document.getElementById('lb-backdrop').addEventListener('click', closeLb);
  document.getElementById('lb-prev').addEventListener('click', () => showLb(lbCurrent - 1));
  document.getElementById('lb-next').addEventListener('click', () => showLb(lbCurrent + 1));

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  showLb(lbCurrent - 1);
    if (e.key === 'ArrowRight') showLb(lbCurrent + 1);
  });
}

/* ── ANIMATED COUNTERS ── */
function initCounters() {
  const items = document.querySelectorAll('.stat-num[data-target]');
  if (!items.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseFloat(el.dataset.target);
      const dec    = !Number.isInteger(target);
      const dur    = 1600;
      const t0     = performance.now();

      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = dec ? (target * e).toFixed(1) : Math.round(target * e);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);

      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  items.forEach(el => obs.observe(el));
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initFilterTabs();
  initCategoryCards();
  initModal();
  initNavbar();
  initMobileDrawer();
  initReveal();
  initSmoothScroll();
  initLightbox();
  initCounters();
});
