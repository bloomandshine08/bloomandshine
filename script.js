// ===============================
// BLOOM & SHINE WEBSITE
// ===============================


// WhatsApp number
// We will replace YOUR_NUMBER later
// Example Bangladesh number:
// 8801XXXXXXXXX

const whatsappNumber = "+8801919458803";

// Social Media Links
const socialMedia = {
    tiktok: "https://www.tiktok.com/@bloomandshine8",
    facebook: "https://www.facebook.com/bloomandshine8",
    instagram: "https://instagram.com/bloomandshine8",
    gmail: "bloomandshine08@gmail.com"
};


// ===============================
// INITIALIZE ON PAGE LOAD
// ===============================

document.addEventListener('DOMContentLoaded', function() {
    
    // Update contact button WhatsApp link
    const contactButton = document.querySelector('.contact-section .whatsapp-button');
    if (contactButton) {
        contactButton.href = 'https://wa.me/' + whatsappNumber + '?text=Hello%20Bloom%20%26%20Shine!%20I%20would%20like%20to%20know%20more%20about%20your%20products.';
        contactButton.target = '_blank';
    }

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});


// ===============================
// FILTER PRODUCTS
// ===============================

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");

        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "block";
            // Add animation effect
            setTimeout(function() {
                product.style.opacity = "1";
                product.style.transform = "scale(1)";
            }, 10);

        } else {

            product.style.display = "none";

        }

    });

}


// ===============================
// CAROUSEL FUNCTIONS
// ===============================

function changeCarouselImage(carouselNum, direction) {
    const container = document.querySelector(`[data-carousel="${carouselNum}"]`);
    if (!container) return;
    
    const dots = container.querySelectorAll('.dot');
    const totalImages = dots.length;
    
    let currentIndex = parseInt(container.dataset.index) || 1;
    let newIndex = currentIndex + direction;
    
    if (newIndex > totalImages) newIndex = 1;
    if (newIndex < 1) newIndex = totalImages;
    
    setCarouselImage(carouselNum, newIndex);
}

function setCarouselImage(carouselNum, imageNum) {
    const container = document.querySelector(`[data-carousel="${carouselNum}"]`);
    if (!container) return;
    
    const img = container.querySelector('.carousel-main-img');
    const dots = container.querySelectorAll('.dot');
    
    if (!img) return;
    
    // Determine image path based on carousel number
    let imagePath = '';
    if (carouselNum === 1) {
        imagePath = `images/${imageNum}.jpeg`;
    } else if (carouselNum === 2) {
        imagePath = `images/golden-heart-${imageNum}.jpeg`;
    } else if (carouselNum === 3) {
        imagePath = `images/korean-style-${imageNum}.jpeg`;
    } else if (carouselNum === 4) {
        imagePath = `images/tulip-pendant-${imageNum}.jpg`;
    } else if (carouselNum === 5) {
        imagePath = `images/sleek-bar-${imageNum}.jpg`;
    } else if (carouselNum === 6) {
        imagePath = `images/necklace-earring-170-${imageNum}.png`;
    } else if (carouselNum === 7) {
        imagePath = `images/Classic French Tip Press-On Nails/${imageNum}.jpeg`;
    } else if (carouselNum === 8) {
        imagePath = `images/Necklace With Earring 2/${imageNum}.jpeg`;
        if (imageNum === 2 || imageNum === 3 || imageNum === 5 || imageNum === 6) {
            imagePath = `images/Necklace With Earring 2/${imageNum}.png`;
        }
    } else if (carouselNum === 9) {
        imagePath = `images/Heart Bracelet With Necklace/${imageNum}.jpg`;
    } else {
        imagePath = `images/product-${carouselNum}-${imageNum}.jpeg`;
    }
    
    img.src = imagePath;
    container.dataset.index = imageNum;
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === imageNum - 1) {
            dot.classList.add('active');
        }
    });
}


// ===============================
// OPEN PRODUCT DETAILS
// ===============================

