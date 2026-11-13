
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PRIMARY_PHONE = "971504416171";
const SECONDARY_PHONE = "971545366667";
const WHATSAPP_PHONE = "971528266007";
const DISPLAY_PRIMARY_PHONE = "+971 50 441 6171";
const DISPLAY_SECONDARY_PHONE = "+971 54 536 6667";
const DISPLAY_WHATSAPP_PHONE = "+971 52 826 6007";
const CONTACT_EMAIL = "letstype2021@gmail.com";

const destinations = [
  {
    name: "UAE",
    subtitle: "United Arab Emirates",
    code: "AE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Saudi Arabia",
    subtitle: "Kingdom of Saudi Arabia",
    code: "SA",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Oman",
    subtitle: "Sultanate of Oman",
    code: "OM",
    image:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Qatar",
    subtitle: "State of Qatar",
    code: "QA",
    image:
      "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Bahrain",
    subtitle: "Kingdom of Bahrain",
    code: "BH",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Kuwait",
    subtitle: "State of Kuwait",
    code: "KW",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=85",
  },
];

const touristPlaces = [
  { title: "Burj Khalifa", location: "DOWNTOWN DUBAI", description: "Take in Dubai's skyline from the world-famous tower and explore the lively Downtown district around it.", image: "https://images.unsplash.com/photo-1643636181283-bb21ab13080f?auto=format&fit=crop&w=1000&q=85", alt: "Burj Khalifa rising above Dubai's skyline" },
  { title: "Museum of the Future", location: "DUBAI", description: "See the striking calligraphy-covered landmark and explore exhibitions imagining life in the years ahead.", image: "https://images.unsplash.com/photo-1687754715959-41fed2161528?auto=format&fit=crop&w=1000&q=85", alt: "Museum of the Future in Dubai" },
  { title: "Dubai Marina", location: "DUBAI", description: "Walk beside the waterfront, watch the boats and enjoy the district's cluster of modern towers and caf?s.", image: "https://images.unsplash.com/photo-1721801783844-e4b80e3c765c?auto=format&fit=crop&w=1000&q=85", alt: "Dubai Marina waterfront and skyline" },
  { title: "Desert Safari", location: "DUBAI & SURROUNDING DESERT", description: "Experience the open dunes and desert scenery on a guided outing outside the city.", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85", alt: "Golden desert dunes" },
  { title: "Sheikh Zayed Grand Mosque", location: "ABU DHABI", description: "Visit one of the UAE's most recognisable landmarks, known for its white marble, domes and detailed design.", image: "https://images.unsplash.com/photo-1669231755070-c526fdbc5194?auto=format&fit=crop&w=1000&q=85", alt: "Sheikh Zayed Grand Mosque in Abu Dhabi" },
  { title: "Louvre Abu Dhabi", location: "SAADIYAT ISLAND, ABU DHABI", description: "Explore art and exhibitions beneath the museum's distinctive geometric dome beside the water.", image: "https://images.unsplash.com/photo-1584947447982-bb55cd966ada?auto=format&fit=crop&w=1000&q=85", alt: "Louvre Abu Dhabi beside the water" },
  { title: "Burj Al Arab & Jumeirah Beach", location: "DUBAI", description: "Enjoy coastal views of Dubai's sail-shaped hotel and the nearby public beach area.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85", alt: "Dubai skyline near the coast" },
  { title: "Palm Jumeirah", location: "DUBAI", description: "Discover the island's waterfront promenades, resort views and attractions along the Palm.", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=85", alt: "Aerial view of Dubai's Palm Jumeirah" },
];

const visaTypes = [
  {
    title: "30 Day Tourist Visa",
    description: "For short visits and holidays. Ask our team about current options.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "60 Day Tourist Visa",
    description: "For a longer stay. Availability depends on current requirements.",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Multiple Entry Visa",
    description: "Ask about options for travel that includes more than one entry.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Family Visit Visa",
    description: "Guidance for enquiries about visiting family in the UAE.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Transit Visa",
    description: "For travellers stopping in the UAE on their way elsewhere.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Business Visit Visa",
    description: "Ask about a visit connected with meetings or business travel.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
];

const visaEnquiryServices = [
  "Visit & Tourist Visa",
  ...visaTypes.map((visa) => visa.title),
  "Other Visa Enquiry",
];

const services = [
  {
    icon: "\u270D",
    color: "orange",
    title: "Typing Services",
    description: "Government and private forms",
    details: "Get help completing application forms and preparing documents for government or private transactions.",
  },
  {
    icon: "\u25A3",
    color: "blue",
    title: "Document Clearance",
    description: "PRO services and transactions",
    details: "Ask about PRO support, document processing and the paperwork needed for common business and personal transactions.",
  },
  {
    icon: "\u2727",
    color: "purple",
    title: "Certificate Attestation",
    description: "Document attestation assistance",
    details: "Get guidance on preparing certificates and understanding the steps involved in attestation.",
  },
  {
    icon: "ID",
    color: "green",
    title: "Emirates ID Services",
    description: "New, renewal and correction assistance",
    details: "Find support for Emirates ID application, renewal or correction enquiries, including what information to prepare.",
  },
  {
    icon: "\u25B1",
    color: "pink",
    title: "Traffic Services",
    description: "Traffic-related service assistance",
    details: "Tell us what traffic or vehicle-related service you need and we'll help point you to the right next step.",
  },
  {
    icon: "\u2696",
    color: "cyan",
    title: "New Business Setup",
    description: "Company formation assistance",
    details: "Explore company formation support and get a clearer idea of the documents and steps your enquiry may involve.",
  },
  {
    icon: "\u2708",
    color: "blue",
    title: "Visit & Tourist Visa",
    description: "Visit visa and tourist visa enquiries",
    details: "Compare visit visa enquiries based on your travel plans, intended stay and the details of your trip.",
  },
  {
    icon: "+",
    color: "slate",
    title: "Housemaid Visa & Other Services",
    description: "Mawaqif, insurance, Tasheel and Tadbeer",
    details: "Ask our team about housemaid visa enquiries and other support such as Mawaqif, insurance, Tasheel and Tadbeer.",
  },
];

const serviceImages = [
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=700&q=85",
];

const processSteps = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "Select a visa or documentation service.",
  },
  {
    number: "02",
    title: "Submit Your Details",
    description: "Tell us what assistance you need.",
  },
  {
    number: "03",
    title: "Our Team Assists",
    description: "Our team reviews your enquiry and follows up.",
  },
  {
    number: "04",
    title: "Get an Update",
    description: "Receive updates about your request.",
  },
];

const servicesFAQs = [
  { q: "What services can I ask LET'S TYPE about?", a: "Our service directory covers typing, document clearance, certificate attestation, Emirates ID enquiries, traffic services, business setup, visit visas and other local support." },
  { q: "What information should I share for a typing request?", a: "Tell us which form or transaction you need help with and what stage you are at. Our team can let you know what information or documents to prepare." },
  { q: "Can you help with document clearance and PRO services?", a: "We can discuss your document or PRO service enquiry, understand the transaction you need help with, and explain the relevant next step." },
  { q: "Do you help with certificate attestation?", a: "Yes, you can ask our team about certificate attestation assistance. Share the document type and where it will be used so we can guide your enquiry." },
  { q: "Can I ask about Emirates ID applications or renewals?", a: "You can contact us about new, renewal or correction related assistance. The details required may depend on your situation." },
  { q: "What should I include in a business setup enquiry?", a: "Share the type of business you are considering, where you plan to operate and any steps you have already taken. We can help clarify what to ask next." },
  { q: "Can I enquire about visit or tourist visas?", a: "Yes. Include your nationality, current location, intended travel dates and planned stay. Our team can discuss available enquiry options and information to prepare." },
  { q: "How do I find out which service is right for me?", a: "Choose the closest service card or send a general enquiry. Describe what you are trying to do and our team will help direct you to the appropriate service." },
];

function buildWhatsAppUrl(message = "") {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
}

export default function SitePage({ pageKey = "home", initialService = "" }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService || "Visit & Tourist Visa");
  const [formMessage, setFormMessage] = useState("");

  const openEnquiry = (service = "General Enquiry") => {
    setMenuOpen(false);

    if (pageKey !== "visit-visa") {
      router.push(`/visit-visa?service=${encodeURIComponent(service)}`);
      return;
    }

    setSelectedService(service);
    setFormMessage("");
    document.getElementById("visa-enquiry")?.scrollIntoView({ behavior: "smooth" });
  };


  const generalWhatsAppUrl = buildWhatsAppUrl(
    "Hello, LET\u0027S TYPE team,\n\nI would like to enquire about your services. Please guide me on the available options and next steps.\n\nThank you."
  );

  const submitEnquiry = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const service = String(form.get("service") || "").trim();
    const country = String(form.get("country") || "").trim();
    const message = String(form.get("message") || "").trim();

    const whatsappMessage = [
      "Hello, LET\u0027S TYPE team,",
      "",
      "I would like help with this enquiry:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      ...(email ? [`Email: ${email}`] : []),
      `Service: ${service || "General enquiry"}`,
      `Destination: ${country || "Not provided"}`,
      `Details: ${message || "Please share more information about this service."}`,
      "",
      "Please let me know the requirements and next steps.",
      "Thank you.",
    ].join("\n");

    setFormMessage("Opening WhatsApp with your enquiry...");

    window.open(
      buildWhatsAppUrl(whatsappMessage),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="site-topbar">
        <div className="site-topbar-inner">
          <div className="topbar-rating" aria-label="Rate our service">
            <span className="topbar-rating-star" aria-hidden="true">&#9733;</span>
            <span>4.9/5 (2,300+ Reviews)</span>
          </div>
          <div className="topbar-contact" aria-label="Contact options">
            <div className="topbar-contact-pill">
              <a className="topbar-phone" href={`tel:${PRIMARY_PHONE}`}><span aria-hidden="true">&#9742;</span> {DISPLAY_PRIMARY_PHONE}</a>
              <a className="topbar-phone" href={`tel:${SECONDARY_PHONE}`}>{DISPLAY_SECONDARY_PHONE}</a>
              <a className="topbar-whatsapp" href={generalWhatsAppUrl} target="_blank" rel="noreferrer" aria-label={`Chat with us on WhatsApp at ${DISPLAY_WHATSAPP_PHONE}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.4-1.7a12 12 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7c-1.7 0-3.4-.5-4.8-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 1 1 8.2 4.6Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a7.8 7.8 0 0 1-2.3-1.4 8.6 8.6 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.1 3c.1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="LET'S TYPE home">
          <span className="brand-mark"><img className="brand-symbol" src="/logo-mark.png" alt="" /></span>
          <span className="brand-copy">
            <strong>LET&apos;S TYPE</strong>
            <small>TYPING SERVICES</small>
          </span>
        </Link>

        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link
            className={pageKey === "home" ? "nav-active" : ""}
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-icon" aria-hidden="true">&#127968;</span>
            Home
          </Link>
          <a className={pageKey === "visit-visa" ? "nav-active" : ""} href="/visit-visa" onClick={() => setMenuOpen(false)}>
            <span className="nav-icon" aria-hidden="true">&#128706;</span>
            Visit Visa
          </a>
          <a className={pageKey === "services" ? "nav-active" : ""} href="/services" onClick={() => setMenuOpen(false)}>
            <span className="nav-icon" aria-hidden="true">&#128196;</span>
            Our Services
          </a>
          <a className={pageKey === "about" ? "nav-active" : ""} href="/about" onClick={() => setMenuOpen(false)}>
            <span className="nav-icon" aria-hidden="true">&#10024;</span>
            About Us
          </a>
          <a className={pageKey === "contact" ? "nav-active" : ""} href="/contact" onClick={() => setMenuOpen(false)}>
            <span className="nav-icon" aria-hidden="true">&#128222;</span>
            Contact Us
          </a>
        </nav>

        <div className="header-actions">
          <a className="header-search-pill" href="/services"><span aria-hidden="true"></span> Explore Services</a>
          <a className="phone-pill" href={`tel:${PRIMARY_PHONE}`}>Call Us</a>
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "\u00D7" : "\u2630"}
        </button>
      </header>

      <main>
        {pageKey !== "home" && pageKey !== "contact" && (
          <section className={`page-masthead masthead-${pageKey}`}>
            <div className={pageKey === "visit-visa" ? "masthead-copy masthead-visa-copy" : pageKey === "services" ? "masthead-copy masthead-service-copy" : "masthead-copy"}>
              <span>LET&apos;S TYPE &#183; ABU DHABI</span>
              <h1>
                {{
                  "visit-visa": <>Apply for <em>Dubai Visa Online</em></>,
                  services: <>Support for the work <em>life brings.</em></>,
                  about: <>Here to Help You <em>Move Forward</em></>,
                  contact: <>Let&apos;s Start a <em>Conversation</em></>,
                }[pageKey]}
              </h1>
              <p>
                {{
                  "visit-visa": "Looking for a Dubai visa online? LET'S TYPE helps you compare UAE visa services based on your travel plans and supports you with document checks and application coordination. Final approval, processing time, validity and entry conditions are decided by the relevant UAE authorities.",
                  services: "From typing and document clearance to visa and business services, find friendly practical support in one place. Tell us what you need and our team will help you understand where to start.",
                  about: "Friendly, straightforward support for the paperwork that matters to you.",
                  contact: "Tell us what you need and our Abu Dhabi team will point you in the right direction.",
                }[pageKey]}
              </p>
              {pageKey === "visit-visa" && <>
                <div className="visa-hero-benefits">
                  <div><span>â™™</span><p><strong>Visa Options</strong><small>For Different Travel Needs</small></p></div>
                  <div><span>â™§</span><p><strong>Clear Guidance</strong><small>Stay, Entry &amp; Eligibility</small></p></div>
                  <div><span>â—·</span><p><strong>Document Support</strong><small>Checks Before Submission</small></p></div>
                  <div><span>â˜†</span><p><strong>UAE-Based Team</strong><small>Personal Visa Assistance</small></p></div>
                </div>
                <div className="visa-hero-actions">
                  <button type="button" onClick={() => openEnquiry("Visit & Tourist Visa")}>Ask the Visa Team <span>&#8594;</span></button>
                  <a href="#visa-options-title">Explore Visa Options <span>&#8599;</span></a>
                </div>
              </>}
              {pageKey === "services" && <>
                <div className="visa-hero-actions service-hero-actions">
                  <button type="button" onClick={() => openEnquiry("Other Services")}>Tell Us What You Need <span>&#8594;</span></button>
                  <a href="#services">Browse Services <span>&#8599;</span></a>
                </div>
              </>}
              <div className="masthead-breadcrumb"><Link href="/">Home</Link><span>&#8250;</span>{{ "visit-visa": "Visit Visa", services: "Our Services", about: "About Us", contact: "Contact Us" }[pageKey]}</div>
            </div>
            {pageKey === "visit-visa" && <aside className="quick-enquiry-card" id="visa-enquiry" aria-labelledby="visa-enquiry-title">
              <span className="quick-enquiry-kicker">QUICK ENQUIRY</span><h2 id="visa-enquiry-title">Start Your Visa Enquiry</h2>
              <p>Tell us where you are and when you plan to travel. Our team will help you understand the next steps.</p>
              <form className="quick-enquiry-form" onSubmit={submitEnquiry}>
                <input name="name" placeholder="Full Name" autoComplete="name" aria-label="Full name" required />
                <input name="email" type="email" placeholder="Email Address" autoComplete="email" aria-label="Email address" />
                <input name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" aria-label="Phone number" required />
                <input type="hidden" name="service" value={selectedService} />
                <textarea name="message" placeholder="Nationality, current location, travel date & intended stay" aria-label="Travel details" rows={3} />
                <button type="submit">Submit Enquiry <span aria-hidden="true">&#10148;</span></button>
                {formMessage && <small className="quick-enquiry-status" role="status">{formMessage}</small>}
                <small className="quick-enquiry-note">Your enquiry opens in WhatsApp so you can check the details before sending.</small>
              </form>
            </aside>}
            {pageKey === "services" && <aside className="service-showcase" aria-label="Popular services">
              <div className="service-showcase-heading"><span>THE SERVICE DESK</span><strong>Practical help, all in one place.</strong></div>
              <div className="service-showcase-grid">
                {services.slice(0, 4).map((service, index) => <button type="button" key={service.title} className={`service-showcase-tile service-showcase-tile-${index + 1}`} onClick={() => openEnquiry(service.title)} style={{ backgroundImage: `linear-gradient(0deg, rgba(5,28,39,.82), rgba(5,28,39,.05) 78%), url("${serviceImages[index]}")` }}><span>0{index + 1}</span><strong>{service.title}</strong><small>{service.description}</small></button>)}
              </div>
              <a className="service-showcase-more" href="#services">See all services <span aria-hidden="true">&#8599;</span></a>
            </aside>}
          </section>
        )}
        {pageKey === "home" && <>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot" />YOUR DOCUMENTATION PARTNER IN ABU DHABI</div>
            <h1>Your Trusted Partner for <span>Visit Visa &amp; Documentation</span> Services in the UAE</h1>
            <p className="hero-description">Your next journey starts here. Get friendly assistance with visit and tourist visa enquiries, family visas, typing and documentation services, all in one place.</p>
            <div className="hero-benefits">
              <div><span aria-hidden="true">&#9786;</span><p><strong>Friendly Support</strong><small>Here to help</small></p></div>
              <div><span aria-hidden="true">&#9671;</span><p><strong>Clear Guidance</strong><small>Know the process</small></p></div>
              <div><span aria-hidden="true">&#10003;</span><p><strong>Personal Assistance</strong><small>Support for your needs</small></p></div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => openEnquiry("Visit & Tourist Visa")}>Enquire About a Visa <span aria-hidden="true">&#8594;</span></button>
              <a className="btn btn-glass" href={generalWhatsAppUrl} target="_blank" rel="noreferrer"><span className="whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.53 0 .18 5.35.18 11.92c0 2.1.55 4.15 1.6 5.96L.08 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.5-8.42ZM12.1 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg></span>Chat on WhatsApp</a>
            </div>
            <p className="hero-note">Friendly assistance | Clear information | Personal support</p>
          </div>
          <div className="hero-art" aria-label="UAE travel and documentation support">
            <div className="hero-photo hero-photo-main" style={{ backgroundImage: `url("${destinations[0].image.replace("w=700", "w=1200")}")` }}><span>YOUR UAE JOURNEY</span></div>
            <div className="hero-photo hero-photo-small" style={{ backgroundImage: `url("${destinations[2].image.replace("w=700", "w=900")}")` }}><span>EXPLORE WITH CONFIDENCE</span></div>
            <div className="hero-photo hero-photo-docs" style={{ backgroundImage: `url("${serviceImages[1].replace("w=700", "w=900")}")` }}><span>DOCUMENTS, MADE SIMPLER</span></div>
            <div className="hero-art-stamp"><span>LET&apos;S TYPE</span><strong>Here for<br/>your next step</strong></div>
          </div>
        </section>
                <section className="home-after-hero" aria-labelledby="home-after-hero-title">
          <div className="home-after-hero-copy">
            <span className="home-after-hero-kicker"><b aria-hidden="true">&#10022;</b> A GOOD PLACE TO BEGIN <i aria-hidden="true" /></span>
            <h2 id="home-after-hero-title">Not sure where to start? <em>Let&apos;s talk.</em></h2>
            <p>Tell us what you&apos;re trying to do. Our Abu Dhabi team can help you find the right place to begin.</p>
            <a href="/services">Find the right service <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="home-after-hero-visual" role="img" aria-label="Personal service and document support in Abu Dhabi" style={{backgroundImage: `url("${serviceImages[5].replace("w=700", "w=1200")}")`}}>
            <div className="home-after-hero-stack">
              <div style={{backgroundImage: `url("${destinations[0].image}")`}}><span>VISIT VISA ENQUIRIES</span></div>
              <div style={{backgroundImage: `url("${serviceImages[0]}")`}}><span>TYPING SERVICES</span></div>
              <div style={{backgroundImage: `url("${serviceImages[2]}")`}}><span>DOCUMENT SUPPORT</span></div>
            </div>
            <div className="home-after-hero-badge"><span aria-hidden="true">&#10003;</span><div><strong>Here when you need us</strong><small>LET&apos;S TYPE ? Abu Dhabi</small></div></div>
          </div>
        </section>
<section className="home-trust" aria-labelledby="home-trust-title">
          <div className="home-trust-intro"><span className="section-kicker">HERE WHEN YOU NEED US</span><h2 id="home-trust-title">A little more clarity <span>for your next step.</span></h2><p>Visa enquiries and paperwork can feel like a lot. Let&apos;s Type is here to make getting started simpler.</p><a href="/about">Get to know us <span aria-hidden="true">&#8594;</span></a></div>
          <div className="home-trust-points">
            <article className="home-trust-point"><span aria-hidden="true">01</span><div><h3>Friendly, personal support</h3><p>Talk through what you need with our Abu Dhabi team.</p></div></article>
            <article className="home-trust-point"><span aria-hidden="true">02</span><div><h3>Clear information</h3><p>Understand the service and the next step before you begin.</p></div></article>
            <article className="home-trust-point"><span aria-hidden="true">03</span><div><h3>Help with the paperwork</h3><p>Find support for visit visa enquiries, typing and documentation.</p></div></article>
          </div>
        </section>

        <section className="home-activity-section" aria-labelledby="home-activity-title">
          <div className="home-activity-heading"><div><span className="section-kicker">LET&apos;S TYPE SERVICES</span><h2 id="home-activity-title">Visa &amp; document support in <span>Abu Dhabi</span></h2></div></div>
          <div className="home-activity-track">
            {[{href:"/visit-visa",image:destinations[0].image,title:"Visit & Tourist Visa",tag:"VISA SUPPORT",copy:"Ask our team about your visit visa enquiry."},{href:"/services",image:serviceImages[0],title:"Typing Services",tag:"DOCUMENT HELP",copy:"Assistance with government and private forms."},{href:"/services",image:serviceImages[2],title:"Document Clearance",tag:"PRO SERVICES",copy:"Find help with PRO services and transactions."},{href:"/services",image:serviceImages[3],title:"Emirates ID Services",tag:"UAE SERVICES",copy:"Ask about new, renewal and correction assistance."}].map(item=><a className="home-activity-card" href={item.href} key={item.title}><div className="home-activity-image" style={{backgroundImage:`url("${item.image}")`}}><span>{item.tag}</span></div><div className="home-activity-copy"><h3>{item.title}</h3><p>{item.copy}</p><div><span>Learn more</span></div></div></a>)}
          </div>
        </section>



        <section className="home-contact-banner" aria-labelledby="home-contact-title">
          <div className="home-contact-art home-contact-art-left" style={{ backgroundImage: `url("${serviceImages[1]}")` }} aria-hidden="true" />
          <div className="home-contact-copy"><span className="section-kicker">A FRIENDLY PLACE TO START</span><h2 id="home-contact-title">Not sure what you need?</h2><p>Tell us what you&apos;re looking for. Our Abu Dhabi team can help you find the right service.</p></div>
          <button className="home-contact-button" type="button" onClick={() => openEnquiry("General Enquiry")}>Talk to our team <span aria-hidden="true">&#8594;</span></button>
          <div className="home-contact-art home-contact-art-right" style={{ backgroundImage: `url("${serviceImages[5]}")` }} aria-hidden="true" />
        </section>
</>}


        {pageKey === "visit-visa" && <>
        <section className="section destination-section" id="visit-visa">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PLAN YOUR NEXT JOURNEY</span>
              <h2>
                <span>Visit Visa</span> Destinations
              </h2>
              <p>
                Enquire with our team about destinations and current visa
                requirements.
              </p>
            </div>

            <button
              className="outline-button"
              onClick={() => openEnquiry("Visit & Tourist Visa")}
            >
              Enquire About a Visa <span>&#8594;</span>
            </button>
          </div>

          <div className="country-grid">
            {destinations.map((country) => (
              <button
                className="country-card"
                key={country.code}
                onClick={() => openEnquiry(`${country.name} Visit Visa`)}
              >
                <div
                  className="country-image"
                  style={{ backgroundImage: `url("${country.image}")` }}
                >
                  <span className="country-flag">{country.code}</span>
                  <span className="country-image-arrow">&#8599;</span>
                </div>
                <div className="country-info">
                  <span>
                    <strong>{country.name}</strong>
                    <small>{country.subtitle}</small>
                  </span>
                  <span className="country-chevron">&#8250;</span>
                </div>
              </button>
            ))}
          </div>

          <p className="disclaimer">
            Visa eligibility, availability and requirements vary by destination
            and applicant. Contact us for current information.
          </p>
        </section>
        <section className="visa-options-section" aria-labelledby="visa-options-title">
          <div className="center-heading">
            <span className="section-kicker">VISA OPTIONS</span>
            <h2 id="visa-options-title">Explore visa <span>types</span></h2>
            <p>Choose an option to add it to your enquiry. We can confirm current availability and requirements.</p>
          </div>
          <div className="visa-options-grid">
            {visaTypes.map((visa) => (
              <article className="visa-option-card" key={visa.title}>
                <div className="visa-option-image" style={{ backgroundImage: `url("${visa.image}")` }} aria-hidden="true" />
                <div className="visa-option-copy">
                  <h3>{visa.title}</h3>
                  <p>{visa.description}</p>
                  <button type="button" className="text-link" onClick={() => openEnquiry(visa.title)}>
                    Enquire about this visa <span aria-hidden="true">&#8594;</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="visa-steps-section" aria-labelledby="visa-steps-title">
          <div className="center-heading">
            <span className="section-kicker">A CLEARER WAY TO START</span>
            <h2 id="visa-steps-title">Your Dubai visa enquiry, <span>step by step</span></h2>
            <p>Share a few details and our team will help you understand the available options.</p>
          </div>
          <div className="visa-steps-grid">
            {[
              { number: "01", title: "Tell us about your trip", copy: "Share your travel purpose, nationality, current location and when you hope to visit the UAE." },
              { number: "02", title: "Compare your options", copy: "We?ll help you compare available choices based on your planned stay and travel needs." },
              { number: "03", title: "Check the details", copy: "Review current requirements, documents, fees and processing guidance for the option you're considering." },
              { number: "04", title: "Get expert support", copy: "Share your questions with our team and get help understanding the relevant next steps." },
            ].map((step, index) => (
              <article className="visa-step-card" key={step.number}>
                <span className="visa-step-number">{step.number}</span>
                <span className={`visa-step-icon visa-step-icon-${index + 1}`} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span className="visa-step-accent" aria-hidden="true" />
                {index < 3 && <span className="visa-step-arrow" aria-hidden="true">&#8594;</span>}
              </article>
            ))}
          </div>
        </section>
        <section className="detail-section visa-guide">
          <div className="detail-photo visa-guide-photo"><span>YOUR TRIP, MADE CLEARER</span></div>
          <div className="detail-copy"><span className="section-kicker">A SIMPLE PLACE TO START</span><h2>Planning a visit to the <span>UAE?</span></h2><p>Every application is different. We can help you understand what information to gather and prepare questions for your enquiry.</p><ul><li>Passport and travel details</li><li>Intended travel dates and length of stay</li><li>Applicant and sponsor details, when applicable</li><li>Supporting documents you already have</li></ul><button className="btn btn-primary" onClick={() => openEnquiry("Visit & Tourist Visa")}>Ask about your trip &#8594;</button></div>
        </section>
        <section className="info-cards-section"><div className="center-heading"><span className="section-kicker">PERSONAL SUPPORT</span><h2>What would you like <span>help with?</span></h2><p>Start with the type of enquiry that best matches your plans.</p></div><div className="info-cards-grid">{[{icon:"\u2708",title:"Tourist visits",copy:"Ask about visitor visa options and the details to prepare."},{icon:"\u2661",title:"Family visits",copy:"Get help organizing your questions for a family visit enquiry."},{icon:"\u25CE",title:"Travel planning",copy:"Share your destination and dates to start a focused conversation."}].map(item=><article className="info-card" key={item.title}><span>{item.icon}</span><h3>{item.title}</h3><p>{item.copy}</p><button onClick={() => openEnquiry(item.title)}>Ask us &#8594;</button></article>)}</div><p className="disclaimer">Visa rules and requirements may change. We can help with general enquiry guidance; eligibility and approval are determined by the relevant authorities.</p></section>


        </>}


        {pageKey === "services" && <>
        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <span className="section-kicker">MORE WAYS WE CAN HELP</span>
              <h2>
                Our <span>Other Services</span>
              </h2>
              <p>
                Each service comes with a simple overview of what it covers. Choose a card to ask us about the help you need.
              </p>
            </div>

            <button
              className="outline-button"
              onClick={() => openEnquiry("Other Services")}
            >
              Ask About Our Services <span>&#8594;</span>
            </button>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <button
                className="service-card"
                key={service.title}
                onClick={() => openEnquiry(service.title)}
              >
                <span
                  className="service-image"
                  style={{ backgroundImage: `url("${serviceImages[index]}")` }}
                >
                  <span className={`service-icon ${service.color}`}>
                    {service.icon}
                  </span>
                  <span className="service-arrow" aria-hidden="true">&#8599;</span>
                </span>
                <span className="service-card-copy">
                  <strong>{service.title}</strong>
                  <small>{service.description}</small>
                  <span className="service-card-details">{service.details}</span>
                  <span className="service-card-cta">Learn what you need <b aria-hidden="true">&#8594;</b></span>
                </span>
                <span className="service-arrow">&#8599;</span>
              </button>
            ))}
          </div>

        </section>
        <section className="tourist-places-section" aria-labelledby="tourist-places-title">
          <div className="tourist-places-heading">
            <div>
              <span className="section-kicker">MAKE THE MOST OF YOUR VISIT</span>
              <h2 id="tourist-places-title">Popular places to explore <span>in the UAE</span></h2>
              <p>From Dubai&apos;s skyline and desert scenery to Abu Dhabi&apos;s landmark museums and mosque, plan a visit around the places that interest you.</p>
            </div>
            <button type="button" className="tourist-places-link" onClick={() => openEnquiry("Visit & Tourist Visa")}>Ask about a tourist visa <span aria-hidden="true">&#8594;</span></button>
          </div>
          <div className="tourist-places-grid">
            {touristPlaces.map((place, index) => <article className={`tourist-place-card tourist-place-card-${index + 1}`} key={place.title}>
              <div className="tourist-place-image" role="img" aria-label={place.alt} style={{ backgroundImage: `url("${place.image}")` }}><span>0{index + 1}</span></div>
              <div className="tourist-place-copy"><small>{place.location}</small><h3>{place.title}</h3><p>{place.description}</p></div>
            </article>)}
          </div>
          <p className="tourist-places-note">These are travel ideas only. Check attraction access, timings and any booking requirements before your visit.</p>
        </section>
        <section className="service-feature"><div className="service-feature-photo"></div><div className="service-feature-copy"><span className="section-kicker">ONE HELPFUL NEXT STEP</span><h2>Know what to prepare <span>before you begin.</span></h2><p>Tell us what service you need and what stage you are at. We&apos;ll help you identify the right questions and information for your enquiry.</p><div className="feature-points"><p><b>01</b><span><strong>Share your request</strong><small>Choose a service and tell us the basics.</small></span></p><p><b>02</b><span><strong>Get clear direction</strong><small>We&apos;ll respond with the next information to gather.</small></span></p><p><b>03</b><span><strong>Continue with confidence</strong><small>Keep your enquiry moving with personal support.</small></span></p></div><button className="btn btn-primary" onClick={() => openEnquiry("Other Services")}>Tell us what you need &#8594;</button></div></section>
        </>}


        {pageKey === "visit-visa" && <>
        <section className="visa-cta">
          <div className="cta-image" />
          <div className="cta-content">
            <span className="section-kicker">
              YOUR NEXT JOURNEY STARTS HERE
            </span>
            <h2>
              Need Help With a <span>Visit Visa?</span>
            </h2>
            <p>
              Tell us what you need. Our team can guide you through the enquiry
              process for visit visas and other documentation services.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => openEnquiry("Visit & Tourist Visa")}
              >
                Start an Enquiry <span>&#8594;</span>
              </button>
              <a
                className="btn btn-glass"
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="whatsapp-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.53 0 .18 5.35.18 11.92c0 2.1.55 4.15 1.6 5.96L.08 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.5-8.42ZM12.1 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                  </svg>
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
        </>}


        {pageKey === "about" && <>
        <section className="about-story detail-section"><div className="detail-photo about-story-photo"><span>HERE WHEN YOU NEED US</span></div><div className="detail-copy"><span className="section-kicker">LOCAL SUPPORT, HUMAN SERVICE</span><h2>Paperwork feels easier with <span>a helpful guide.</span></h2><p>LET&apos;S TYPE helps individuals, families and businesses in Abu Dhabi get started with visa and documentation service enquiries. We focus on listening first, explaining the next step, and helping you prepare the right questions.</p><p>Each request is different, so our team takes a personal approach and points you toward the support that fits your situation.</p><a className="text-link" href="/contact">Talk to our team ?</a></div></section>
        <section className="about-support-section" aria-labelledby="about-support-title">
          <div className="about-support-intro">
            <span className="section-kicker">HOW WE CAN HELP</span>
            <h2 id="about-support-title">Practical support for <span>everyday needs.</span></h2>
            <p>We bring several common service enquiries together in one place. Tell us what you are trying to do and we will help you understand which service to explore and what information may be useful.</p>
          </div>
          <div className="about-support-grid">
            {[
              { number: "01", title: "Visa enquiries", text: "Talk through visit and tourist visa questions, travel details and the information to prepare for an enquiry." },
              { number: "02", title: "Typing and forms", text: "Get help with government or private forms and understand what details are needed to get started." },
              { number: "03", title: "Document support", text: "Ask about document clearance, certificate attestation and related paperwork assistance." },
              { number: "04", title: "Local service enquiries", text: "Explore Emirates ID, traffic, business setup and other local support options." },
            ].map((item) => <article className="about-support-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </section>        <section className="values-section"><div className="center-heading"><span className="section-kicker">WHAT YOU CAN EXPECT</span><h2>Support built around <span>you.</span></h2></div><div className="info-cards-grid">{[{icon:"\u2661",title:"A warm welcome",copy:"A real person ready to understand what you need."},{icon:"\u25c7",title:"Clear communication",copy:"Practical explanations and a clear next step."},{icon:"\u2713",title:"Personal attention",copy:"Guidance shaped around your enquiry."}].map(item=><article className="info-card" key={item.title}><span>{item.icon}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
        <section className="section process-section" id="about">
          <div className="center-heading">
            <span className="section-kicker">SIMPLE AND STRAIGHTFORWARD</span>
            <h2>
              How It <span>Works</span>
            </h2>
            <p>Four simple steps to get started with your enquiry.</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                {index < processSteps.length - 1 && (
                  <span className="step-connector" />
                )}
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>
        </>}


        {pageKey === "contact" && <section className="contact-page" id="contact">
          <section className="contact-page-hero" aria-labelledby="contact-page-hero-title">
            <div className="contact-page-hero-copy">
              <span className="contact-page-hero-kicker"><span aria-hidden="true">LT</span> LET&apos;S TYPE · ABU DHABI</span>
              <h1 id="contact-page-hero-title">Let&apos;s talk about what you need. <em>We&apos;re here to help.</em></h1>
              <p>From visit visa questions to typing and documentation, tell us where you&apos;re stuck and our team will help you find a clear next step.</p>
              <div className="contact-page-hero-actions">
                <button type="button" onClick={() => openEnquiry("General Enquiry")}>Start an Enquiry <span aria-hidden="true">&#8594;</span></button>
                <a href={generalWhatsAppUrl} target="_blank" rel="noreferrer"><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1.1C5.6.1.3 5.4.3 11.9c0 2.1.5 4.1 1.6 5.9L.2 23.8l6.1-1.6a11.8 11.8 0 0 0 5.7 1.5h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4ZM12 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.6 1 1-3.6-.3-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Z" /></svg></span> WhatsApp Us</a>
              </div>
              <div className="contact-page-hero-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">&#8250;</span> Contact Us</div>
            </div>
            <div className="contact-page-hero-art">
              <div className="contact-page-hero-photo" role="img" aria-label="Paperwork being prepared at a desk" style={{ backgroundImage: `url("${serviceImages[1].replace("w=700", "w=1200")}")` }} />
              <div className="contact-hero-photo-badge"><span aria-hidden="true">&#10003;</span><div><strong>Here to help</strong><small>Friendly, practical support</small></div></div>
              <span className="contact-hero-photo-tag">LET&apos;S TYPE · ABU DHABI</span>
            </div>
          </section>
          <div className="contact-page-intro">
            <div className="contact-page-copy">
              <span className="section-kicker">HELP US POINT YOU IN THE RIGHT DIRECTION</span>
              <h2>A little context helps <em>us guide you.</em></h2>
              <p>Tell us whether you&apos;re asking about travel, paperwork or another service. Share the details you&apos;re comfortable with and we&apos;ll help identify a useful next step.</p>
            </div>
            <aside className="contact-start-card" aria-label="Services we can help you ask about">
              <span className="contact-start-card-label">A GOOD PLACE TO START</span>
              <h3>What would you like help with?</h3>
              <ul>
                <li><span>01</span><div><strong>Visa questions</strong><small>Travel plans and visit visa enquiries</small></div><b aria-hidden="true">&#8599;</b></li>
                <li><span>02</span><div><strong>Typing and forms</strong><small>Help understanding what to prepare</small></div><b aria-hidden="true">&#8599;</b></li>
                <li><span>03</span><div><strong>Documents and local services</strong><small>Find the right service to ask about</small></div><b aria-hidden="true">&#8599;</b></li>
              </ul>
            </aside>
          </div>

          <section className="contact-methods" aria-labelledby="contact-methods-title">
            <div className="contact-methods-heading"><span className="section-kicker">CHOOSE HOW TO REACH US</span><h2 id="contact-methods-title">We&apos;re just a message away.</h2><p>Pick the contact option that feels easiest for you.</p></div>
            <div className="contact-methods-grid">
              <a className="contact-method-card contact-method-whatsapp" href={generalWhatsAppUrl} target="_blank" rel="noreferrer"><span className="contact-method-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1.1C5.6.1.3 5.4.3 11.9c0 2.1.5 4.1 1.6 5.9L.2 23.8l6.1-1.6a11.8 11.8 0 0 0 5.7 1.5h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4ZM12 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.6 1 1-3.6-.3-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg></span><span className="contact-method-overline">QUICK CHAT</span><h3>WhatsApp</h3><p>Send your question and share the details when it suits you.</p><strong>{DISPLAY_WHATSAPP_PHONE} <span aria-hidden="true">&#8594;</span></strong></a>
              <div className="contact-method-card"><span className="contact-method-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 3h3l2 5-2.2 1.6a15 15 0 0 0 6.6 6.6L16 14l5 2v3a2 2 0 0 1-2.2 2A18 18 0 0 1 3 5.2 2 2 0 0 1 5 3Z" /></svg></span><span className="contact-method-overline">SPEAK WITH US</span><h3>Call the team</h3><p>Prefer a conversation? Call us and tell us what kind of support you need.</p><strong><a href={`tel:${PRIMARY_PHONE}`}>{DISPLAY_PRIMARY_PHONE}</a><a href={`tel:${SECONDARY_PHONE}`}>{DISPLAY_SECONDARY_PHONE}</a></strong></div>
              <a className="contact-method-card" href={`mailto:${CONTACT_EMAIL}`}><span className="contact-method-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span><span className="contact-method-overline">SEND US A NOTE</span><h3>Email our team</h3><p>Write to us with your question and we&apos;ll help you find the right service.</p><strong>{CONTACT_EMAIL} <span aria-hidden="true">&#8594;</span></strong></a>
              <article className="contact-method-card"><span className="contact-method-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span className="contact-method-overline">FIND OUR OFFICE</span><h3>Visit us in Abu Dhabi</h3><p>Mussafah Shabia 9<br/>Abu Dhabi, UAE</p><strong>LET&apos;S TYPE · Abu Dhabi</strong></article>
            </div>
          </section>
          <section className="contact-location-card" aria-label="Our office location">
            <a className="contact-location-map-frame location-illustration" href="https://maps.app.goo.gl/s6r8qB9n5UMAupqb9" target="_blank" rel="noreferrer" aria-label="Open directions to LET'S TYPE at Mussafah Shabia 9, Abu Dhabi">
              <span className="network-map-art">
                <svg className="network-world" viewBox="0 0 900 380" preserveAspectRatio="xMidYMid meet" aria-label="World map highlighting Abu Dhabi">
                  <image href="/world-map-silhouette.svg" x="0" y="0" width="900" height="380"/>
                  <circle className="uae-pulse" cx="586" cy="154" r="18"/><circle className="uae-node" cx="586" cy="154" r="4"/>
                  <path className="uae-link" d="M586 154 632 194h50"/><g className="uae-label" transform="translate(682 178)"><rect width="166" height="48" rx="8"/><text x="13" y="20">ABU DHABI</text><text x="13" y="36">UNITED ARAB EMIRATES</text></g>
                </svg>
                <span className="network-address"><strong>Mussafah Shabia 9</strong><small>Abu Dhabi, United Arab Emirates</small></span>
                <span className="network-coordinates">24.3425° N&nbsp; 54.5323° E</span>
                <span className="map-open-label">OPEN DIRECTIONS <span aria-hidden="true">↗</span></span>
              </span>
            </a>

          </section>
          <div className="contact-page-note"><span aria-hidden="true">&#10003;</span><p><strong>Not sure what to ask?</strong> A short description of what you need is enough to get the conversation started.</p></div>
        </section>}

      </main>

      {pageKey === "home" && (
        <section className="home-why" aria-labelledby="home-why-title">
          <div className="home-why-intro"><span className="section-kicker">WHY LET&apos;S TYPE</span><h2 id="home-why-title">Support that makes <span>the next step clearer.</span></h2><p>From visit visa enquiries to typing and documentation, find practical help for the things you need to get done.</p></div>
          <div className="home-why-list">
            <article className="home-why-card"><span aria-hidden="true">&#10003;</span><div><h3>Guidance that feels clear</h3><p>Get straightforward information to help you understand where to start.</p></div></article>
            <article className="home-why-card"><span aria-hidden="true">&#8594;</span><div><h3>Services in one place</h3><p>Explore visit visa enquiries, typing, documentation and other support.</p></div></article>
            <article className="home-why-card"><span aria-hidden="true">&#9825;</span><div><h3>A personal approach</h3><p>Tell us what you need and our team will help point you in the right direction.</p></div></article>
          </div>
        </section>
      )}



      {pageKey === "visit-visa" && <section className="visa-final-cta" aria-labelledby="visa-final-cta-title">
        <div className="visa-final-cta-copy">
          <span className="visa-final-kicker"><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 13v-1a8 8 0 0 1 16 0v1M4 12h3v7H6a2 2 0 0 1-2-2v-5Zm16 0h-3v7h1a2 2 0 0 0 2-2v-5Zm0 7c0 2-2 3-5 3" /></svg></span> NEED HELP WITH YOUR UAE VISA ENQUIRY?</span>
          <h2 id="visa-final-cta-title">Speak with the LET&apos;S TYPE Visa Team</h2>
          <p>Not sure which visa option fits your trip? Share your nationality, current location, travel date, planned stay and travel purpose. Our team can explain the available options and help you understand the next steps.</p>
          <div className="visa-final-actions">
            <a className="visa-final-whatsapp" href={generalWhatsAppUrl} target="_blank" rel="noreferrer"><span className="visa-final-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1.1C5.6.1.3 5.4.3 11.9c0 2.1.5 4.1 1.6 5.9L.2 23.8l6.1-1.6a11.8 11.8 0 0 0 5.7 1.5h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4ZM12 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.6 1 1-3.6-.3-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg></span><span><small>Chat with our team</small><strong>WhatsApp Us</strong></span><b aria-hidden="true">&#8599;</b></a>
            <a className="visa-final-contact" href="/contact"><span className="visa-final-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg></span><span><small>Other contact options</small><strong>Contact Us</strong></span><b aria-hidden="true">&#8594;</b></a>
          </div>
        </div>
        <div className="visa-final-art" aria-hidden="true">
          <div className="visa-final-orbit" />
          <div className="visa-final-top-card"><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 3h10l4 4v14H5zM15 3v5h5M8 12h8M8 16h6" /></svg></span><span><strong>Visa guidance</strong><small>Application support</small></span></div>
          <div className="visa-final-agent"><span aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M10 34v-5a22 22 0 0 1 44 0v5M10 31h9v18h-4a5 5 0 0 1-5-5V31Zm44 0h-9v18h4a5 5 0 0 0 5-5V31ZM45 50c-3 5-8 7-15 7" /></svg></span><strong>Visa Support</strong></div>
          <div className="visa-final-quick"><span>&#8594;</span><span><strong>Quick enquiry</strong><small>Connect with our team</small></span></div>
        </div>
      </section>}

      {pageKey === "services" && <section className="services-trust-section" aria-labelledby="services-trust-title">
        <div className="services-trust-copy">
          <span className="services-trust-kicker"><span aria-hidden="true">âœ¦</span> SUPPORT ROOTED IN ABU DHABI</span>
          <h2 id="services-trust-title">Why start your enquiry with <em>LET&apos;S TYPE?</em></h2>
          <p>From visa questions and document preparation to typing and local service enquiries, our Abu Dhabi team can help you understand where to begin. Tell us what you need and we&apos;ll explain the next practical step.</p>
        </div>
        <div className="services-trust-stats" aria-label="LET'S TYPE service overview">
          <div><strong>8</strong><span>Service areas to explore</span></div>
          <div><strong>3</strong><span>Core support categories</span></div>
          <div><strong>UAE</strong><span>Abu Dhabi based team</span></div>
          <div><strong>1:1</strong><span>Personal enquiry guidance</span></div>
        </div>
      </section>}

      {pageKey === "services" && <section className="services-faq-section" aria-labelledby="services-faq-title">
        <div className="center-heading services-faq-heading">
          <span className="section-kicker">PEOPLE ALSO ASK</span>
          <h2 id="services-faq-title">Services <span>FAQs</span></h2>
          <p>Quick answers about typing, document support, visas and other services.</p>
        </div>
        <div className="services-faq-grid">
          {[servicesFAQs.slice(0, 4), servicesFAQs.slice(4)].map((column, index) => <div className="services-faq-column" key={index}>
            {column.map((item) => <details className="services-faq-item" key={item.q}><summary>{item.q}<span aria-hidden="true" /></summary><p>{item.a}</p></details>)}
          </div>)}
        </div>
      </section>}

      {pageKey === "services" && <section className="services-final-cta" aria-labelledby="services-final-cta-title">
        <div><h2 id="services-final-cta-title">Ready to get started with your enquiry?</h2><p>Tell us which service you need and our Abu Dhabi team will help you understand what to prepare and what to do next.</p></div>
        <button type="button" onClick={() => openEnquiry("Other Services")}>Start an Enquiry <span aria-hidden="true">?</span></button>
      </section>}

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand footer-logo" href="/">
              <span className="brand-mark"><img className="brand-symbol" src="/logo-mark.png" alt="" /></span>
              <span className="brand-copy">
                <strong>LET&apos;S TYPE</strong>
                <small>TYPING SERVICES</small>
              </span>
            </Link>
            <p>
              Your partner for visit visa enquiries, typing and documentation
              services in Abu Dhabi, UAE.
            </p>
            <a className="footer-location-map footer-location-illustration" href="https://maps.app.goo.gl/s6r8qB9n5UMAupqb9" target="_blank" rel="noreferrer" aria-label="Open LET'S TYPE location in Google Maps">
              <img className="footer-world-map" src="/world-map-silhouette.svg" alt="" />
              <span className="footer-map-pin" aria-hidden="true"></span>
              <span className="footer-map-caption"><strong>Mussafah Shabia 9</strong><small>Abu Dhabi, UAE&nbsp; &#8599;</small></span>
            </a>
          </div>

          <div>
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <a href="/visit-visa">Visit Visa</a>
            <a href="/services">Our Services</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h3>Our Services</h3>
            {services.slice(0, 5).map((service) => (
              <a href="/services" key={service.title}>
                {service.title}
              </a>
            ))}
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>Mussafah Shabia 9, Abu Dhabi, UAE</p>
            <a href={`tel:${PRIMARY_PHONE}`}>{DISPLAY_PRIMARY_PHONE}</a>
            <a href={`tel:${SECONDARY_PHONE}`}>{DISPLAY_SECONDARY_PHONE}</a>
            <a href={`tel:${WHATSAPP_PHONE}`}>{DISPLAY_WHATSAPP_PHONE}</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp enquiry ?
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &#169; {new Date().getFullYear()} LET&apos;S TYPE. All rights reserved.
          </span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={generalWhatsAppUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="floating-whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M16.02 3.2A12.7 12.7 0 0 0 5.1 22.38L3.4 28.6l6.37-1.67A12.72 12.72 0 1 0 16.02 3.2Zm0 23.1c-1.94 0-3.85-.52-5.51-1.5l-.4-.24-3.78.99 1.01-3.68-.26-.42a10.36 10.36 0 1 1 8.94 4.85Zm5.69-7.76c-.31-.15-1.84-.91-2.12-1.01-.29-.1-.5-.15-.71.15-.21.31-.81 1.01-.99 1.22-.18.2-.36.23-.67.08-.31-.15-1.31-.48-2.5-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.21-.31.31-.52.1-.2.05-.38-.03-.53-.08-.15-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.54.08-.82.39-.28.31-1.07 1.04-1.07 2.55s1.1 2.96 1.25 3.16c.15.21 2.16 3.3 5.23 4.63.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.84-.75 2.1-1.47.26-.72.26-1.33.18-1.47-.08-.13-.28-.2-.59-.36Z"/>
        </svg>
      </a>

    </>
  );
}
