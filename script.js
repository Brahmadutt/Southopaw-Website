const milestones = [
  {
    title: "Attract",
    description: "Launch search, paid, and social systems that pull the right audience in.",
    color: "#4038ff",
  },
  {
    title: "Engage",
    description: "Shape creator campaigns and creative funnels that hold attention longer.",
    color: "#7a24ff",
  },
  {
    title: "Convert",
    description: "Design experiences and landing flows that move traffic into action.",
    color: "#d615d0",
  },
  {
    title: "Scale",
    description: "Use data, AI, and automation to compound growth across every channel.",
    color: "#ff2d73",
  },
];

const capabilities = [
  { label: "Influencer Marketing", color: "#ff9a57" },
  { label: "Brand Growth", color: "#b56bff" },
  { label: "Social Media", color: "#57ffb0" },
  { label: "Media Planning", color: "#69a4ff" },
];

const team = [
  {
    name: "Rakesh Kurup",
    role: "Founder",
    bio: "Leads Southpaw Media's vision across AI-driven marketing, growth strategy, and premium digital execution.",
    image: "assets/rakesh.png",
    initials: "RK",
    accent: "linear-gradient(135deg, #4038ff, #8f20ff)",
  },
  {
    name: "Gurudutt S",
    role: "Co-Founder",
    bio: "Drives creative systems, brand storytelling, and campaign direction across performance and content ecosystems.",
    image: "assets/guru.png",
    initials: "GS",
    accent: "linear-gradient(135deg, #8f20ff, #ff1ba8)",
  },
  {
    name: "Priyanka Purushothaman",
    role: "Co-Founder",
    bio: "Oversees product builds, technical delivery, and automation workflows that turn strategy into scalable growth.",
    image: "assets/kavitha.png",
    initials: "PP",
    accent: "linear-gradient(135deg, #ff1ba8, #ff4061)",
  },
];

const clientLogos = [
  { name: "KFC", image: "assets/kfc.png" },
  { name: "Mainstream TV", image: "assets/mainstream-tv.jpg" },
  { name: "ACFS", image: "assets/acfs-logo.png" },
  { name: "Kerala Tourism", image: "assets/keralatourism-logo.png" },
  { name: "Verve", image: "https://placehold.co/200x80/transparent/FFFFFF/png?text=Verve&font=Outfit" },
  { name: "Nexus", image: "https://placehold.co/200x80/transparent/FFFFFF/png?text=Nexus&font=Outfit" },
  { name: "Aether", image: "https://placehold.co/200x80/transparent/FFFFFF/png?text=Aether&font=Outfit" },
  { name: "Zenith", image: "https://placehold.co/200x80/transparent/FFFFFF/png?text=Zenith&font=Outfit" },
];

const testimonials = [
  {
    name: "Sami",
    company: "Speedway, Calicut",
    role: "MD",
    message: "Associating with Southpaw Media for our Influencer Marketing campaign has been an outstanding for our Speedway. Their team's strategic approach and dedication helped us reach our target audience effectively. The influencers they connected us with were a perfect fit, and the results exceeded our expectations. Highly recommend their services for anyone looking to boost their brand through influencer partnerships!",
    image: "assets/client-1.png",
    rating: 5,
    initials: "S",
    accent: "linear-gradient(135deg, #4038ff, #8f20ff)",
  },
  {
    name: "Siva",
    company: "Mainstream TV, Bangalore",
    role: "Founder & CEO",
    message: "Partnering with Southpaw Media Performance Marketing Agency was a game-changer for our business! Their data-driven strategies and expert team helped us achieve remarkable results. The campaigns they ran were highly targeted and delivered excellent ROI. I highly recommend Southpaw for anyone looking to take their marketing performance to the next level!",
    image: "assets/client-2.png",
    rating: 5,
    initials: "S",
    accent: "linear-gradient(135deg, #8f20ff, #ff1ba8)",
  },
  {
    name: "Mervin Paul",
    company: "Bake-A-Holic",
    role: "Director",
    message: "Working with Southpaw Media for our product launch was an outstanding experience! Their expertise in influencer marketing took our FMCG brand, Bake-A-Holic, to new heights. The team at Southpaw Media truly understands the pulse of the market and delivered exceptional results. We couldn't be happier with the outcome of our collaboration. Thank you, Southpaw Media, for your dedication and creativity in making our product launch a huge success!",
    image: "assets/client-3.png",
    rating: 5,
    initials: "M",
    accent: "linear-gradient(135deg, #ff1ba8, #ff4061)",
  },
];

