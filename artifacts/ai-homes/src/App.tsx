import { useState, type FormEvent } from 'react';
import projectImage from './ai-homes-villa-hero.jpg';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Dumbbell,
  Gamepad2,
  House,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Waves,
  X,
  Zap,
  Mail,
  Footprints,
  BriefcaseBusiness,
  Utensils,
  UsersRound,
} from 'lucide-react';

const phoneNumber = '+91 99166 93999';
const emailAddress = 'aihomes999@gmail.com';
const whatsappUrl = 'https://wa.me/919916693999';

const navItems = [
  { label: 'The homes', href: '#homes' },
  { label: 'Details', href: '#details' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
];

const highlights = [
  { title: 'Independent living', detail: '17 architecturally designed houses in a gated community.' },
  { title: 'Room to make your own', detail: '1200–1500 sq ft homes, arranged across G+2 levels.' },
  { title: 'A view worth keeping', detail: 'East-facing and park-facing options, with Kundana hill-view balconies.' },
  { title: 'A considered approach', detail: 'A 30 ft concrete road through the gated community.' },
];

const amenities = [
  { label: 'Swimming pool', Icon: Waves },
  { label: 'Splash & play area', Icon: UsersRound },
  { label: 'Indoor games', Icon: Gamepad2 },
  { label: 'Outdoor games', Icon: Dumbbell },
  { label: 'Walking track', Icon: Footprints },
  { label: '24/7 watchman', Icon: ShieldCheck },
  { label: 'Service kitchen', Icon: Utensils },
  { label: 'Power backup', Icon: Zap },
  { label: 'Work-from-community hall', Icon: BriefcaseBusiness },
  { label: 'Clubhouse available', Icon: House },
];

const destinations = [
  ['STRR', '1.5 km'],
  ['Kempegowda International Airport', '15 km'],
  ['IVC Road, Uganavadi Circle', '4 km'],
  ['NH, Devanahalli Town', '5.5 km'],
  ['DCI Office & Amity University', '7 km'],
  ['Embassy Tech Cloud Park', '9 km'],
  ['Embassy Knowledge Park', '9 km'],
  ['KIADB IT Park / Aerospace Park / Airport Business Park', '10 km'],
  ['Cambridge North University', '6 km'],
  ['Chanakya University', '15 km'],
  ['Akash Medical College Hospital', '12 km'],
  ['KIADB Hardware Park', '12 km'],
];

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <path d="M4.5 26 26 6l21.5 20v20H4.5V26Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 26.5 26 15l13 11.5v13H13v-13Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M20.5 39.5V29h11v10.5M7 23.5h8M37 23.5h8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M24 32.5h4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className={`brand ${footer ? 'footer-brand' : ''}`} aria-label="AI HOMES, back to top">
      <BrandMark className="brand-mark" />
      <span>
        <span className="brand-name">AI HOMES</span>
        <span className="brand-sub">Luxury Villas</span>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openWhatsAppDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const visit = String(data.get('visit') ?? 'I would like to arrange a site visit').trim();
    const date = String(data.get('date') ?? '').trim();
    const note = String(data.get('note') ?? '').trim();
    const message = [
      'Hello AI HOMES, I would like to enquire about the Luxury Villas in Kundana Habli.',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Visit request: ${visit}`,
      date ? `Preferred date: ${date}` : '',
      note ? `Additional details: ${note}` : '',
    ].filter(Boolean).join('\n');
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <div className="container-wide header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-visit" href="#visit">Arrange a site visit <ArrowRight size={14} /></a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a href="#visit" onClick={() => setMenuOpen(false)}>Arrange a site visit</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={projectImage} alt="AI HOMES villas and landscaped community road" />
        <div className="hero-shade" />
        <div className="container-wide hero-content reveal">
          <div className="hero-kicker"><span /> AI HOMES · KUNDANA HABLI</div>
          <h1 id="hero-title">Luxury villas<br />in <em>Kundana.</em></h1>
          <p className="hero-description">Independent villa privacy, with the ease of a thoughtfully planned community near Devanahalli.</p>
          <div className="hero-actions">
            <a className="button-gold" href="#visit">Arrange a site visit <ArrowRight size={15} /></a>
            <a className="hero-phone" href={`tel:${phoneNumber.replaceAll(' ', '')}`}><Phone size={15} /> {phoneNumber}</a>
          </div>
        </div>
        <div className="container-wide hero-bottom">
          <div className="hero-loc"><MapPin size={14} /> Kundana Habli · Devanahalli, Bengaluru</div>
          <div className="hero-count"><strong>17</strong><span>Independent homes</span></div>
        </div>
      </section>

      <section className="intro" aria-labelledby="intro-title">
        <div className="container-wide intro-grid">
          <div className="intro-aside">
            <span className="eyebrow">A more personal address</span>
            <div className="intro-stamp">Independent<br />by nature<br /><span>●</span><br />Connected<br />by design</div>
          </div>
          <div className="intro-main">
            <h2 className="section-title" id="intro-title">Your own front door.<br />A community beyond it.</h2>
            <p className="section-copy">AI HOMES brings together the privacy of an independent home and the considered comforts of a gated community. Set opposite a park in Kundana Habli, each home is designed for space, light and a little more breathing room.</p>
            <div className="intro-rule">
              <b>A neighbourhood of just 17 homes</b>
              <span>Explore the project <ArrowDownRight size={15} /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-band" aria-label="Project at a glance">
        <div className="container-wide facts-grid">
          <div className="fact"><strong>17</strong><span>Independent villas</span></div>
          <div className="fact"><strong>1,200–1,500</strong><span>Square feet</span></div>
          <div className="fact"><strong>G+2</strong><span>Home configuration</span></div>
          <div className="fact"><strong>30 ft</strong><span>Concrete road</span></div>
        </div>
      </section>

      <section className="homes" id="homes" aria-labelledby="homes-title">
        <div className="container-wide">
          <div className="homes-head">
            <div>
              <span className="eyebrow">The homes</span>
              <h2 className="section-title" id="homes-title">Made for the way<br />you want to live.</h2>
            </div>
            <p className="section-copy">Architecturally designed independent homes, arranged around the everyday pleasures of a park-side community.</p>
          </div>
          <div className="homes-grid">
            <article className="home-feature">
              <img src={projectImage} alt="Villas set along a landscaped road beside a community park" loading="lazy" />
              <div className="feature-caption">
                <div><span>Space to call your own</span><h3>Independent, together.</h3></div>
                <ArrowDownRight size={22} />
              </div>
            </article>
            <div className="feature-stack">
              <article className="feature-note">
                <span className="note-number">01 / THE SETTING</span>
                <div><h3>Park-side living</h3><p>Villas opposite a park, with east-facing and park-facing options.</p></div>
              </article>
              <article className="feature-note">
                <span className="note-number">02 / THE OUTLOOK</span>
                <div><h3>Look towards Kundana</h3><p>Balconies open to hill views and room for a slower start.</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="specs" id="details" aria-labelledby="details-title">
        <div className="container-wide specs-layout">
          <div className="specs-title">
            <span className="eyebrow">Considered from the ground up</span>
            <h2 className="section-title" id="details-title">The details<br />that matter.</h2>
            <p className="section-copy">A clear picture of what makes up your home and the community around it.</p>
          </div>
          <div className="specs-list">
            {highlights.map((item, index) => (
              <div className="spec-row" key={item.title}>
                <span className="spec-index">0{index + 1}</span>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
            <div className="spec-row">
              <span className="spec-index">05</span>
              <strong>Essential infrastructure</strong>
              <span>Independent water, underground drainage and common sewage tanks.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="amenities" id="amenities" aria-labelledby="amenities-title">
        <div className="container-wide amenity-layout">
          <div className="amenity-lead">
            <span className="eyebrow">Life in the community</span>
            <h2 className="section-title" id="amenities-title">Everyday, with<br />a little extra.</h2>
            <p className="section-copy">A mix of places to move, gather, play and settle into your day—all within the community.</p>
            <div className="amenity-marker"><i /> Amenities at AI HOMES</div>
          </div>
          <div className="amenity-grid">
            {amenities.map(({ label, Icon }) => (
              <div className="amenity-item" key={label}><Icon size={18} strokeWidth={1.6} /><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="location" id="location" aria-labelledby="location-title">
        <div className="container-wide">
          <div className="location-top">
            <div>
              <span className="eyebrow">Kundana Habli · Devanahalli</span>
              <h2 className="section-title" id="location-title">Close to the things<br />that move you.</h2>
            </div>
            <p className="location-copy">A home in a quieter setting, with important roads, workplaces, education and healthcare destinations within reach.</p>
          </div>
          <div className="loc-grid">
            {destinations.map(([place, distance]) => (
              <div className="loc-item" key={place}>
                <span className="loc-name"><MapPin size={14} />{place}</span>
                <span className="loc-distance">{distance}</span>
              </div>
            ))}
          </div>
          <div className="location-address"><MapPin size={17} /><span><strong>Project location</strong><br />Sy. No. 73/1, Solur Village, Kundana Habli,<br />Devanahalli Taluk – 562110.</span></div>
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div className="container-wide visit-grid">
          <div className="visit-copy">
            <span className="eyebrow">Come see it for yourself</span>
            <h2 className="section-title" id="visit-title">A good place<br />starts with a visit.</h2>
            <p className="section-copy">Tell us a little about yourself and when you’d like to visit. Your details will open in a WhatsApp message draft, ready for you to review and send.</p>
            <div className="contact-detail">
              <a href={`tel:${phoneNumber.replaceAll(' ', '')}`}><Phone size={16} />{phoneNumber}</a>
              <a href={`mailto:${emailAddress}`}><Mail size={16} />{emailAddress}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><ArrowRight size={16} />Chat with AI HOMES on WhatsApp</a>
            </div>
          </div>
          <form className="visit-card" onSubmit={openWhatsAppDraft}>
            <h3>Plan your visit</h3>
            <p>Complete the details below to prepare a WhatsApp enquiry.</p>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="visitor-name">Your name</label>
                <input id="visitor-name" name="name" autoComplete="name" placeholder="Name" required data-testid="input-visitor-name" />
              </div>
              <div className="form-field">
                <label htmlFor="visitor-phone">Phone number</label>
                <input id="visitor-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" required data-testid="input-visitor-phone" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="visit-request">I’d like to</label>
                <select id="visit-request" name="visit" defaultValue="Arrange a site visit" data-testid="select-visit-request">
                  <option>Arrange a site visit</option>
                  <option>Ask about the homes</option>
                  <option>Learn about the location</option>
                  <option>Speak with the AI HOMES team</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="visit-date">Preferred date <span>(optional)</span></label>
                <input id="visit-date" name="date" type="date" data-testid="input-visit-date" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="visitor-note">Anything you’d like us to know <span>(optional)</span></label>
              <textarea id="visitor-note" name="note" placeholder="Add a note for the team" data-testid="input-visitor-note" />
            </div>
            <button className="button-gold visit-submit" type="submit" data-testid="button-create-whatsapp-draft">
              Prepare WhatsApp message <ArrowRight size={15} />
            </button>
            <p className="privacy-note">This opens a message draft in WhatsApp. Nothing is submitted or stored here.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container-wide">
          <div className="footer-top">
            <div><Brand footer /><p>Independent homes. A considered community.<br />Kundana Habli, Devanahalli.</p></div>
            <div className="footer-actions">
              <a href={`tel:${phoneNumber.replaceAll(' ', '')}`}><Phone size={14} />{phoneNumber}</a>
              <a href={`mailto:${emailAddress}`}><Mail size={14} />{emailAddress}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>AI HOMES Luxury Villas · Bengaluru</span>
            <span className="approval-note"><Check size={11} /> STRR Approved</span>
            <span>Project information as displayed in supplied material.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;