const productDescriptions = {
    'Tulip Bracelet': '🌷 Tulip Bracelet — A little elegance, a lot of shine. ✨ Designed with a delicate tulip-inspired look, sparkling pink stones, and an elegant golden finish—perfect for adding a graceful touch to any outfit. 💕 Perfect for yourself or as a beautiful gift for someone special. 🎁 🌸 Bloom & Shine ✨ Elegance that makes you shine',
    'Golden Heart Necklace': '✨ A Love That Never Goes Out of Style ✨\nMake every moment special with our elegant Heart Locket Necklace ❤️\nPerfect for gifting someone special—or treating yourself. 🎁\n\n💛 Elegant & timeless design\n💛 Perfect for couples & loved ones\n💛 A beautiful everyday accessory',
    'Korean Style Earrings': 'Minimalist, elegant, and effortlessly trendy! ✨ Upgrade your everyday look with Korean-style earrings from Bloom and Shine. minimum order 2 pair.',
    'Tulip Pendant Necklace': '✨ Elegance that speaks for itself ✨\nAdd a touch of timeless elegance to your look with our Elegant Black & Gold Tulip Pendant Necklace. 🖤✨\n\n🌸 Stylish & Minimal Design\n✨ Perfect for Everyday & Special Occasions\n🎁 A perfect gift for someone special.',
    'Sleek Bar Pendant': 'A story of quiet luxury, written in gold. 📖✨ Pair your daily mood with the timeless simplicity of our sleek bar pendant. Designed for those who appreciate subtle beauty—let your charm Bloom and Shine.',
    'Necklace With Earring': 'Small details. Big difference. ✨\n\nA perfect Earring & Necklace Combo to add that effortless touch of elegance to your everyday look. 🤍\n\nWear it. Style it. Shine your way. ✨\n\nBloom & Shine\nWhere every little detail shines. 💫',
    'Classic French Tip Press-On Nails': 'Elegance at your fingertips! ✨🌸\nSay goodbye to expensive salon visits! Our new Shimmer French Manicure Press-On Set brings you instant glam with zero hassle. Perfect for everyday wear, special occasions, or whenever you want your hands to bloom & shine!\n\nWhy you’ll love them:\nEasy to apply & remove\nPremium quality & reusable\nInstant French manicure look.',
    'Heart Bracelet With Necklace': '💖 A perfect combo made with love! ✨\n\nIntroducing the Heart Bracelet & Heart Necklace Combo from Bloom & Shine — featuring an elegant heart design with a delicate shine for a classy, timeless look. 🌸\n\n🎁 Perfect for yourself or as a beautiful gift for someone special!\n✨ Stylish • Elegant • Perfect Gift.'
};

const productImageMap = {
    'Tulip Bracelet': ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg', 'images/4.jpeg', 'images/5.jpeg'],
    'Golden Heart Necklace': ['images/golden-heart-1.jpeg', 'images/golden-heart-2.jpeg', 'images/golden-heart-3.jpeg', 'images/golden-heart-4.jpeg'],
    'Korean Style Earrings': ['images/korean-style-1.jpeg', 'images/korean-style-2.jpeg', 'images/korean-style-3.jpeg', 'images/korean-style-4.jpeg', 'images/korean-style-5.jpeg', 'images/korean-style-6.jpeg'],
    'Tulip Pendant Necklace': ['images/tulip-pendant-1.jpg', 'images/tulip-pendant-2.jpg', 'images/tulip-pendant-3.jpg', 'images/tulip-pendant-4.jpg'],
    'Sleek Bar Pendant': ['images/sleek-bar-1.jpg', 'images/sleek-bar-2.jpg', 'images/sleek-bar-3.jpg', 'images/sleek-bar-4.jpg'],
    'Necklace With Earring': ['images/necklace-earring-170-1.png', 'images/necklace-earring-170-2.png', 'images/necklace-earring-170-3.png', 'images/necklace-earring-170-4.png', 'images/necklace-earring-170-5.png', 'images/necklace-earring-170-6.png'],
    'Classic French Tip Press-On Nails': ['images/Classic French Tip Press-On Nails/1.jpeg', 'images/Classic French Tip Press-On Nails/2.jpeg'],
    'Necklace With Earring 2': ['images/Necklace With Earring 2/1.jpeg', 'images/Necklace With Earring 2/2.png', 'images/Necklace With Earring 2/3.png', 'images/Necklace With Earring 2/4.jpeg', 'images/Necklace With Earring 2/5.png', 'images/Necklace With Earring 2/6.png'],
    'Heart Bracelet With Necklace': ['images/Heart Bracelet With Necklace/1.jpg', 'images/Heart Bracelet With Necklace/2.jpg', 'images/Heart Bracelet With Necklace/3.jpg', 'images/Heart Bracelet With Necklace/4.jpg']
};

