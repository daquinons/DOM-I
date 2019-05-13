const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
let nav = document.getElementsByTagName('nav')[0];
let navItems = nav.children;

// cta
let cta = document.querySelector('.cta');
let ctaText = document.querySelector('.cta-text');
let ctaH1 = ctaText.querySelector('h1');
let ctaButton = ctaText.querySelector('button');
let ctaImg = document.getElementById('cta-img');

// main content
let mainContent = document.querySelector('.main-content');
let featuresContent = mainContent.querySelector('.top-content').children[0];
let featuresH4 = featuresContent.querySelector('.text-content h4');
let featuresText = featuresContent.querySelector('.text-content p');

let aboutContent = mainContent.querySelector('.top-content').children[1];
let aboutH4 = aboutContent.querySelector('.text-content h4');
let aboutText = aboutContent.querySelector('.text-content p');

let middleImg = document.getElementById('middle-img');

let bottomContent = mainContent.querySelector('.bottom-content');
let servicesContent = bottomContent.children[0];
let servicesH4 = servicesContent.querySelector('.text-content h4');
let servicesText = servicesContent.querySelector('.text-content p');

let productContent = bottomContent.children[1];
let productH4 = productContent.querySelector('.text-content h4');
let productText = productContent.querySelector('.text-content p');

let visionContent = bottomContent.children[2];
let visionH4 = visionContent.querySelector('.text-content h4');
let visionText = visionContent.querySelector('.text-content p');

// contact
let contact = document.querySelector('.contact');
let contactH4 = contact.querySelector('h4');
let address = contact.getElementsByTagName('p')[0];
let phone = contact.getElementsByTagName('p')[1];
let email = contact.getElementsByTagName('p')[2];

// footer
let footerText = document.querySelector('footer p');
