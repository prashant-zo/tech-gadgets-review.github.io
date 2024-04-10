// Gadgets data from JSON
const gadgetsData = {
    "products": [
        {
          "name": "iPhone 13",
          "image": "images/iphone13.jpg",
          "overview": "The iPhone 13 features a Super Retina XDR display, A15 Bionic chip, advanced dual-camera system, and all-day battery life.",
          "specs": [
            "6.1-inch Super Retina XDR display",
            "A15 Bionic chip with Neural Engine",
            "Dual-camera system with 12MP Ultra Wide and Wide cameras",
            "All-day battery life"
          ],
          "pros": [
            "Excellent camera performance",
            "Powerful A15 Bionic chip",
            "All-day battery life"
          ],
          "cons": [
            "No charger included in the box",
            "High starting price"
          ]
        },
        {
          "name": "Galaxy S21 Ultra",
          "image": "images/galaxy S21 Ultra.jpg",
          "overview": "The Galaxy S21 Ultra features a 108MP quad-camera system, 120Hz Dynamic AMOLED display, powerful Exynos 2100 processor, and S Pen support.",
          "specs": [
            "6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate",
            "108MP quad-camera system with 100x Space Zoom",
            "Exynos 2100 (Global) / Snapdragon 888 (USA) chipset",
            "5000mAh battery"
          ],
          "pros": [
            "Impressive camera performance",
            "High-resolution display with smooth refresh rate",
            "Powerful performance"
          ],
          "cons": [
            "Expensive",
            "Large and heavy form factor"
          ]
        },
        {
          "name": "iPad Air",
          "image": "images/ipad.jpg",
          "overview": "The iPad Air features a stunning Liquid Retina display, A14 Bionic chip with Neural Engine, Touch ID, and support for Apple Pencil and Magic Keyboard.",
          "specs": [
            "10.9-inch Liquid Retina display",
            "A14 Bionic chip with Neural Engine",
            "Touch ID fingerprint sensor",
            "Support for Apple Pencil (2nd generation) and Magic Keyboard"
          ],
          "pros": [
            "Beautiful display",
            "Powerful performance",
            "Support for Apple Pencil and Magic Keyboard"
          ],
          "cons": [
            "No Face ID",
            "Higher-priced compared to base iPad"
          ]
        },
        {
          "name": "Galaxy Tab S7",
          "image": "images/Galaxy Tab S7.jpg",
          "overview": "The Galaxy Tab S7 features a stunning 11-inch LTPS TFT display, Snapdragon 865+ processor, S Pen support, and Dolby Atmos audio.",
          "specs": [
            "11-inch LTPS TFT display",
            "Snapdragon 865+ processor",
            "S Pen support with improved latency",
            "Dolby Atmos quad speakers"
          ],
          "pros": [
            "High-quality display",
            "Powerful processor",
            "Included S Pen with low latency"
          ],
          "cons": [
            "Expensive accessories",
            "No headphone jack"
          ]
        },
        {
          "name": "Apple Watch Series 7",
          "image": "images/Apple Watch Series 7.jpg",
          "overview": "The Apple Watch Series 7 features a larger Always-On Retina display, faster charging, new workout types, and advanced health monitoring.",
          "specs": [
            "Always-On Retina display with 20% more screen area",
            "Faster charging with USB-C cable",
            "New workout types including Tai Chi and Pilates",
            "Advanced health monitoring features"
          ],
          "pros": [
            "Larger and brighter display",
            "Fast charging capability",
            "Wide range of health and fitness features"
          ],
          "cons": [
            "Limited battery life",
            "Requires compatible iPhone"
          ]
        },
        {
          "name": "Galaxy Watch 4",
          "image": "images/Galaxy Watch 4.jpg",
          "overview": "The Galaxy Watch 4 features a stylish design, advanced health tracking, ECG monitoring, and seamless integration with Samsung Galaxy devices.",
          "specs": [
            "Circular Super AMOLED display",
            "Advanced health tracking including ECG monitoring",
            "Built-in GPS and NFC for contactless payments",
            "Seamless integration with Samsung Galaxy devices"
          ],
          "pros": [
            "Stylish design with customizable watch faces",
            "Comprehensive health and fitness tracking",
            "Long battery life"
          ],
          "cons": [
            "Limited third-party app support",
            "May not be compatible with non-Samsung devices"
          ]
        },
        {
          "name": "MacBook Pro",
          "image": "images/MacBook Pro.jpg",
          "overview": "The MacBook Pro features the powerful M1 Pro or M1 Max chip, stunning Liquid Retina XDR display, and up to 21 hours of battery life.",
          "specs": [
            "M1 Pro or M1 Max chip with up to 10-core CPU and 32-core GPU",
            "Stunning Liquid Retina XDR display with ProMotion technology",
            "Up to 21 hours of battery life",
            "Advanced thermal design for sustained performance"
          ],
          "pros": [
            "Incredible performance with M1 Pro or M1 Max chip",
            "Beautiful display with high brightness and contrast ratio",
            "Long battery life for all-day usage"
          ],
          "cons": [
            "Limited port selection (USB-C only)",
            "Expensive compared to other laptops"
          ]
        },
        {
          "name": "Surface Laptop Studio",
          "image": "images/Surface Laptop Studio.jpg",
          "overview": "The Surface Laptop Studio features a 14.4-inch PixelSense Flow display, 11th Gen Intel Core processor, and versatile design with Studio Mode.",
          "specs": [
            "14.4-inch PixelSense Flow touchscreen display",
            "11th Gen Intel Core i5 or i7 processor",
            "Versatile design with Studio Mode for creative work",
            "Up to 32GB of RAM and 2TB of SSD storage"
          ],
          "pros": [
            "Innovative design with versatile usage modes",
            "High-resolution touchscreen display",
            "Powerful performance for multitasking"
          ],
          "cons": [
            "Limited port selection",
            "High starting price"
          ]
        },
        {
          "name": "Pixel 6 Pro",
          "image": "images/Pixel 6 Pro.jpg",
          "overview": "The Pixel 6 Pro features a 6.7-inch QHD+ LTPO OLED display, Tensor chip for AI and ML capabilities, and advanced camera system with 50MP main sensor.",
          "specs": [
            "6.7-inch QHD+ LTPO OLED display with 120Hz refresh rate",
            "Tensor chip with AI and ML capabilities",
            "Triple camera system with 50MP main sensor, 12MP ultra-wide, and 48MP telephoto",
            "IP68 water and dust resistance"
          ],
          "pros": [
            "Beautiful design with premium materials",
            "Impressive camera performance",
            "Smooth performance with Tensor chip"
          ],
          "cons": [
            "Average battery life",
            "No expandable storage option"
          ]
        },
        {
          "name": "AirPods Pro",
          "image": "images/Airpods Pro.jpg",
          "overview": "The AirPods Pro feature Active Noise Cancellation, Transparency mode, customizable fit, and immersive sound with Adaptive EQ.",
          "specs": [
            "Active Noise Cancellation for immersive sound",
            "Transparency mode for hearing the surroundings",
            "Customizable fit with three sizes of soft silicone tips",
            "Adaptive EQ for rich, immersive audio"
          ],
          "pros": [
            "Excellent active noise cancellation",
            "Comfortable and secure fit",
            "Immersive sound quality"
          ],
          "cons": [
            "Expensive compared to other earbuds",
            "Limited customization options"
          ]
        },
        {
          "name": "Samsung Odyssey G7 Monitor",
          "image": "images/Samsung Odyssey G7 Monitor.jpg",
          "overview": "The Samsung Odyssey G7 Monitor features a 240Hz QHD display, NVIDIA G-SYNC compatibility, and Infinity Core Lighting.",
          "specs": [
            "27-inch or 32-inch QHD (2560 x 1440) VA display",
            "240Hz refresh rate for smooth gaming",
            "NVIDIA G-SYNC compatibility for tear-free gaming",
            "Infinity Core Lighting for customizable RGB effects"
          ],
          "pros": [
            "High refresh rate for smooth gaming",
            "NVIDIA G-SYNC compatibility",
            "Customizable RGB lighting"
          ],
          "cons": [
            "Expensive",
            "Some users may prefer IPS panels for color accuracy"
          ]
        },
        {
          "name": "Galaxy Buds Pro",
          "image": "images/Galaxy Buds Pro.jpg",
          "overview": "The Galaxy Buds Pro feature intelligent active noise cancellation, immersive sound with 11mm woofer and 6.5mm tweeter, and long-lasting battery life.",
          "specs": [
            "Intelligent active noise cancellation with three microphones",
            "11mm woofer and 6.5mm tweeter for immersive sound",
            "Long-lasting battery life with up to 8 hours of playback",
            "IPX7 water and sweat resistance"
          ],
          "pros": [
            "Effective active noise cancellation",
            "Clear and immersive sound quality",
            "Comfortable fit for extended wear"
          ],
          "cons": [
            "Limited touch controls",
            "May not fit all ear shapes securely"
          ]
        },
        {
          "name": "XPS 13",
          "image": "images/XPS 13.jpg",
          "overview": "The XPS 13 features an InfinityEdge display, 11th Gen Intel Core processor, and premium materials for a sleek and durable design.",
          "specs": [
            "13.4-inch InfinityEdge display with narrow bezels",
            "11th Gen Intel Core i5 or i7 processor",
            "Up to 32GB of RAM and 2TB of SSD storage",
            "Premium materials including aluminum and carbon fiber"
          ],
          "pros": [
            "Stunning display with minimal bezels",
            "Powerful performance for multitasking",
            "Sleek and durable design"
          ],
          "cons": [
            "High starting price",
            "Limited port selection"
          ]
        },
        {
          "name": "ThinkPad X1 Carbon",
          "image": "images/Thinkpad X1 Carbon.jpg",
          "overview": "The ThinkPad X1 Carbon features a durable carbon fiber construction, Intel Evo platform for high performance and responsiveness, and legendary ThinkPad reliability.",
          "specs": [
            "14-inch 4K UHD or FHD display with Dolby Vision HDR",
            "Intel Core i5 or i7 processor with vPro technology",
            "Up to 32GB of LPDDR4x memory and 2TB PCIe SSD storage",
            "Durable carbon fiber construction with MIL-STD-810G certification"
          ],
          "pros": [
            "Exceptional build quality and durability",
            "Powerful performance for demanding tasks",
            "Excellent keyboard and trackpad"
          ],
          "cons": [
            "Expensive compared to other laptops",
            "Limited graphics performance for gaming"
          ]
        },
        {
          "name": "ROG Zephyrus G14",
          "image": "images/ROG Zephyrus G14.jpg",
          "overview": "The ROG Zephyrus G14 features an AMD Ryzen 9 processor, NVIDIA GeForce RTX graphics, and AniMe Matrix LED display for customizable lighting effects.",
          "specs": [
            "14-inch Full HD display with 120Hz refresh rate",
            "AMD Ryzen 9 5900HS processor with up to 4.6GHz boost clock",
            "NVIDIA GeForce RTX 3060 or RTX 3070 graphics",
            "AniMe Matrix LED display on the lid for customizable lighting effects"
          ],
          "pros": [
            "Powerful CPU and GPU performance",
            "Compact and portable design",
            "Customizable LED lighting effects"
          ],
          "cons": [
            "Limited battery life under heavy load",
            "No webcam"
          ]
        }
      ]
};