const services = [
  {
    title: "Influencer Marketing",
    description: "Connect your brand with the exact right audience through powerful influencer collaborations. We identify, manage, and execute campaigns with creators who truly resonate with your target market.",
    image: "assets/service-influencer.png",
    alt: "Influencer marketing 3D smartphone asset",
    highlights: ["Influencer Discovery", "Campaign Negotiation", "Content Collaboration", "ROI Tracking"]
  },
  {
    title: "Brand Growth",
    description: "We craft compelling brand identities and creative strategies that differentiate you in a competitive market, scaling your online presence through data-backed methodologies.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    alt: "Abstract 3D brand identity shapes",
    highlights: ["Startup Scaling", "Market Positioning", "Audience Development", "Long-term Strategy"]
  },
  {
    title: "Social Media Management",
    description: "Build an engaged community around your brand. We handle end-to-end social media strategies, from content calendaring to community moderation and virality loops.",
    image: "assets/service-marketing.png",
    alt: "Social media dashboard",
    highlights: ["Content Strategy", "Community Engagement", "Platform Growth", "Analytics & Reporting"]
  },
  {
    title: "Media Planning",
    description: "Maximize your advertising budget with precision media planning. We identify the highest-converting active channels and allocate spend to guarantee maximum ROI for your campaigns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    alt: "Media planning analytics",
    highlights: ["Budget Allocation", "Cross-Channel Strategy", "Audience Targeting", "Performance Tracking"]
  },
  {
    title: "Infilm Branding",
    description: "Seamlessly integrate your product into major film and web series productions. Enhance brand recall with native, non-intrusive placements that audiences love.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    alt: "Infilm branding cinema",
    highlights: ["Script Integration", "Production Outreach", "On-Screen Placement", "Brand Association"]
  },
  {
    title: "Ad Shoot",
    description: "Produce TV-quality commercial ad shoots. Our experienced creative production crew handles everything from scripting and casting to final post-production and VFX.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=600&q=80",
    alt: "Professional ad shoot production",
    highlights: ["Creative Direction", "Cinematography", "Casting & Locations", "Post-Production Edit"]
  },
  {
    title: "Product Launch",
    description: "Make an unforgettable entrance. We orchestrate massive digital and physical product launches that capture market attention and drive immediate sales momentum.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    alt: "Exciting product launch event",
    highlights: ["Pre-Launch Hype", "Launch Day Operations", "PR Distribution", "Sustained Momentum"]
  }
];

const portfolio = [
  {
    title: "KFC Influencer Marketing Campaign",
    description: "A high-impact influencer strategy that drove massive brand growth and engagement for KFC. We leveraged a targeted network of creators to reach millions, establishing a new standard for viral ROI.",
    tags: ["Influencer Marketing", "Brand Growth", "Viral ROI"],
    image: "assets/kfc-compain.png",
    alt: "KFC Influencer Marketing Campaign Showcase"
  },
  {
    title: "Kerala Tourism Influencer Campaign",
    description: "A signature influencer marketing initiative for Kerala Tourism (God's Own Country). We designed a high-impact storytelling campaign that drove record-breaking digital engagement and tourist interest across global markets.",
    tags: ["Influencer Marketing", "Travel Marketing", "Brand Growth"],
    image: "assets/kerala-tourisom.png",
    alt: "Kerala Tourism Influencer Campaign showcase"
  },
  {
    title: "ACSF Digital Transformation",
    description: "We built a robust digital marketing and e-commerce platform for the Attappady Co-operative Farming Society (ACSF). This unified system integrated digital storefronts with supply chain transparency, significantly boosting brand growth and community economic impact.",
    tags: ["E-commerce", "Digital Marketing", "Platform Build"],
    image: "assets/acsf-ecom.png",
    alt: "ACSF Digital Marketing and E-commerce Platform showcase"
  }
];