function getProductImages(name) {
    const normalizedName = name.trim();
    return productImageMap[normalizedName] || [
        'images/logo.png'
    ];
}

function selectModalImage(index) {
    const modalImage = document.getElementById('modalImage');
    const modalThumbs = document.querySelectorAll('.modal-thumb');
    const galleryImages = productImageMap[document.getElementById('modalName').innerText] || [];

    if (!galleryImages.length || !modalImage) return;

    const safeIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
    modalImage.src = galleryImages[safeIndex];

    modalThumbs.forEach((thumb, thumbIndex) => {
        thumb.classList.toggle('active', thumbIndex === safeIndex);
    });
}

function openProduct(
    name,
    category,
    price,
    description,
    images = []
) {

    const modalImage = document.getElementById("modalImage");
    const modalThumbs = document.getElementById("modalThumbs");
    const gallery = images.length ? images : getProductImages(name);

    document.getElementById("modalName").innerText =
        name;

    document.getElementById("modalCategory").innerText =
        category;

    document.getElementById("modalPrice").innerText =
        price;

    document.getElementById("modalDescription").innerText =
        description || productDescriptions[name] || '';

    modalImage.src = gallery[0] || 'images/logo.png';
    modalThumbs.innerHTML = '';

    gallery.forEach((imageSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imageSrc;
        thumb.alt = name + ' image ' + (index + 1);
        thumb.className = 'modal-thumb' + (index === 0 ? ' active' : '');
        thumb.addEventListener('click', () => {
            modalImage.src = imageSrc;
            document.querySelectorAll('.modal-thumb').forEach((item, itemIndex) => {
                item.classList.toggle('active', itemIndex === index);
            });
        });
        modalThumbs.appendChild(thumb);
    });

    const message =
        "Hello Bloom & Shine!%0A%0A" +
        "I would like to order:%0A" +
        name + "%0A%0A" +
        "Price: " + price;


    const whatsappLink =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


    document.getElementById("modalOrder").href =
        whatsappLink;
    
    document.getElementById("modalOrder").target =
        "_blank";


    const modal = document.getElementById("productModal");
    document.body.style.overflow = 'hidden';
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("active");

}

function bindProductImageClicks() {
    document.querySelectorAll('.carousel-main-img').forEach((image) => {
        image.addEventListener('click', () => {
            const card = image.closest('.product-card');
            const name = card.querySelector('h3')?.textContent?.trim() || '';
            const category = card.querySelector('.product-category')?.textContent?.trim() || '';
            const price = card.querySelector('.price')?.textContent?.trim() || '';
            const gallery = getProductImages(name);
            const description = productDescriptions[name] || card.dataset.description || '';
            openProduct(name, category, price, description, gallery);
        });
    });
}

bindProductImageClicks();


// ===============================
// CLOSE PRODUCT
// ===============================

function closeProduct() {

    document.body.style.overflow = '';
    document.getElementById("productModal")
        .style.display = "none";

}


// ===============================
// CLOSE WHEN CLICKING OUTSIDE
// ===============================

window.onclick = function(event) {

    const modal =
        document.getElementById("productModal");

    if (event.target === modal) {

        closeProduct();

    }

};


// ===============================
// KEYBOARD NAVIGATION
// ===============================

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeProduct();
    }
});