// Extract gadgets from the data
const gadgets = gadgetsData.products;

// Function to create HTML structure for a gadget
function createGadgetHTML(gadget) {
    return `
    <article>
        <h2>${gadget.name}</h2>
        <img src="${gadget.image}" alt="${gadget.name}">
        
        <section class="overview">
            <h3>Product Overview</h3>
            <p>${gadget.overview}</p>
        </section>
        
        <section class="specs">
            <h3>Specifications</h3>
            <ul>
                ${gadget.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </section>
        
        <section class="pros-cons">
            <h3>Pros and Cons</h3>
            <div class="pros">
                <h4>Pros</h4>
                <ul>
                    ${gadget.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </div>
            <div class="cons">
                <h4>Cons</h4>
                <ul>
                    ${gadget.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </div>
        </section>
        
        <section class="user-reviews">
            <h3>User Reviews</h3>
            <!-- User review form or display user reviews here -->
        </section>
    </article>
    `;
}

// Function to add gadgets to the main section
function addGadgetsToPage() {
    const main = document.querySelector('main');
    gadgets.forEach(gadget => {
        const gadgetHTML = createGadgetHTML(gadget);
        main.insertAdjacentHTML('beforeend', gadgetHTML);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('aboutLink');
    const popupContainer = document.getElementById('popupContainer');
    const closePopup = document.getElementById('closePopup');

    // Event listener for clicking on the "About" link
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        showPopup();
    });

    // Event listener for clicking on the close button of the popup
    closePopup.addEventListener('click', function() {
        hidePopup();
    });

    // Function to show the popup
    function showPopup() {
        popupContainer.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling of the main content
    }

    // Function to hide the popup
    function hidePopup() {
        popupContainer.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling of the main content
    }
});


// Call the function to add gadgets when the page loads
window.addEventListener('DOMContentLoaded', addGadgetsToPage);


