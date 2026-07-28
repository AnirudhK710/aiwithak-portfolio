"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Code2,
  Database,
  FileUser,
  GitBranch,
  GraduationCap,
  Layers3,
  Network,
  Quote,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
} from "lucide-react";

const skills = [
  {
    title: "Generative AI",
    icon: BrainCircuit,
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "Llama",
      "Prompt Engineering",
    ],
  },
  {
    title: "Agentic Systems",
    icon: Network,
    items: ["LangGraph", "LangChain", "CrewAI", "AutoGen", "MCP"],
  },
  {
    title: "RAG & Search",
    icon: Database,
    items: [
      "Hybrid RAG",
      "Embeddings",
      "FAISS",
      "Pinecone",
      "ChromaDB",
    ],
  },
  {
    title: "AI Engineering",
    icon: Code2,
    items: ["Python", "FastAPI", "SQL", "TypeScript", "REST APIs"],
  },
  {
    title: "Cloud & MLOps",
    icon: Layers3,
    items: ["AWS", "GCP", "Azure", "Docker", "MLflow"],
  },
  {
    title: "Responsible AI",
    icon: ShieldCheck,
    items: [
      "Fairness",
      "Explainability",
      "Safety",
      "Governance",
      "Evaluation",
    ],
  },
];

const products = [
  {
    name: "Caffeinated Professor",
    category: "AI Education",
    description:
      "A mimetic AI teaching platform that transforms faculty knowledge, lectures, course materials, and teaching style into grounded, accessible learning support.",
    status: "Research Product",
    statusClass: "product-status-research",
    icon: BookOpen,
    technologies: [
      "Generative AI",
      "RAG",
      "OpenAI",
      "Embeddings",
      "Supabase",
    ],
    liveUrl: "",
    detailsUrl: "#caffeinated-professor",
  },
  {
    name: "EthicLens AI",
    category: "Responsible AI",
    description:
      "An AI ethics auditing application that evaluates AI systems across bias, privacy, transparency, explainability, hallucination, safety, governance, and compliance risks.",
    status: "Live",
    statusClass: "product-status-live",
    icon: Scale,
    technologies: [
      "Responsible AI",
      "Gemini",
      "Risk Analysis",
      "Cloud Run",
      "AI Governance",
    ],

    /*
      Replace the URL below with your actual EthicLens AI live URL.

      Example:
      liveUrl: "https://ethiclens-ai-xxxxx.run.app",
    */
    liveUrl: "",

    detailsUrl: "",
  },
  {
    name: "BuildFolio",
    category: "AI Portfolio Builder",
    description:
      "An AI-powered portfolio builder designed to help professionals turn their experience, projects, skills, and career goals into a structured digital portfolio.",
    status: "In Development",
    statusClass: "product-status-building",
    icon: FileUser,
    technologies: [
      "Next.js",
      "Generative AI",
      "TypeScript",
      "Prompt Engineering",
    ],
    liveUrl: "",
    detailsUrl: "",
  },
  {
    name: "PathPulse",
    category: "Career Intelligence",
    description:
      "An AI career path and certification navigator designed to identify skill gaps, recommend learning paths, compare certifications, and support career planning.",
    status: "Planned",
    statusClass: "product-status-planned",
    icon: Route,
    technologies: [
      "Career AI",
      "Recommendations",
      "Skill Analysis",
      "LLMs",
    ],
    liveUrl: "",
    detailsUrl: "",
  },
  {
    name: "BigLeap",
    category: "AI Career Platform",
    description:
      "An AI career accelerator envisioned to connect professional goals, skill development, project readiness, job preparation, and personalized career guidance.",
    status: "Planned",
    statusClass: "product-status-planned",
    icon: BriefcaseBusiness,
    technologies: [
      "Agentic AI",
      "Career Planning",
      "Personalization",
      "Automation",
    ],
    liveUrl: "",
    detailsUrl: "",
  },
];

const responsibilities = [
  "Designing the end-to-end AI architecture and technical roadmap",
  "Building RAG pipelines grounded in lectures, course material, and faculty knowledge",
  "Leading data preparation, transcription, chunking, embeddings, and retrieval workflows",
  "Developing evaluation methods for usefulness, accuracy, grounding, hallucination, and clarity",
  "Improving prompts and retrieval strategies to reproduce the professor’s teaching voice responsibly",
  "Collaborating with faculty and engineering teammates on product strategy, pilots, and deployment",
  "Translating Responsible AI principles into practical product controls and human oversight",
  "Preparing technical documentation, research evidence, case logs, and stakeholder updates",
];