const renderMilestones = () => {
  const container = document.querySelector("#milestones");
  if (!container) return;

  container.innerHTML = milestones
    .map(
      (item) => `
        <article class="milestone">
          <span class="milestone-dot" style="color:${item.color}; background:${item.color};"></span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
};

const renderCapabilities = () => {
  const container = document.querySelector("#capability-pills");
  if (!container) return;

  container.innerHTML = capabilities
    .map(
      (item) => `
        <span class="capability-pill">
          <i style="background:${item.color}; box-shadow:0 0 14px ${item.color};"></i>
          ${item.label}
        </span>
      `
    )
    .join("");
};

const renderTeam = () => {
  const container = document.querySelector("#team-grid");
  if (!container) return;

  container.innerHTML = team
    .map(
      (person, index) => `
        <article class="team-card card-pop" style="--card-delay:${index * 110}ms;">
          <div class="team-avatar" style="background:${person.accent};">
            ${person.image ? `<img src="${person.image}" alt="${person.name}" loading="lazy" />` : person.initials}
          </div>
          <span class="team-role">${person.role}</span>
          <h3>${person.name}</h3>
          <p>${person.bio}</p>
        </article>
      `
    )
    .join("");
};

const renderClientLogos = () => {
  const container = document.querySelector("#logo-track");
  if (!container) return;

  const items = [...clientLogos, ...clientLogos];

  container.innerHTML = items
    .map(
      (item) => `
        <div class="logo-item" aria-label="${item.name}">
          <img src="${item.image}" alt="${item.name} logo" loading="lazy" class="client-logo-img" />
        </div>
      `
    )
    .join("");
};

const renderTestimonials = () => {
  const container = document.querySelector("#testimonial-grid");
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (item, index) => `
        <article class="testimonial-card card-pop" style="--card-delay:${index * 110}ms;">
          <div class="testimonial-header">
            <div class="testimonial-logo" style="background:${item.accent};">
              ${item.image ? `<img src="${item.image}" alt="${item.name}" loading="lazy" />` : item.initials}
            </div>
            <div class="testimonial-meta">
              <strong>${item.name}</strong>
              <span>${item.role}, ${item.company}</span>
              <div class="testimonial-rating">
                ${Array(5).fill('<svg viewBox="0 0 24 24" width="14" height="14" fill="#FFD700"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>').join('')}
              </div>
            </div>
          </div>
          <p>${item.message}</p>
        </article>
      `
    )
    .join("");
};

const renderBackgroundParticles = () => {
  const container = document.querySelector("#particle-field");
  if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const colors = ["#4038ff", "#8f20ff", "#ff1ba8", "#ff4061"];
  const count = window.innerWidth < 720 ? 18 : 34;

  container.innerHTML = Array.from({ length: count }, (_, index) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 2 + Math.random() * 4;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * -12;
    const drift = Math.round(Math.random() * 120 - 60);
    const color = colors[index % colors.length];

    return `
      <span
        class="bg-particle"
        style="
          left:${left}%;
          top:${top}%;
          width:${size}px;
          height:${size}px;
          background:${color};
          box-shadow:0 0 14px ${color};
          animation-duration:${duration}s;
          animation-delay:${delay}s;
          --drift-x:${drift}px;
        "
      ></span>
    `;
  }).join("");
};

let showAllServices = false;

const renderServices = () => {
  const container = document.querySelector("#service-list");
  if (!container) return;

  const displayedServices = showAllServices ? services : services.slice(0, 4);

  container.innerHTML = displayedServices
    .map(
      (item, index) => `
        <article class="service-item card-pop" style="--card-delay:${index * 110}ms;">
          <div class="service-item-media">
            <img src="${item.image}" alt="${item.alt}" loading="lazy" />
          </div>
          <div class="service-item-content">
            <div class="service-item-header">
              <div class="service-item-badge">0${index + 1}</div>
              <h3>${item.title}</h3>
            </div>
            <p>${item.description}</p>
            <ul class="service-highlights">
              ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");

  const btn = document.querySelector("#view-all-services-btn");
  if (btn) {
    btn.textContent = showAllServices ? "View Less Services" : "View All Services";
  }
};

const setupServicesToggle = () => {
  const btn = document.querySelector("#view-all-services-btn");
  if (!btn) return;
  
  btn.addEventListener("click", () => {
    showAllServices = !showAllServices;
    renderServices();
    setTimeout(() => setupCardPopAnimations(), 50);
  });
};

const renderPortfolio = () => {
  const container = document.querySelector("#portfolio-grid");
  if (!container) return;

  container.innerHTML = portfolio
    .map(
      (item, index) => `
        <article class="portfolio-card card-pop" style="--card-delay:${index * 110}ms;">
          <div class="portfolio-image">
            <img src="${item.image}" alt="${item.alt}" loading="lazy" />
          </div>
          <div class="portfolio-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="portfolio-tags">
              ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const setupCardPopAnimations = () => {
  const cards = document.querySelectorAll(".card-pop");
  if (!cards.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => card.classList.add("card-pop-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-pop-visible");
        } else {
          entry.target.classList.remove("card-pop-visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  cards.forEach((card) => observer.observe(card));
};

const revealOnScroll = () => {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  nodes.forEach((node) => observer.observe(node));
};

const setupActiveNavigation = () => {
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!navLinks.length || !sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const matches = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", matches);
      if (matches) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActiveSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.3;

    let currentSection = sections[0];

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        currentSection = section;
      }
    });

    setActive(currentSection.id);
  };

  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);
};

const setupForms = () => {
  const contactForm = document.querySelector("#contact-form");
  const formNote = document.querySelector("#form-note");

  if (contactForm && formNote) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = new FormData(contactForm).get("name")?.toString().trim() || "there";
      formNote.textContent = `Thanks, ${name}. Southpaw Media has your message and will be in touch soon.`;
      contactForm.reset();
    });
  }
};

renderMilestones();
renderCapabilities();
renderTeam();
renderClientLogos();
renderTestimonials();
renderBackgroundParticles();
setupServicesToggle();
renderServices();
renderPortfolio();
revealOnScroll();
setupCardPopAnimations();
setupActiveNavigation();
setupForms();

window.addEventListener("resize", renderBackgroundParticles);
