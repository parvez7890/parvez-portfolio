import React, { useEffect } from "react";
const SERVICEHUB_URL = "https://tubular-boba-edc5dd.netlify.app/";
const projects = [{
  number: "01",
  title: "ServiceHub",
  category: "Business software · Restaurant operations",
  summary: "A multi-module restaurant management platform designed for a business operating two restaurant locations in Saudi Arabia.",
  challenge: "The business needed a clearer way to manage day-to-day operations across employees, attendance, shifts, tasks, inventory, payroll, expenses and reporting.",
  approach: "Designed and built a React + TypeScript interface with nine operational modules. Inventory and expenses were connected. An initial Express, Prisma and PostgreSQL backend foundation was also explored; the full set of production APIs was not completed.",
  result: "A substantial frontend prototype with a backend foundation. The business chose not to adopt it, which reinforced the importance of validating workflows and customer needs early.",
  stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL"]
}, {
  number: "02",
  title: "Fruit Spoilage Early-Warning System",
  category: "IoT · Embedded systems · Product prototype",
  summary: "An experimental monitoring device exploring whether environmental and gas-sensor readings can help flag conditions associated with fruit spoilage during storage and transport.",
  challenge: "A useful monitoring device needs to collect relevant signals reliably in a storage or container environment and turn them into information that operators can act on.",
  approach: "Built an ESP32-based prototype and integrated temperature and humidity sensing, gas sensing, and early alert/display components. Work has included sensor interfacing, analog input considerations and baseline experiments.",
  result: "A working sensor-reading prototype. Fruit-specific thresholds, accuracy, long-term battery life and field performance remain to be validated; no commercial accuracy claim is made.",
  stack: ["ESP32", "Embedded C/C++", "Temperature & humidity sensors", "Gas sensors", "Prototyping"]
}];
const skillGroups = [{
  title: "Software development",
  items: ["React & TypeScript", "Node.js & Express", "HTML, CSS & Tailwind CSS", "Application structure and API concepts"]
}, {
  title: "Programming & data",
  items: ["C and Python", "Java fundamentals", "SQL and relational data concepts", "NumPy, Pandas and Matplotlib"]
}, {
  title: "IoT & embedded",
  items: ["ESP32 development", "Sensor interfacing and readings", "Embedded C/C++", "Hardware prototyping"]
}, {
  title: "AI & problem solving",
  items: ["YOLOv8 fundamentals", "Linear regression fundamentals", "Problem decomposition", "Prototype testing and iteration"]
}];
function Eyebrow({
  children
}: {
  children: React.ReactNode;
}) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#d46b6b]">{children}</p>;
}
function ProjectArtwork({
  service
}: {
  service?: boolean;
}) {
  return service ? <div className="artwork-service relative min-h-[280px] overflow-hidden rounded-2xl bg-[#e8d7d1] p-5 sm:min-h-[340px]">
    <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full border border-[#8c7a73]/20" />
    <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full border border-[#8c7a73]/20" />
    <div className="relative ml-auto max-w-md rounded-xl border border-[#cbb7ae] bg-[#f7f3f2] p-4 shadow-xl sm:p-5">
      <div className="mb-5 flex items-center justify-between"><span className="text-xs font-bold text-[#8c7a73]">ServiceHub / Overview</span><span className="rounded-full bg-[#e8d7d1] px-2 py-1 text-[9px] font-semibold text-[#8c7a73]">DASHBOARD</span></div>
      <div className="grid grid-cols-3 gap-2">{["Employees", "Attendance", "Inventory"].map((x, i) => <div key={x} className="rounded-lg border border-[#cbb7ae]/70 bg-white p-2.5"><p className="text-[9px] text-[#8c7a73]">{x}</p><div className="mt-3 h-1.5 rounded-full bg-[#e8d7d1]"><div className="h-1.5 rounded-full bg-[#d46b6b]" style={{
              width: ["76%", "62%", "84%"][i]
            }} /></div></div>)}</div>
      <div className="mt-3 grid grid-cols-[1.2fr_.8fr] gap-2"><div className="h-24 rounded-lg border border-[#cbb7ae]/70 bg-gradient-to-br from-white to-[#e8d7d1]/70 p-3"><div className="h-1.5 w-16 rounded bg-[#cbb7ae]" /><div className="mt-5 flex h-10 items-end gap-1">{[35, 60, 45, 85, 66, 95, 72].map((n, i) => <span key={i} className="flex-1 rounded-t-sm bg-[#d46b6b]/70" style={{
              height: n + "%"
            }} />)}</div></div><div className="h-24 rounded-lg border border-[#cbb7ae]/70 bg-white p-3"><div className="h-1.5 w-12 rounded bg-[#cbb7ae]" /><div className="mx-auto mt-3 h-12 w-12 rounded-full border-[7px] border-[#e8d7d1] border-t-[#d46b6b]" /></div></div>
    </div>
    <span className="absolute bottom-4 left-5 text-[9px] font-bold uppercase tracking-[.18em] text-[#8c7a73]">ServiceHub · Interface preview</span>
  </div> : <div className="artwork-iot relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-[#e8d7d1] sm:min-h-[340px]">
    <div className="absolute inset-5 rounded-2xl border border-dashed border-[#8c7a73]/35" />
    <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-[#8c7a73]/20" />
    <div className="relative rounded-2xl border border-[#cbb7ae] bg-[#f7f3f2] px-10 py-8 text-center shadow-lg"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#cbb7ae] text-3xl text-[#8c7a73]">⌁</div><p className="mt-4 text-sm font-bold text-[#8c7a73]">ESP32 prototype</p><p className="mt-1 text-xs text-[#8c7a73]/80">Environmental sensing</p></div>
    <span className="absolute bottom-4 left-5 text-[9px] font-bold uppercase tracking-[.18em] text-[#8c7a73]">IoT · Hardware prototype</span>
  </div>;
}
export const ParvezPortfolioWebsite = () => {
  useEffect(() => {
    const pageTitle = "Parvez Ahamed Shaik | CSE (IoT) Student, Developer & Builder";
    const description = "Portfolio of Parvez Ahamed Shaik, a Computer Science and Engineering (IoT) student at SRM IST Ramapuram, Chennai. Explore ServiceHub, an interactive restaurant management demo, and an ESP32 fruit-spoilage monitoring prototype.";
    document.title = pageTitle;
    const meta = (key: string, value: string, property = false) => {
      const attribute = property ? "property" : "name";
      let tag = document.head.querySelector('meta[' + attribute + '="' + key + '"]') as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = value;
    };
    meta("google-site-verification", "J1uN82StgnVZnrCBwqoEIvnmm0VUnkxqaomH06lY2gA");
    meta("description", description);
    meta("robots", "index, follow");
    meta("og:title", pageTitle, true);
    meta("og:description", description, true);
    meta("og:type", "website", true);
    
    meta("twitter:card", "summary");
    meta("twitter:title", pageTitle);
    meta("twitter:description", description);
    let structured = document.getElementById("parvez-person-schema") as HTMLScriptElement | null;
    if (!structured) {
      structured = document.createElement("script");
      structured.id = "parvez-person-schema";
      structured.type = "application/ld+json";
      document.head.appendChild(structured);
    }
    structured.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Parvez Ahamed Shaik",
      url: "https://designs.magicpath.ai/v1/zestily-time-8260",
      email: "mailto:parvezahamed.9898@gmail.com",
      telephone: "+917993001292",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN"
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "SRM Institute of Science and Technology, Ramapuram"
      },
      sameAs: ["https://linkedin.com/in/parvez-ahamed-shaik-59aa1a42b"]
    });
  }, []);
  return <main className="min-h-screen overflow-hidden bg-[#f7f3f2] text-[#8c7a73] selection:bg-[#d46b6b] selection:text-white">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
      .portfolio-display{font-family:'Manrope',sans-serif}
      .portfolio-body{font-family:'DM Sans',sans-serif}
      html{scroll-behavior:smooth}
      .reveal{animation:rise-in .75s cubic-bezier(.2,.7,.2,1) both}
      .reveal-delay-1{animation-delay:.12s}.reveal-delay-2{animation-delay:.24s}.reveal-delay-3{animation-delay:.36s}
      @keyframes rise-in{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
      @keyframes float-soft{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
      @keyframes drift{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(12px,-14px,0)}}
      .float-soft{animation:float-soft 7s ease-in-out infinite}
      .drift{animation:drift 12s ease-in-out infinite}
      .portfolio-card{transition:transform .32s cubic-bezier(.2,.7,.2,1),box-shadow .32s,border-color .32s}
      .portfolio-card:hover{transform:translateY(-6px);box-shadow:0 22px 55px rgba(140,122,115,.13);border-color:#d46b6b}
      .portfolio-link{transition:background .2s,transform .2s,box-shadow .2s}
      .portfolio-link:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(140,122,115,.18)}
      .artwork-service,.artwork-iot{transition:filter .35s}
      .portfolio-card:hover .artwork-service,.portfolio-card:hover .artwork-iot{filter:saturate(1.08)}
      a:focus-visible,button:focus-visible{outline:3px solid #d46b6b;outline-offset:4px}\n      @media print{body *{visibility:hidden!important}#resume,#resume *{visibility:visible!important}#resume{position:absolute;left:0;top:0;width:100%;padding:0!important;margin:0!important;background:#fff!important}#resume>div{display:block!important;max-width:none!important}#resume>div>div:first-child{display:none!important}.resume-print{border:0!important;box-shadow:none!important;padding:0!important}a{color:#111!important;text-decoration:none!important}}
      @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
    `}</style>

    <header className="sticky top-0 z-30 border-b border-[#cbb7ae]/60 bg-[#f7f3f2]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="portfolio-display text-xl font-extrabold tracking-tight text-[#8c7a73]">PA<span className="text-[#d46b6b]">.</span></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#8c7a73] md:flex"><a href="#about" className="transition hover:text-[#d46b6b]">About</a><a href="#skills" className="transition hover:text-[#d46b6b]">Skills</a><a href="#projects" className="transition hover:text-[#d46b6b]">Projects</a><a href="#experience" className="transition hover:text-[#d46b6b]">Experience</a><a href="#education" className="transition hover:text-[#d46b6b]">Education</a></nav>
        <a href="#contact" className="portfolio-link rounded-full bg-[#d46b6b] px-5 py-2.5 text-sm font-bold text-white">Let's talk ↗</a>
      </div>
    </header>

    <section id="home" className="relative overflow-hidden">
      <div className="drift absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#e8d7d1] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_.8fr] md:py-28">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cbb7ae] bg-white/60 px-4 py-2 text-xs font-semibold"><span className="h-2 w-2 rounded-full bg-[#d46b6b]" /> Chennai, India · Open to project conversations</div>
          <Eyebrow>Software development · IoT · Product building</Eyebrow>
          <h1 className="portfolio-display max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-.055em] sm:text-7xl">I build technology<br />for <span className="text-[#d46b6b]">real-world</span><br />problems.</h1>
          <p className="portfolio-body mt-7 max-w-xl text-lg leading-8">I'm Parvez Ahamed, a Computer Science Engineering student specialising in IoT. I work across software, connected devices and applied problem solving, with a practical interest in turning everyday challenges into testable solutions.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="portfolio-link rounded-full bg-[#d46b6b] px-6 py-3 text-sm font-bold text-white">Explore selected work ↘</a><a href="#resume" className="rounded-full border border-[#cbb7ae] bg-white/50 px-6 py-3 text-sm font-bold transition hover:bg-[#e8d7d1]">View resume ↓</a></div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#cbb7ae] pt-6 text-xs font-bold uppercase tracking-wider"><span>Software</span><span>Hardware</span><span>Problem solving</span><span>Prototyping</span></div>
        </div>
        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-md">
          <div className="float-soft absolute -inset-4 rotate-3 rounded-[2rem] bg-[#e8d7d1]" />
          <div className="relative rounded-[1.7rem] border border-[#cbb7ae] bg-white/85 p-7 shadow-xl sm:p-9">
            <div className="flex items-center justify-between border-b border-[#cbb7ae] pb-5"><span className="text-xs font-bold uppercase tracking-[.2em]">Working principles</span><span className="text-sm text-[#d46b6b]">✳</span></div>
            <div className="py-8"><p className="portfolio-display text-6xl font-extrabold tracking-tight text-[#d46b6b]">01<span className="text-[#cbb7ae]">.</span></p><h2 className="portfolio-display mt-3 text-2xl font-extrabold">Understand the problem.</h2><p className="mt-3 text-sm leading-6">Start with the people, constraints and workflow. Choose the technology after the problem is clear.</p></div>
            <div className="space-y-3 border-t border-[#cbb7ae] pt-5 text-sm"><div className="flex justify-between"><span>Approach</span><strong>Research → Prototype</strong></div><div className="flex justify-between"><span>Priority</span><strong>Useful & testable</strong></div><div className="flex justify-between"><span>Mindset</span><strong className="text-[#d46b6b]">Keep learning</strong></div></div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="bg-[#e8d7d1] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr]">
        <div className="reveal"><Eyebrow>01 / About me</Eyebrow><h2 className="portfolio-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Curious about how things work. Driven to make them work better.</h2></div>
        <div className="portfolio-body reveal reveal-delay-1 space-y-5 text-base leading-8"><p>I'm Parvez Ahamed, currently pursuing a B.Tech in Computer Science and Engineering with an IoT specialisation at SRM Institute of Science and Technology, Ramapuram, Chennai. My interests sit at the intersection of software engineering, embedded systems and practical problem solving.</p><p>I enjoy starting with a real workflow or a physical-world challenge, understanding where friction exists, and exploring whether software, electronics or data-driven methods can improve it. That approach has led me to build a restaurant operations platform and experiment with an IoT monitoring device.</p><p>I am early in my engineering journey, so I distinguish prototypes from finished products. I value clear requirements, practical testing, honest reporting of limitations and learning from feedback.</p></div>
      </div>
    </section>

    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Eyebrow>02 / Skills</Eyebrow><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="portfolio-display text-4xl font-extrabold tracking-tight sm:text-5xl">A practical, cross-disciplinary toolkit.</h2><p className="max-w-sm text-sm leading-6">A snapshot of areas I have studied or used in projects. Depth varies by tool and project.</p></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">{skillGroups.map((group, i) => <article key={group.title} className="portfolio-card rounded-2xl border border-[#cbb7ae] bg-white/65 p-6 sm:p-7"><div className="mb-5 flex items-center justify-between"><h3 className="portfolio-display text-xl font-extrabold">{group.title}</h3><span className="text-sm font-bold text-[#d46b6b]">0{i + 1}</span></div><ul className="space-y-3">{group.items.map(item => <li key={item} className="flex gap-3 text-sm leading-6"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d46b6b]" />{item}</li>)}</ul></article>)}</div>
    </section>

    <section className="bg-[#e8d7d1] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8"><Eyebrow>03 / Tools & technologies</Eyebrow><h2 className="portfolio-display text-4xl font-extrabold tracking-tight sm:text-5xl">The tools behind the work.</h2><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[{
            t: "Languages",
            v: "C · Python · Java · JavaScript · SQL"
          }, {
            t: "Frontend",
            v: "React · TypeScript · HTML · CSS · Tailwind · Vite"
          }, {
            t: "Backend & data",
            v: "Node.js · Express · Prisma · PostgreSQL"
          }, {
            t: "AI & analytics",
            v: "YOLOv8 · NumPy · Pandas · Matplotlib"
          }, {
            t: "IoT & embedded",
            v: "ESP32 · Arduino IDE · Sensors · Embedded C/C++"
          }, {
            t: "Development",
            v: "VS Code · API integration · Debugging"
          }, {
            t: "UI engineering",
            v: "Responsive interfaces · Modular UI · Accessibility basics"
          }, {
            t: "Workflow",
            v: "Experimentation · Testing · Documentation"
          }].map(x => <div key={x.t} className="portfolio-card rounded-xl border border-[#cbb7ae] bg-[#f7f3f2]/75 p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">{x.t}</p><p className="mt-3 text-sm leading-6">{x.v}</p></div>)}</div></div>
    </section>

    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Eyebrow>04 / Featured projects</Eyebrow><h2 className="portfolio-display text-4xl font-extrabold tracking-tight sm:text-5xl">A closer look at what<br />I've been building.</h2><p className="mt-5 max-w-2xl text-base leading-7">Two projects that reflect how I approach software and hardware challenges: understand the workflow, build a practical prototype and be clear about what has—and has not—been validated.</p>
      <div className="mt-12 space-y-8">
        {projects.map((p, i) => <article key={p.number} className="portfolio-card reveal overflow-hidden rounded-3xl border border-[#cbb7ae] bg-white/75 p-5 sm:p-7" style={{
          animationDelay: i * .12 + "s"
        }}><div className="grid gap-7 md:grid-cols-[.9fr_1.1fr]"><ProjectArtwork service={i === 0} /><div className="flex flex-col py-1"><div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[.17em] text-[#d46b6b]">{p.category}</span><span className="text-sm font-bold text-[#cbb7ae]">{p.number}</span></div><h3 className="portfolio-display mt-3 text-3xl font-extrabold">{p.title}</h3><p className="mt-3 text-sm leading-6">{p.summary}</p><div className="mt-5 space-y-4"><div><h4 className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">Challenge</h4><p className="mt-1 text-sm leading-6">{p.challenge}</p></div><div><h4 className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">Approach</h4><p className="mt-1 text-sm leading-6">{p.approach}</p></div><div><h4 className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">Outcome & status</h4><p className="mt-1 text-sm leading-6">{p.result}</p></div></div><div className="mt-5 flex flex-wrap gap-2">{p.stack.map(t => <span key={t} className="rounded-full border border-[#cbb7ae] bg-[#f7f3f2] px-3 py-1.5 text-xs font-semibold">{t}</span>)}</div>
          {i === 0 && <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#cbb7ae]/70 pt-5">{SERVICEHUB_URL ? <a href={SERVICEHUB_URL} target="_blank" rel="noreferrer" className="portfolio-link inline-flex items-center gap-2 rounded-full bg-[#d46b6b] px-6 py-3 text-sm font-bold text-white">Explore the actual ServiceHub ↗</a> : <span className="inline-flex items-center gap-2 rounded-full border border-[#cbb7ae] bg-[#e8d7d1]/60 px-5 py-3 text-sm font-bold text-[#8c7a73]">Open interactive demo</span>}<span className="text-xs text-[#8c7a73]/80">Try the demo with sample data · Changes stay in your browser</span></div>}
        </div></div></article>)}
      </div>
    </section>

    <section id="experience" className="bg-[#e8d7d1] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr]"><div><Eyebrow>05 / Experience</Eyebrow><h2 className="portfolio-display text-4xl font-extrabold tracking-tight sm:text-5xl">Learning by building.</h2></div><div className="space-y-5"><article className="rounded-2xl border border-[#cbb7ae] bg-[#f7f3f2]/75 p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">Project-based engineering · Independent</p><h3 className="portfolio-display mt-2 text-xl font-extrabold">Software & IoT project development</h3><p className="mt-1 text-sm">Academic and self-directed work · Ongoing</p><p className="mt-4 text-sm leading-7">I have explored product development from problem definition through interface design, hardware assembly and prototype testing. Work includes ServiceHub's multi-module frontend and an ESP32-based fruit monitoring prototype. These are project experiences rather than formal employment.</p></article><p className="text-sm leading-6">I welcome practical collaborations where scope, expectations and validation criteria are clear.</p></div></div>
    </section>

    <section id="education" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-10 md:grid-cols-2"><div><Eyebrow>06 / Education</Eyebrow><h2 className="portfolio-display text-4xl font-extrabold tracking-tight sm:text-5xl">Building the foundations.</h2><article className="mt-8 rounded-2xl border border-[#cbb7ae] bg-white/70 p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">Current education</p><h3 className="portfolio-display mt-3 text-xl font-extrabold">B.Tech — Computer Science and Engineering</h3><p className="mt-2 text-sm leading-6">Specialisation: Internet of Things (IoT)</p><p className="mt-1 text-sm">SRM Institute of Science and Technology · Ramapuram, Chennai</p><p className="mt-3 text-sm">Undergraduate student · First year</p></article></div><div><Eyebrow>Certifications</Eyebrow><div className="rounded-2xl border border-[#cbb7ae] bg-[#e8d7d1]/55 p-6"><h3 className="portfolio-display text-xl font-extrabold">Additional credentials</h3><p className="mt-3 text-sm leading-7">Verified external certifications can be added here with their provider and completion date. No unverified credentials are listed.</p></div></div></div>
    </section>

    <section className="bg-[#e8d7d1] py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr]"><div><Eyebrow>07 / Achievements & milestones</Eyebrow><h2 className="portfolio-display text-4xl font-extrabold tracking-tight sm:text-5xl">Progress you can inspect.</h2></div><div className="space-y-4"><div className="rounded-2xl border border-[#cbb7ae] bg-[#f7f3f2]/75 p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">Product building</p><h3 className="portfolio-display mt-2 text-lg font-extrabold">Built a multi-module business application</h3><p className="mt-2 text-sm leading-6">Developed ServiceHub's frontend across nine operational areas, with inventory and expenses connected in the implemented interface.</p></div><div className="rounded-2xl border border-[#cbb7ae] bg-[#f7f3f2]/75 p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#d46b6b]">Hardware experimentation</p><h3 className="portfolio-display mt-2 text-lg font-extrabold">Integrated a multi-sensor ESP32 prototype</h3><p className="mt-2 text-sm leading-6">Worked through sensor wiring, analog input considerations and live readings while documenting what still needs controlled validation.</p></div></div></div></section>


    <section id="resume" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <Eyebrow>08 / Resume</Eyebrow>
          <h2 className="portfolio-display text-4xl font-extrabold tracking-tight sm:text-5xl">A concise view of my engineering journey.</h2>
          <p className="mt-5 max-w-md text-sm leading-7">Download-ready resume layout based on my current one-page CV. Use your browser's print dialog to save it as a PDF.</p>
          <button type="button" onClick={() => window.print()} className="portfolio-link mt-7 inline-flex items-center gap-2 rounded-full bg-[#d46b6b] px-6 py-3 text-sm font-bold text-white">Print / Save as PDF ↗</button>
        </div>
        <article className="resume-print rounded-3xl border border-[#cbb7ae] bg-white p-7 shadow-sm sm:p-9">
          <div className="border-b border-[#cbb7ae] pb-5">
            <p className="portfolio-display text-3xl font-extrabold text-[#5b443a]">PARVEZ AHAMED SHAIK</p>
            <p className="mt-2 text-sm font-semibold">First-Year B.Tech CSE (IoT) Student | Vibe Coding & Full-Stack Development</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <a href="mailto:parvezahamed.9898@gmail.com" className="underline">parvezahamed.9898@gmail.com</a>
              <a href="tel:+917993001292" className="underline">+91 7993001292</a>
              <span>Chennai, Tamil Nadu, India</span>
              <a href="https://linkedin.com/in/parvez-ahamed-shaik-59aa1a42b" target="_blank" rel="noreferrer" className="underline">LinkedIn profile</a>
            </div>
          </div>
          <div className="mt-6 space-y-6 text-sm leading-6">
            <div><h3 className="portfolio-display text-lg font-extrabold text-[#5b443a]">Profile</h3><p className="mt-2">First-year B.Tech CSE (IoT) student at SRM IST, Ramapuram, focused on vibe coding and AI-assisted development. Builds practical applications by turning ideas into features, guiding AI coding workflows, reviewing code, and iteratively testing and debugging. Developed a multi-module restaurant management application and an ESP32-based fruit spoilage monitoring prototype. Interested in full-stack engineering, IoT systems, and applied AI.</p></div>
            <div><h3 className="portfolio-display text-lg font-extrabold text-[#5b443a]">Education</h3><p className="mt-2 font-semibold">B.Tech, Computer Science and Engineering (Internet of Things) · 2026–Present</p><p>SRM Institute of Science and Technology, Ramapuram Campus · Chennai, India · First Year</p></div>
            <div><h3 className="portfolio-display text-lg font-extrabold text-[#5b443a]">Technical skills</h3><p className="mt-2"><strong>Programming:</strong> C, JavaScript, TypeScript, SQL</p><p><strong>Frontend:</strong> React.js, HTML, Tailwind CSS, Vite</p><p><strong>Backend & Database:</strong> Node.js, Express.js, REST API fundamentals, PostgreSQL (Neon), Prisma ORM</p><p><strong>AI-assisted development:</strong> Vibe coding, prompt-driven implementation, rapid prototyping, iterative testing and debugging</p><p><strong>IoT & Embedded:</strong> ESP32, Arduino IDE, C/C++, DHT11, MQ-series gas sensors, I²C LCD, buzzer</p><p><strong>Tools:</strong> Git</p></div>
            <div><h3 className="portfolio-display text-lg font-extrabold text-[#5b443a]">Selected projects</h3><p className="mt-2 font-semibold">ServiceHub — Full-Stack Restaurant Management System</p><p>Built a multi-module restaurant operations application prototype covering employee management, attendance, shifts, tasks, inventory, payroll, expenses and reports. Developed the frontend using React and TypeScript; connected inventory and expense workflows to business data handling. Set up a backend foundation using Express, Prisma and PostgreSQL, including request validation and health/readiness endpoints; full module-by-module API integration is ongoing. Used AI-assisted workflows, then reviewed, tested and debugged features iteratively.</p><p className="mt-3 font-semibold">Fruit Spoilage Early-Warning System — IoT Hardware Prototype</p><p>Prototyped an ESP32-based system to monitor environmental indicators associated with fruit spoilage, initially focusing on bananas. Integrated temperature/humidity and gas sensing, LCD readings and buzzer alerts; implemented sensor interfacing and analog signal conditioning.</p><p className="mt-3 font-semibold">Additional project: Plant Disease Prediction</p><p>Worked on an image-based plant disease prediction project using YOLOv8.</p></div>
            <div><h3 className="portfolio-display text-lg font-extrabold text-[#5b443a]">Areas of interest</h3><p className="mt-2">Vibe Coding & AI-Assisted Engineering · Full-Stack Development · IoT & Embedded Systems · Applied AI</p></div>
          </div>
        </article>
      </div>
    </section>
    <section id="contact" className="bg-[#8c7a73] py-20 text-[#f7f3f2] sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-end"><div><Eyebrow>09 / Contact</Eyebrow><h2 className="portfolio-display max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-[#f7f3f2] sm:text-7xl">Have a problem<br />worth building for?</h2><p className="mt-6 max-w-lg text-base leading-7 text-[#f7f3f2]/85">I welcome conversations about software projects, IoT prototypes and technical collaboration. Tell me about the problem and what a useful outcome would look like.</p><a href="#resume" className="mt-7 inline-flex rounded-full border border-[#f7f3f2]/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">View resume ↑</a></div><div className="rounded-3xl border border-[#f7f3f2]/30 bg-[#f7f3f2]/10 p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-wider text-[#f7f3f2]/70">Get in touch</p><p className="portfolio-display mt-3 text-2xl font-extrabold">Parvez Ahamed Shaik</p><p className="mt-1 text-sm text-[#f7f3f2]/80">Chennai, Tamil Nadu, India</p><div className="mt-6 grid gap-3"><a href="mailto:parvezahamed.9898@gmail.com" className="portfolio-link flex items-center justify-between rounded-xl bg-[#f7f3f2] px-4 py-4 text-sm font-bold text-[#5b443a]"><span>Email</span><span>parvezahamed.9898@gmail.com ↗</span></a><a href="tel:+917993001292" className="portfolio-link flex items-center justify-between rounded-xl bg-[#f7f3f2] px-4 py-4 text-sm font-bold text-[#5b443a]"><span>Phone</span><span>+91 7993001292 ↗</span></a><a href="https://linkedin.com/in/parvez-ahamed-shaik-59aa1a42b" target="_blank" rel="noreferrer" className="portfolio-link flex items-center justify-between rounded-xl bg-[#f7f3f2] px-4 py-4 text-sm font-bold text-[#5b443a]"><span>LinkedIn</span><span>Connect ↗</span></a></div><p className="mt-4 text-xs leading-5 text-[#f7f3f2]/70">Your contact details are publicly visible on this portfolio.</p></div></div></section>
    <footer className="flex flex-col justify-between gap-2 bg-[#f7f3f2] px-5 py-6 text-xs text-[#8c7a73] sm:flex-row sm:px-8"><span>© 2026 Parvez Ahamed</span><span>Software · IoT · Product building</span></footer>
  </main>;
};