const research = [
  {
    title: "Responsible AI",
    description:
      "Connecting fairness, accountability, transparency, explainability, safety, and human oversight to real product decisions.",
    tags: ["Governance", "Bias", "Safety", "Trust"],
  },
  {
    title: "Human-Centered AI",
    description:
      "Studying how AI can augment human capability while preserving autonomy, dignity, agency, and informed judgment.",
    tags: ["Human Oversight", "Autonomy", "Dignity"],
  },
  {
    title: "Ethical Educational AI",
    description:
      "Exploring consent, disclosure, pedagogical trust, academic integrity, and accountability in mimetic AI tutors.",
    tags: ["EdTech", "Mimetic AI", "Trustworthy LLMs"],
  },
  {
    title: "LLM Evaluation",
    description:
      "Designing practical evaluations for retrieval quality, groundedness, hallucination, harmful outputs, clarity, and usefulness.",
    tags: ["Evals", "RAG", "Hallucination"],
  },
];

const ethicsTopics = [
  "Fairness",
  "Transparency",
  "Privacy",
  "Explainability",
  "AI Safety",
  "Governance",
  "Human Oversight",
  "Accountability",
  "Robustness",
  "Alignment",
  "Trustworthy AI",
  "Social Impact",
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top">
            AIWITHAK<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#products">AI Products</a>
            <a href="#caffeinated-professor">
              Caffeinated Professor
            </a>
            <a href="#wepos">WePOS</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
          </div>

          <a className="nav-cta" href="#contact">
            Contact
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />

        <div className="orb orb-one" />
        <div className="orb orb-two" />

        <div className="container hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            AI Engineer · Founder · Researcher
          </div>

          <h1>
            Building AI that is{" "}
            <span>
              intelligent, trustworthy, and human-centered.
            </span>
          </h1>

          <p className="hero-copy">
            I&apos;m Anirudh Kolanupaka, an AI engineer and founding
            engineer working across generative AI, agentic systems,
            RAG, LLM evaluation, educational technology, and
            Responsible AI.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#products">
              Explore my products
              <ArrowRight size={18} />
            </a>

            <a className="button secondary" href="#research">
              View research
              <BookOpen size={18} />
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>AI Engineering</strong>
              <span>LLMs · Agents · RAG · APIs</span>
            </div>

            <div>
              <strong>Product Building</strong>
              <span>Education · Ethics · Career AI</span>
            </div>

            <div>
              <strong>Research Focus</strong>
              <span>Responsible and educational AI</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container split">
          <div>
            <p className="kicker">About</p>

            <h2>
              I build AI systems and study the responsibilities that
              come with them.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              My work sits at the intersection of engineering, product
              development, and AI ethics. I build production-oriented
              applications using large language models,
              retrieval-augmented generation, intelligent agents,
              semantic search, APIs, and cloud infrastructure.
            </p>

            <p>
              Alongside engineering, I study fairness, transparency,
              privacy, explainability, human oversight, trustworthy AI,
              and responsible deployment. My goal is to help create
              systems that deliver measurable value while preserving
              human dignity, judgment, and accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <p className="kicker">Core capabilities</p>

          <h2 className="section-title">
            Engineering depth with Responsible AI thinking.
          </h2>

          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <article className="skill-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section products-section"
        id="products"
      >
        <div className="container">
          <div className="section-head products-heading">
            <div>
              <p className="kicker">AI Products</p>

              <h2>
                Designing and building AI products that solve
                real-world problems.
              </h2>
            </div>

            <p>
              A growing collection of AI applications across
              education, Responsible AI, professional development,
              and career intelligence.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => {
              const ProductIcon = product.icon;

              return (
                <article
                  className="product-card"
                  key={product.name}
                >
                  <div className="product-card-top">
                    <div className="product-icon">
                      <ProductIcon
                        size={25}
                        aria-hidden="true"
                      />
                    </div>

                    <span
                      className={`product-status ${product.statusClass}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="product-card-content">
                    <p className="product-category">
                      {product.category}
                    </p>

                    <h3>{product.name}</h3>

                    <p className="product-description">
                      {product.description}
                    </p>

                    <div
                      className="product-technologies"
                      aria-label={`${product.name} technologies`}
                    >
                      {product.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="product-card-actions">
                    {product.liveUrl ? (
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="product-primary-link"
                      >
                        Open live product
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span className="product-unavailable">
                        {product.status === "Planned"
                          ? "Coming soon"
                          : product.status === "Research Product"
                            ? "View project details below"
                            : "Demo coming soon"}
                      </span>
                    )}

                    {product.detailsUrl && (
                      <a
                        href={product.detailsUrl}
                        className="product-secondary-link"
                      >
                        View details
                        <ArrowRight
                          size={15}
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="products-footer">
            <Sparkles size={18} aria-hidden="true" />

            <p>
              Additional AI products, technical case studies, and
              live demonstrations are currently in development.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="caffeinated-professor"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Flagship work</p>
              <h2>Caffeinated Professor</h2>
            </div>

            <span className="pill">
              Founding AI Engineer
            </span>
          </div>

          <div className="project-card">
            <div className="project-content">
              <p className="project-lead">
                An AI-powered educational platform that extends a
                professor&apos;s knowledge, teaching style, and
                guidance into accessible, 24/7 learning support.
              </p>

              <div className="project-columns">
                <div>
                  <h3>The challenge</h3>

                  <p>
                    Professor availability is limited, course
                    knowledge is spread across lectures and
                    materials, and many students hesitate to ask
                    questions during traditional office hours.
                  </p>
                </div>

                <div>
                  <h3>The approach</h3>

                  <p>
                    Caffeinated Professor combines transcription,
                    structured knowledge preparation, embeddings,
                    semantic retrieval, large language models,
                    evaluation, and voice technology to create
                    grounded educational interactions.
                  </p>
                </div>
              </div>

              <div className="tag-row">
                <span>OpenAI</span>
                <span>RAG</span>
                <span>Whisper</span>
                <span>Supabase</span>
                <span>Redis</span>
                <span>GCP</span>
                <span>ElevenLabs</span>
              </div>
            </div>

            <div className="architecture">
              <div className="arch-node">
                <TerminalSquare />
                Course media
              </div>

              <ChevronRight />

              <div className="arch-node">
                <BookOpen />
                Transcribe & prepare
              </div>

              <ChevronRight />

              <div className="arch-node">
                <Database />
                Embed & retrieve
              </div>

              <ChevronRight />

              <div className="arch-node">
                <BrainCircuit />
                Generate & evaluate
              </div>
            </div>
          </div>

          <div className="role-grid">
            <article className="role-summary">
              <Users />

              <p className="kicker">What I do</p>

              <h3>
                Engineering the platform while helping shape the
                product and research direction.
              </h3>

              <p>
                As a founding engineer, I own major parts of the data,
                retrieval, evaluation, and documentation workflow. I
                work with faculty and technical collaborators to turn
                academic knowledge into a reliable AI learning
                experience.
              </p>
            </article>

            <div className="responsibility-list">
              {responsibilities.map((item) => (
                <div key={item}>
                  <CheckCircle2 />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="impact-grid">
            <article>
              <span>01</span>
              <h3>Knowledge pipeline</h3>
              <p>
                Transforming lecture recordings and course resources
                into searchable, structured knowledge for grounded
                generation.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Evaluation framework</h3>
              <p>
                Assessing usefulness, retrieval, grounding,
                correctness, clarity, hallucination, latency, and
                technical quality.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Responsible design</h3>
              <p>
                Embedding transparency, source grounding, human
                oversight, academic integrity, and educator
                augmentation into the product.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Product leadership</h3>
              <p>
                Supporting feature prioritization, stakeholder
                communication, technical specifications, pilots,
                deployment planning, and roadmap decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section muted" id="wepos">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Capstone project</p>
              <h2>WePOS</h2>
            </div>

            <span className="pill">Project Manager</span>
          </div>

          <div className="project-card wepos-card">
            <div className="project-content">
              <p className="project-lead">
                A cloud-based restaurant point-of-sale platform
                designed to unify menu management, order processing,
                third-party delivery integrations, and operational
                analytics.
              </p>

              <div className="project-columns">
                <div>
                  <h3>The product</h3>

                  <p>
                    WePOS gives restaurant teams a centralized web
                    application for managing menus, incoming orders,
                    customers, and performance insights while
                    supporting delivery-platform integrations through
                    middleware and mock APIs.
                  </p>
                </div>

                <div>
                  <h3>The delivery model</h3>

                  <p>
                    The project was developed through an Agile
                    capstone process with sprint planning, Jira
                    tracking, architecture documentation, DEV and QA
                    environments on AWS, and Jenkins-based CI/CD
                    workflows.
                  </p>
                </div>
              </div>

              <div className="tag-row">
                <span>AWS EC2</span>
                <span>AWS Cognito</span>
                <span>Jenkins</span>
                <span>Jira</span>
                <span>CI/CD</span>
                <span>REST APIs</span>
                <span>UML</span>
                <span>ERD</span>
              </div>
            </div>

            <div className="architecture">
              <div className="arch-node">
                <Users />
                Restaurant team
              </div>

              <ChevronRight />

              <div className="arch-node">
                <TerminalSquare />
                Web POS
              </div>

              <ChevronRight />

              <div className="arch-node">
                <GitBranch />
                API & middleware
              </div>

              <ChevronRight />

              <div className="arch-node">
                <CloudCog />
                AWS environments
              </div>
            </div>
          </div>

          <div className="role-grid">
            <article className="role-summary">
              <BriefcaseBusiness />

              <p className="kicker">My role</p>

              <h3>
                Leading project execution while coordinating
                architecture, delivery, and team alignment.
              </h3>

              <p>
                As Project Manager, I organized the team&apos;s work
                across sprints, translated requirements into
                actionable tasks, tracked risks and dependencies, and
                kept the technical implementation aligned with the
                capstone scope and deadlines.
              </p>
            </article>

            <div className="responsibility-list">
              {[
                "Led sprint planning, backlog prioritization, task ownership, and milestone tracking",
                "Coordinated developers, AWS administration, Jenkins ownership, QA, and documentation activities",
                "Facilitated stand-ups, progress reviews, sprint demonstrations, and team communication",
                "Oversaw system design artifacts including UML, data-flow diagrams, and the database ERD",
                "Supported cloud architecture, authentication, API integration, testing, and release planning",
                "Managed project risks, scope decisions, blockers, and delivery expectations",
                "Prepared project documentation and presentations for academic stakeholder reviews",
              ].map((item) => (
                <div key={item}>
                  <CheckCircle2 />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="impact-grid wepos-impact">
            <article>
              <span>01</span>
              <h3>Agile leadership</h3>
              <p>
                Managed multiple sprints with clear priorities,
                ownership, progress tracking, reviews, and
                retrospectives.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Cloud delivery</h3>
              <p>
                Coordinated separate AWS EC2 development and QA
                environments with AWS Cognito authentication.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>DevOps workflow</h3>
              <p>
                Helped organize Jenkins pipelines for automated DEV
                and QA deployment with team notifications.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>System planning</h3>
              <p>
                Connected product requirements with architecture,
                integrations, testing strategy, documentation, and
                release execution.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section research-section"
        id="research"
      >
        <div className="container">
          <p className="kicker">Research & knowledge</p>

          <h2 className="section-title">
            Exploring what trustworthy AI requires in practice.
          </h2>

          <div className="research-grid">
            {research.map((item) => (
              <article
                className="research-card"
                key={item.title}
              >
                <GraduationCap />
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="knowledge-panel">
            <div>
              <p className="kicker">
                AI ethics knowledge base
              </p>

              <h2>Topics I study, apply, and write about.</h2>

              <p>
                My work connects philosophical principles with
                technical controls, product decisions, evaluation
                methods, governance processes, and real-world
                implementation.
              </p>
            </div>

            <div className="topic-cloud">
              {ethicsTopics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="publications">
        <div className="container publication-wrap">
          <div>
            <p className="kicker">Research output</p>

            <h2>
              Work at the intersection of technology, ethics, and
              education.
            </h2>
          </div>

          <div className="publication-list">
            <article>
              <div>
                <span>Research manuscript · In progress</span>

                <h3>
                  Human-Centered AI: A Framework for Normalizing
                  Ethical AI Use in Daily Life
                </h3>

                <p>
                  Proposing a practical framework for integrating
                  ethical AI into everyday life through human-centered
                  design, transparency, accountability, trust,
                  autonomy, fairness, and responsible human-AI
                  collaboration.
                </p>
              </div>
            </article>

            <article>
              <div>
                <span>Forthcoming research manuscript</span>

                <h3>
                  Ethics and Technology of the Mimetic AI Professor
                </h3>

                <p>
                  Examining the design, educational value, risks, and
                  ethical implications of an AI system that reproduces
                  aspects of a professor&apos;s pedagogical identity.
                </p>
              </div>
            </article>

            <article>
              <div>
                <span>Forthcoming book chapter</span>

                <h3>
                  Design Thinking and Artificial Intelligence:
                  Redefining Pedagogy for the Digital Age
                </h3>

                <p>
                  Contributing to research on AI, design thinking,
                  learning, human-centered innovation, and the future
                  of education.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section philosophy">
        <div className="container philosophy-inner">
          <Quote size={42} />

          <p>
            AI should augment human capability, preserve human
            judgment, and earn trust through transparency,
            accountability, and responsible design.
          </p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-inner">
          <div>
            <p className="kicker">Contact</p>

            <h2>
              Let&apos;s build AI that works—and deserves to be
              trusted.
            </h2>

            <p>
              Open to AI engineering, generative AI, agentic systems,
              Responsible AI, research collaboration, and startup
              opportunities.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:kolanupakaanirudh710@gmail.com?subject=AI%20Engineering%20Opportunity">
              <BrainCircuit />
              <span>Discuss an opportunity</span>
              <ArrowRight />
            </a>

            <a href="mailto:kolanupakaanirudh710@gmail.com?subject=Research%20Collaboration">
              <GraduationCap />
              <span>Research collaboration</span>
              <ArrowRight />
            </a>

            <a
              href="tel:+12149864624"
              className="phone-link"
            >
              +1 (214) 986-4624
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>
            © 2026 AIWITHAK · Anirudh Kolanupaka
          </span>

          <span>
            AI Engineering · Product Building · Responsible AI
          </span>
        </div>
      </footer>
    </main>
  );
}