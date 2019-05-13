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
let navItems = nav.querySelectorAll('a');
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

navItems.forEach(item => item.style.color = 'green');

// cta
let cta = document.querySelector('.cta');
let ctaText = document.querySelector('.cta-text');
let ctaH1 = ctaText.querySelector('h1');
ctaH1.textContent = siteContent.cta.h1;

let ctaButton = ctaText.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

// main content
let mainContent = document.querySelector('.main-content');
let featuresContent = mainContent.querySelector('.top-content').children[0];
let featuresH4 = featuresContent.querySelector('.text-content h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresText = featuresContent.querySelector('.text-content p');
featuresText.textContent = siteContent["main-content"]["features-content"];

let aboutContent = mainContent.querySelector('.top-content').children[1];
let aboutH4 = aboutContent.querySelector('.text-content h4');
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutText = aboutContent.querySelector('.text-content p');
aboutText.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContent = mainContent.querySelector('.bottom-content');
let servicesContent = bottomContent.children[0];
let servicesH4 = servicesContent.querySelector('.text-content h4');
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesText = servicesContent.querySelector('.text-content p');
servicesText.textContent = siteContent["main-content"]["services-content"];

let productContent = bottomContent.children[1];
let productH4 = productContent.querySelector('.text-content h4');
productH4.textContent = siteContent["main-content"]["product-h4"];

let productText = productContent.querySelector('.text-content p');
productText.textContent = siteContent["main-content"]["product-content"];

let visionContent = bottomContent.children[2];
let visionH4 = visionContent.querySelector('.text-content h4');
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionText = visionContent.querySelector('.text-content p');
visionText.textContent = siteContent["main-content"]["vision-content"];

// contact
let contact = document.querySelector('.contact');
let contactH4 = contact.querySelector('h4');
contactH4.textContent = siteContent.contact["contact-h4"];

let address = contact.getElementsByTagName('p')[0];
address.textContent = siteContent.contact.address;

let phone = contact.getElementsByTagName('p')[1];
phone.textContent = siteContent.contact.phone;

let email = contact.getElementsByTagName('p')[2];
email.textContent = siteContent.contact.email;

// footer
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent.footer.copyright;
