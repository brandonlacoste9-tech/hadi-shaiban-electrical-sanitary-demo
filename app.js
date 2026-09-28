const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "04 397 9900",
  "hero.kicker": "Al Karama, Dubai · Electrical &amp; sanitary installation",
  "hero.title": "Your wiring and plumbing,<br>installed right.",
  "hero.sub": "Electrical and sanitary installation plus handyman maintenance — professional work for homes and offices across Dubai. Open Monday to Saturday, 8 AM to 8 PM.",
  "hero.cta1": "Book a visit", "hero.cta2": "See services",
  "trust.t1t": "Open Mon – Sat", "trust.t1d": "8:00 AM – 8:00 PM",
  "trust.t2t": "Electrical · Sanitary", "trust.t2d": "Installation &amp; maintenance",
  "trust.t3t": "Home &amp; office visits", "trust.t3d": "Serving all of Dubai",
  "stats.samedayNum": "Mon – Sat", "stats.sameday": "open 6 days a week",
  "stats.tradesNum": "Electrical + sanitary", "stats.trades": "installation specialists",
  "stats.rateNum": "Al Karama", "stats.rate": "serving all Dubai",
  "stats.visitNum": "Quote first", "stats.visit": "clear pricing before work",
  "services.kicker": "What we do", "services.title": "Installation and repair, done right",
  "services.s1t": "Electrical installation", "services.s1d": "New wiring, panels and sockets — installed to a professional standard.",
  "services.s2t": "Sanitary installation", "services.s2d": "Bathroom and kitchen sanitary fittings — installed cleanly and correctly.",
  "services.s3t": "Plumbing repairs", "services.s3d": "Leaks, blockages and faulty fittings — repaired quickly and neatly.",
  "services.s4t": "Electrical repairs", "services.s4d": "Fault finding and repairs for switches, sockets and circuits.",
  "services.s5t": "Lighting &amp; fixtures", "services.s5d": "Indoor and outdoor lighting installed and repaired.",
  "services.s6t": "Home maintenance", "services.s6d": "General handyman and maintenance work for homes and offices.",
  "why.kicker": "Why choose us", "why.title": "Installed right the first time",
  "why.intro": "Electrical and sanitary work needs to be done right — our team installs and repairs with care, and you approve the price before we begin.",
  "why.l1t": "Upfront pricing", "why.l1d": "You approve the price before we begin — no surprises.",
  "why.l2t": "Experienced team", "why.l2d": "Electrical and sanitary installation is all we do — we know it inside out.",
  "why.l3t": "Homes and offices", "why.l3d": "Villas, apartments and workplaces — we serve all of Dubai from Al Karama.",
  "why.l4t": "Easy to reach", "why.l4d": "Based in Al Karama — call or WhatsApp on 04 397 9900.",
  "gallery.kicker": "Our work", "gallery.title": "Neat work, done properly",
  "gallery.c1": "Electrical panels installed safely and neatly",
  "gallery.c2": "Sanitary fittings, clean finish",
  "gallery.c3": "Tap and fitting repairs without the mess",
  "reviews.kicker": "What people say", "reviews.title": "Trusted across Dubai",
  "reviews.more": "Find us on Google — see our location and reviews",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What are your opening hours?",
  "faq.a1": "We are open Monday to Saturday, 8:00 AM to 8:00 PM, and closed on Sundays.",
  "faq.q2": "Which areas do you serve?",
  "faq.a2": "We are based in Al Karama and serve homes and offices across Dubai — villas, apartments and workplaces.",
  "faq.q3": "Do you give quotes before starting?",
  "faq.a3": "Yes — you approve the price before we begin any work. No surprises.",
  "faq.q4": "How do I book a visit?",
  "faq.a4": "Call or WhatsApp us on 04 397 9900 and tell us what needs fixing — we will take it from there.",
  "contact.kicker": "Get in touch", "contact.title": "Book your visit",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Sat: 8:00 AM – 8:00 PM<br>Sun: closed",
  "contact.cta": "Call to book", "contact.cta2": "WhatsApp us",
  "footer.tag": "Electrical &amp; sanitary installation · Al Karama, Dubai"
}};

document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.getAttribute("data-i18n");
  const val = I18N.en[key];
  if (val !== undefined) el.innerHTML = val;
  else console.warn("missing i18n key:", key);
});

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
