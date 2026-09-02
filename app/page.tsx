"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
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

const ETHICLENS_LIVE_URL = "https://ethiclens.ai.studio";


const DIPLOMA_URL = "/pace-ms-diploma.pdf";

const PACE_VERIFY_URL = "https://cedt.pace.edu/validate/";

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
    items: [
      "LangGraph",
      "LangChain",
      "CrewAI",
      "AutoGen",
      "MCP",
    ],
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
    items: [
      "Python",
      "FastAPI",
      "SQL",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: Layers3,
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "MLflow",
    ],
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

/*
  Course titles below come directly from the Pace transcript.

  The "connection" text explains how I connect that academic
  foundation to the engineering/research work shown in this portfolio.
*/

const courses = [
  {
    code: "CS 696C",
    title: "AI Ethics",
    area: "Responsible AI",
    description:
      "A central part of my academic foundation in thinking critically about the human and societal consequences of AI.",
    connection:
      "Connects directly to my work on EthicLens AI, human-centered AI research, responsible deployment, fairness, privacy, transparency, accountability, and human oversight.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    code: "CS 627",
    title: "Artificial Intelligence",
    area: "AI Foundations",
    description:
      "Graduate study focused on the foundations of artificial intelligence and computational approaches to intelligent systems.",
    connection:
      "Supports my work with generative AI, LLM applications, AI agents, evaluation workflows, and intelligent product development.",
    icon: BrainCircuit,
    featured: true,
  },
  {
    code: "CS 619",
    title: "Data Mining",
    area: "Data & Machine Learning",
    description:
      "Graduate-level study centered on extracting useful information and patterns from data.",
    connection:
      "Relevant to data preparation, AI evaluation, retrieval systems, knowledge pipelines, and data-driven product decisions.",
    icon: Database,
    featured: true,
  },
  {
    code: "CS 610",
    title: "Introduction to Parallel Computing",
    area: "Scalable Computing",
    description:
      "Academic foundation in parallel computation and approaches for solving computational problems across multiple processing resources.",
    connection:
      "Strengthens how I think about performance, scalability, distributed workloads, and production AI infrastructure.",
    icon: Layers3,
    featured: false,
  },
  {
    code: "CS 612",
    title: "Concepts & Structures: Internet Computing",
    area: "Internet Systems",
    description:
      "Graduate study of computing concepts and structures used to build internet-based systems.",
    connection:
      "Connects to my work with web applications, APIs, cloud-hosted AI products, client-server systems, and application architecture.",
    icon: Network,
    featured: false,
  },
  {
    code: "CS 633",
    title: "Data Communications & Networks",
    area: "Networks",
    description:
      "Graduate study of networking and communication concepts underlying connected computing systems.",
    connection:
      "Provides infrastructure context for cloud applications, APIs, distributed AI services, and networked software systems.",
    icon: Network,
    featured: false,
  },
  {
    code: "CS 623",
    title: "Database Management Systems",
    area: "Data Engineering",
    description:
      "Academic foundation in database systems and structured approaches to storing and managing application data.",
    connection:
      "Relevant to SQL, application backends, vector-enabled data systems, Supabase, retrieval workflows, and persistent AI application state.",
    icon: Database,
    featured: false,
  },
  {
    code: "CS 608",
    title: "Algorithms & Computing Theory",
    area: "Computer Science Foundations",
    description:
      "Graduate study in algorithms, computational reasoning, and theoretical computer science.",
    connection:
      "Supports structured problem solving, efficiency analysis, system design, and reasoning about computational tradeoffs.",
    icon: Code2,
    featured: false,
  },
  {
    code: "CS 604",
    title: "Computer Systems and Concepts",
    area: "Systems",
    description:
      "Graduate-level foundation in computer systems and the concepts that support modern software execution.",
    connection:
      "Supports my understanding of how applications interact with underlying compute environments and infrastructure.",
    icon: TerminalSquare,
    featured: false,
  },
  {
    code: "CS 691",
    title: "Computer Science Capstone Project",
    area: "Product Delivery",
    description:
      "A graduate capstone focused on applying computer science knowledge through a substantial team project.",
    connection:
      "This became WePOS, where I worked as Project Manager across sprint planning, AWS environments, APIs, CI/CD, documentation, architecture, testing, and delivery.",
    icon: BriefcaseBusiness,
    featured: true,
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
    detailsUrl: "#caffeinated-professor",
  },
  {
    name: "BuildFolio",
    category: "AI Portfolio Builder",
    description:
      "An AI-powered portfolio platform designed to help professionals transform their experience, projects, skills, and goals into a structured digital portfolio.",
    status: "In Development",
    statusClass: "product-status-building",
    icon: FileUser,
    technologies: [
      "Next.js",
      "Generative AI",
      "TypeScript",
      "Prompt Engineering",
    ],
    detailsUrl: "",
  },
  {
    name: "PathPulse",
    category: "Career Intelligence",
    description:
      "An AI career path and certification navigator that identifies skill gaps, recommends learning paths, compares certifications, and supports career planning.",
    status: "Planned",
    statusClass: "product-status-planned",
    icon: Route,
    technologies: [
      "Career AI",
      "Recommendations",
      "Skill Analysis",
      "LLMs",
    ],
    detailsUrl: "",
  },
  {
    name: "BigLeap",
    category: "AI Career Platform",
    description:
      "An AI career accelerator designed to connect professional goals, technical skill development, project readiness, and personalized job preparation.",
    status: "Planned",
    statusClass: "product-status-planned",
    icon: BriefcaseBusiness,
    technologies: [
      "Agentic AI",
      "Career Planning",
      "Personalization",
      "Automation",
    ],
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
    tags: [
      "Governance",
      "Bias",
      "Safety",
      "Trust",
    ],
  },
  {
    title: "Human-Centered AI",
    description:
      "Studying how AI can augment human capability while preserving autonomy, dignity, agency, and informed judgment.",
    tags: [
      "Human Oversight",
      "Autonomy",
      "Dignity",
    ],
  },
  {
    title: "Ethical Educational AI",
    description:
      "Exploring consent, disclosure, pedagogical trust, academic integrity, and accountability in mimetic AI tutors.",
    tags: [
      "EdTech",
      "Mimetic AI",
      "Trustworthy LLMs",
    ],
  },
  {
    title: "LLM Evaluation",
    description:
      "Designing practical evaluations for retrieval quality, groundedness, hallucination, harmful outputs, clarity, and usefulness.",
    tags: [
      "Evals",
      "RAG",
      "Hallucination",
    ],
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

const ethicLensEvaluationAreas = [
  "Bias and fairness",
  "Privacy and data use",
  "Transparency",
  "Explainability",
  "Hallucination risk",
  "Human oversight",
  "AI safety",
  "Governance",
];

const ethicLensBuildSteps = [
  "Designing a structured Responsible AI assessment framework",
  "Creating prompts for risk classification and control recommendations",
  "Developing explainable reports instead of simple risk scores",
  "Adding human-review points for high-risk AI decisions",
  "Connecting ethical principles with technical and governance controls",
  "Deploying and iterating the application through Google Cloud Run",
];

const weposResponsibilities = [
  "Led sprint planning, backlog prioritization, task ownership, and milestone tracking",
  "Coordinated developers, AWS administration, Jenkins ownership, QA, and documentation activities",
  "Facilitated stand-ups, progress reviews, sprint demonstrations, and team communication",
  "Oversaw system design artifacts including UML, data-flow diagrams, and the database ERD",
  "Supported cloud architecture, authentication, API integration, testing, and release planning",
  "Managed project risks, scope decisions, blockers, and delivery expectations",
  "Prepared project documentation and presentations for academic stakeholder reviews",
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a
            className="brand"
            href="#top"
          >
            AIWITHAK<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">
              About
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#products">
              AI Products
            </a>

            <a href="#caffeinated-professor">
              Caffeinated Professor
            </a>

            <a href="#wepos">
              WePOS
            </a>

            <a href="#research">
              Research
            </a>

            <a href="#publications">
              Publications
            </a>
          </div>

          <a
            className="nav-cta"
            href="#contact"
          >
            Contact
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <section
        className="hero"
        id="top"
      >
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
              intelligent, trustworthy,
              and human-centered.
            </span>
          </h1>

          <p className="hero-copy">
            I&apos;m Anirudh Kolanupaka,
            an AI engineer and founding
            engineer working across
            generative AI, agentic systems,
            RAG, LLM evaluation,
            educational technology,
            and Responsible AI.
          </p>

          <div className="hero-actions">
            <a
              className="button primary"
              href="#products"
            >
              Explore my products
              <ArrowRight size={18} />
            </a>

            <a
              className="button secondary"
              href="#research"
            >
              View research
              <BookOpen size={18} />
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>
                AI Engineering
              </strong>

              <span>
                LLMs · Agents · RAG · APIs
              </span>
            </div>

            <div>
              <strong>
                Product Building
              </strong>

              <span>
                Education · Ethics · Career AI
              </span>
            </div>

            <div>
              <strong>
                Research Focus
              </strong>

              <span>
                Responsible and educational AI
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="about"
      >
        <div className="container split">
          <div>
            <p className="kicker">
              About
            </p>

            <h2>
              I build AI systems and study
              the responsibilities that come
              with them.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              My work sits at the intersection
              of engineering, product
              development, and AI ethics. I
              build production-oriented
              applications using large
              language models,
              retrieval-augmented generation,
              intelligent agents, semantic
              search, APIs, and cloud
              infrastructure.
            </p>

            <p>
              Alongside engineering, I study
              fairness, transparency, privacy,
              explainability, human oversight,
              trustworthy AI, and responsible
              deployment. My goal is to help
              create systems that deliver
              measurable value while
              preserving human dignity,
              judgment, and accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <p className="kicker">
            Core capabilities
          </p>

          <h2 className="section-title">
            Engineering depth with
            Responsible AI thinking.
          </h2>

          <div className="skills-grid">
            {skills.map(
              ({
                title,
                icon: Icon,
                items,
              }) => (
                <article
                  className="skill-card"
                  key={title}
                >
                  <Icon />

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {items.join(" · ")}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section
        className="section education-section"
        id="education"
      >
        <div className="container">
          <div className="education-heading">
            <div>
              <p className="kicker">
                Education & Academic Foundation
              </p>

              <h2>
                The computer science foundation
                behind the AI products I build.
              </h2>
            </div>

            <p>
              My graduate work at Pace
              University combined computer
              science foundations with AI,
              data, systems, networking,
              computing infrastructure,
              project delivery, and AI ethics.
            </p>
          </div>

          <div className="degree-card">
            <div className="degree-main">
              <div className="degree-icon">
                <GraduationCap
                  size={34}
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="kicker">
                  Graduate Education
                </p>

                <h3>
                  Master of Science in
                  Computer Science
                </h3>

                <p className="degree-school">
                  Pace University
                </p>

                <p className="degree-school-detail">
                  Seidenberg School of Computer
                  Science and Information Systems
                </p>

                <div className="degree-meta">
                  <span>
                    New York
                  </span>

                  <span>
                    Degree awarded December 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="degree-verification">
              <Award size={28} />

              <div>
                <strong>
                  Certified Electronic Diploma
                </strong>

                <p>
                  Pace University issued the
                  degree as a certified
                  electronic credential.
                </p>
              </div>

              <div className="degree-actions">
                <a
                  href={DIPLOMA_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  View diploma
                  <ExternalLink size={15} />
                </a>

                <a
                  href={PACE_VERIFY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify credential
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="course-heading">
            <div>
              <p className="kicker">
                Graduate coursework
              </p>

              <h2>
                What I studied—and how I
                connect it to my work today.
              </h2>
            </div>
          </div>

          <div className="featured-courses-grid">
            {courses
              .filter(
                (course) =>
                  course.featured,
              )
              .map((course) => {
                const CourseIcon =
                  course.icon;

                return (
                  <article
                    className="course-card course-card-featured"
                    key={course.code}
                  >
                    <div className="course-top">
                      <div className="course-icon">
                        <CourseIcon
                          size={24}
                        />
                      </div>

                      <span className="course-code">
                        {course.code}
                      </span>
                    </div>

                    <p className="course-area">
                      {course.area}
                    </p>

                    <h3>
                      {course.title}
                    </h3>

                    <p className="course-description">
                      {course.description}
                    </p>

                    <div className="course-connection">
                      <span>
                        Connection to my work
                      </span>

                      <p>
                        {course.connection}
                      </p>
                    </div>
                  </article>
                );
              })}
          </div>

          <div className="academic-foundations">
            <p className="kicker">
              Additional CS foundation
            </p>

            <div className="academic-foundations-grid">
              {courses
                .filter(
                  (course) =>
                    !course.featured,
                )
                .map((course) => {
                  const CourseIcon =
                    course.icon;

                  return (
                    <article
                      className="academic-course-card"
                      key={course.code}
                    >
                      <div className="academic-course-icon">
                        <CourseIcon
                          size={21}
                        />
                      </div>

                      <div>
                        <span>
                          {course.code} ·{" "}
                          {course.area}
                        </span>

                        <h3>
                          {course.title}
                        </h3>

                        <p>
                          {course.connection}
                        </p>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>

          <div className="education-to-products">
            <div>
              <p className="kicker">
                From classroom to product
              </p>

              <h2>
                Turning academic foundations
                into systems I can actually
                build.
              </h2>
            </div>

            <div className="learning-paths">
              <div className="learning-path">
                <span className="learning-step">
                  AI Ethics
                </span>

                <ArrowRight />

                <span className="learning-step">
                  Responsible AI
                </span>

                <ArrowRight />

                <span className="learning-step learning-result">
                  EthicLens AI
                </span>
              </div>

              <div className="learning-path">
                <span className="learning-step">
                  AI + Data Mining
                </span>

                <ArrowRight />

                <span className="learning-step">
                  Intelligent Systems
                </span>

                <ArrowRight />

                <span className="learning-step learning-result">
                  AI Products
                </span>
              </div>

              <div className="learning-path">
                <span className="learning-step">
                  Internet + Networks
                </span>

                <ArrowRight />

                <span className="learning-step">
                  APIs + Cloud
                </span>

                <ArrowRight />

                <span className="learning-step learning-result">
                  Deployed Apps
                </span>
              </div>

              <div className="learning-path">
                <span className="learning-step">
                  CS Capstone
                </span>

                <ArrowRight />

                <span className="learning-step">
                  Product Delivery
                </span>

                <ArrowRight />

                <span className="learning-step learning-result">
                  WePOS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI PRODUCTS */}

      <section
        className="section products-section"
        id="products"
      >
        <div className="container">
          <div className="products-intro">
            <div>
              <p className="kicker">
                AI Products
              </p>

              <h2>
                Building practical AI products
                around ethics, education, and
                professional development.
              </h2>
            </div>

            <p>
              My product work combines AI
              engineering, Responsible AI
              research, product strategy,
              evaluation, and cloud deployment.
            </p>
          </div>

          <article className="ethiclens-featured">
            <div className="ethiclens-featured-content">
              <div className="ethiclens-featured-top">
                <div className="ethiclens-icon">
                  <Scale
                    size={30}
                    aria-hidden="true"
                  />
                </div>

                <span className="featured-badge">
                  <Sparkles size={14} />

                  Flagship Product
                </span>
              </div>

              <p className="product-category">
                Responsible AI Platform
              </p>

              <h3>
                EthicLens AI
              </h3>

              <p className="ethiclens-lead">
                An AI ethics auditing platform
                that helps teams evaluate AI
                systems across fairness,
                privacy, transparency,
                explainability, hallucination,
                safety, human oversight,
                governance, and compliance risk.
              </p>

              <p className="ethiclens-description">
                I am building EthicLens AI to
                translate Responsible AI
                principles into a practical
                assessment workflow. Users
                describe an AI system, its
                purpose, data usage, decision
                process, and deployment context.
                EthicLens then generates a
                structured risk assessment with
                identified concerns, severity
                levels, recommended controls,
                and areas requiring human review.
              </p>

              <div className="ethiclens-actions">
                <a
                  href={
                    ETHICLENS_LIVE_URL
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="ethiclens-primary-button"
                >
                  Open EthicLens AI

                  <ArrowUpRight
                    size={17}
                  />
                </a>

                <a
                  href="#research"
                  className="ethiclens-secondary-button"
                >
                  View Responsible AI research

                  <ArrowRight
                    size={16}
                  />
                </a>
              </div>
            </div>

            <div className="ethiclens-featured-details">
              <div className="ethiclens-detail-block">
                <p className="kicker">
                  What it evaluates
                </p>

                <div className="ethiclens-risk-grid">
                  {ethicLensEvaluationAreas.map(
                    (area) => (
                      <span key={area}>
                        {area}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="ethiclens-detail-block">
                <p className="kicker">
                  How I am building it
                </p>

                <div className="ethiclens-build-list">
                  {ethicLensBuildSteps.map(
                    (item) => (
                      <div key={item}>
                        <CheckCircle2 />

                        <span>
                          {item}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="ethiclens-detail-block">
                <p className="kicker">
                  Technical foundation
                </p>

                <div className="product-technologies">
                  <span>
                    Gemini
                  </span>

                  <span>
                    Prompt Engineering
                  </span>

                  <span>
                    Responsible AI
                  </span>

                  <span>
                    Risk Analysis
                  </span>

                  <span>
                    Cloud Run
                  </span>

                  <span>
                    AI Governance
                  </span>
                </div>
              </div>
            </div>
          </article>

          <div className="ethics-foundation">
            <div className="ethics-foundation-icon">
              <GraduationCap
                size={28}
              />
            </div>

            <div>
              <p className="kicker">
                Responsible AI foundation
              </p>

              <h3>
                Applying ethical AI knowledge
                developed through research and
                work with Professor James
                Brusseau.
              </h3>

              <p>
                My approach to EthicLens is
                informed by my study of AI
                ethics and my work with
                Professor James Brusseau on
                Caffeinated Professor and
                related research. That
                experience strengthened my
                understanding of autonomy,
                dignity, fairness, privacy,
                transparency, explainability,
                accountability, human oversight,
                and the social impact of AI.
              </p>

              <p>
                Rather than treating AI ethics
                as a checklist, I use these
                principles to examine how an AI
                system affects real people, how
                decisions are explained, where
                human judgment is required, and
                what controls should exist
                before and after deployment.
              </p>
            </div>
          </div>

          <div className="other-products-heading">
            <p className="kicker">
              Additional products
            </p>

            <h2>
              More AI applications in
              development.
            </h2>
          </div>

          <div className="products-grid">
            {products.map(
              (product) => {
                const ProductIcon =
                  product.icon;

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

                      <h3>
                        {product.name}
                      </h3>

                      <p className="product-description">
                        {
                          product.description
                        }
                      </p>

                      <div
                        className="product-technologies"
                        aria-label={`${product.name} technologies`}
                      >
                        {product.technologies.map(
                          (
                            technology,
                          ) => (
                            <span
                              key={
                                technology
                              }
                            >
                              {
                                technology
                              }
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="product-card-actions">
                      <span className="product-unavailable">
                        {product.status ===
                        "Planned"
                          ? "Coming soon"
                          : product.status ===
                              "Research Product"
                            ? "Detailed project below"
                            : "Demo coming soon"}
                      </span>

                      {product.detailsUrl && (
                        <a
                          href={
                            product.detailsUrl
                          }
                          className="product-secondary-link"
                        >
                          View details

                          <ArrowRight
                            size={15}
                          />
                        </a>
                      )}
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* CAFFEINATED PROFESSOR */}

      <section
        className="section"
        id="caffeinated-professor"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">
                Flagship education work
              </p>

              <h2>
                Caffeinated Professor
              </h2>
            </div>

            <span className="pill">
              Founding AI Engineer
            </span>
          </div>

          <div className="project-card">
            <div className="project-content">
              <p className="project-lead">
                An AI-powered educational
                platform that extends a
                professor&apos;s knowledge,
                teaching style, and guidance
                into accessible, 24/7 learning
                support.
              </p>

              <div className="project-columns">
                <div>
                  <h3>
                    The challenge
                  </h3>

                  <p>
                    Professor availability is
                    limited, course knowledge is
                    spread across lectures and
                    materials, and many students
                    hesitate to ask questions
                    during traditional office
                    hours.
                  </p>
                </div>

                <div>
                  <h3>
                    The approach
                  </h3>

                  <p>
                    Caffeinated Professor
                    combines transcription,
                    structured knowledge
                    preparation, embeddings,
                    semantic retrieval, large
                    language models, evaluation,
                    and voice technology to
                    create grounded educational
                    interactions.
                  </p>
                </div>
              </div>

              <div className="tag-row">
                <span>
                  OpenAI
                </span>

                <span>
                  RAG
                </span>

                <span>
                  Whisper
                </span>

                <span>
                  Supabase
                </span>

                <span>
                  Redis
                </span>

                <span>
                  GCP
                </span>

                <span>
                  ElevenLabs
                </span>
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

              <p className="kicker">
                What I do
              </p>

              <h3>
                Engineering the platform while
                helping shape the product and
                research direction.
              </h3>

              <p>
                As a founding engineer, I own
                major parts of the data,
                retrieval, evaluation, and
                documentation workflow. I work
                with faculty and technical
                collaborators to turn academic
                knowledge into a reliable AI
                learning experience.
              </p>
            </article>

            <div className="responsibility-list">
              {responsibilities.map(
                (item) => (
                  <div key={item}>
                    <CheckCircle2 />

                    <span>
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="impact-grid">
            <article>
              <span>
                01
              </span>

              <h3>
                Knowledge pipeline
              </h3>

              <p>
                Transforming lecture recordings
                and course resources into
                searchable, structured knowledge
                for grounded generation.
              </p>
            </article>

            <article>
              <span>
                02
              </span>

              <h3>
                Evaluation framework
              </h3>

              <p>
                Assessing usefulness, retrieval,
                grounding, correctness, clarity,
                hallucination, latency, and
                technical quality.
              </p>
            </article>

            <article>
              <span>
                03
              </span>

              <h3>
                Responsible design
              </h3>

              <p>
                Embedding transparency, source
                grounding, human oversight,
                academic integrity, and educator
                augmentation into the product.
              </p>
            </article>

            <article>
              <span>
                04
              </span>

              <h3>
                Product leadership
              </h3>

              <p>
                Supporting feature
                prioritization, stakeholder
                communication, technical
                specifications, pilots,
                deployment planning, and roadmap
                decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WEPOS */}

      <section
        className="section muted"
        id="wepos"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">
                Capstone project
              </p>

              <h2>
                WePOS
              </h2>
            </div>

            <span className="pill">
              Project Manager
            </span>
          </div>

          <div className="project-card wepos-card">
            <div className="project-content">
              <p className="project-lead">
                A cloud-based restaurant
                point-of-sale platform designed
                to unify menu management, order
                processing, third-party
                delivery integrations, and
                operational analytics.
              </p>

              <div className="project-columns">
                <div>
                  <h3>
                    The product
                  </h3>

                  <p>
                    WePOS gives restaurant teams
                    a centralized web
                    application for managing
                    menus, incoming orders,
                    customers, and performance
                    insights while supporting
                    delivery-platform
                    integrations through
                    middleware and mock APIs.
                  </p>
                </div>

                <div>
                  <h3>
                    The delivery model
                  </h3>

                  <p>
                    The project was developed
                    through an Agile capstone
                    process with sprint
                    planning, Jira tracking,
                    architecture documentation,
                    DEV and QA environments on
                    AWS, and Jenkins-based CI/CD
                    workflows.
                  </p>
                </div>
              </div>

              <div className="tag-row">
                <span>
                  AWS EC2
                </span>

                <span>
                  AWS Cognito
                </span>

                <span>
                  Jenkins
                </span>

                <span>
                  Jira
                </span>

                <span>
                  CI/CD
                </span>

                <span>
                  REST APIs
                </span>

                <span>
                  UML
                </span>

                <span>
                  ERD
                </span>
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

              <p className="kicker">
                My role
              </p>

              <h3>
                Leading project execution
                while coordinating architecture,
                delivery, and team alignment.
              </h3>

              <p>
                As Project Manager, I organized
                the team&apos;s work across
                sprints, translated requirements
                into actionable tasks, tracked
                risks and dependencies, and kept
                the technical implementation
                aligned with the capstone scope
                and deadlines.
              </p>
            </article>

            <div className="responsibility-list">
              {weposResponsibilities.map(
                (item) => (
                  <div key={item}>
                    <CheckCircle2 />

                    <span>
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="impact-grid wepos-impact">
            <article>
              <span>
                01
              </span>

              <h3>
                Agile leadership
              </h3>

              <p>
                Managed multiple sprints with
                clear priorities, ownership,
                progress tracking, reviews, and
                retrospectives.
              </p>
            </article>

            <article>
              <span>
                02
              </span>

              <h3>
                Cloud delivery
              </h3>

              <p>
                Coordinated separate AWS EC2
                development and QA environments
                with AWS Cognito authentication.
              </p>
            </article>

            <article>
              <span>
                03
              </span>

              <h3>
                DevOps workflow
              </h3>

              <p>
                Helped organize Jenkins
                pipelines for automated DEV and
                QA deployment with team
                notifications.
              </p>
            </article>

            <article>
              <span>
                04
              </span>

              <h3>
                System planning
              </h3>

              <p>
                Connected product requirements
                with architecture, integrations,
                testing strategy, documentation,
                and release execution.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RESEARCH */}

      <section
        className="section research-section"
        id="research"
      >
        <div className="container">
          <p className="kicker">
            Research & knowledge
          </p>

          <h2 className="section-title">
            Exploring what trustworthy AI
            requires in practice.
          </h2>

          <div className="research-grid">
            {research.map(
              (item) => (
                <article
                  className="research-card"
                  key={item.title}
                >
                  <GraduationCap />

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="tag-row">
                    {item.tags.map(
                      (tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="knowledge-panel">
            <div>
              <p className="kicker">
                AI ethics knowledge base
              </p>

              <h2>
                Topics I study, apply, and
                write about.
              </h2>

              <p>
                My work connects philosophical
                principles with technical
                controls, product decisions,
                evaluation methods, governance
                processes, and real-world
                implementation.
              </p>
            </div>

            <div className="topic-cloud">
              {ethicsTopics.map(
                (topic) => (
                  <span key={topic}>
                    {topic}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}

      <section
        className="section"
        id="publications"
      >
        <div className="container publication-wrap">
          <div>
            <p className="kicker">
              Research output
            </p>

            <h2>
              Work at the intersection of
              technology, ethics, and education.
            </h2>
          </div>

          <div className="publication-list">
            <article>
              <div>
                <span>
                  Research manuscript · In
                  progress
                </span>

                <h3>
                  Human-Centered AI: A Framework
                  for Normalizing Ethical AI Use
                  in Daily Life
                </h3>

                <p>
                  Proposing a practical framework
                  for integrating ethical AI into
                  everyday life through
                  human-centered design,
                  transparency, accountability,
                  trust, autonomy, fairness, and
                  responsible human-AI
                  collaboration.
                </p>
              </div>
            </article>

            <article>
              <div>
                <span>
                  Forthcoming research
                  manuscript
                </span>

                <h3>
                  Ethics and Technology of the
                  Mimetic AI Professor
                </h3>

                <p>
                  Examining the design,
                  educational value, risks, and
                  ethical implications of an AI
                  system that reproduces aspects
                  of a professor&apos;s
                  pedagogical identity.
                </p>
              </div>
            </article>

            <article>
              <div>
                <span>
                  Forthcoming book chapter
                </span>

                <h3>
                  Design Thinking and Artificial
                  Intelligence: Redefining
                  Pedagogy for the Digital Age
                </h3>

                <p>
                  Contributing to research on AI,
                  design thinking, learning,
                  human-centered innovation, and
                  the future of education.
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
            AI should augment human capability,
            preserve human judgment, and earn
            trust through transparency,
            accountability, and responsible
            design.
          </p>
        </div>
      </section>

      {/* CONTACT */}

      <section
        className="section contact"
        id="contact"
      >
        <div className="container contact-inner">
          <div>
            <p className="kicker">
              Contact
            </p>

            <h2>
              Let&apos;s build AI that
              works—and deserves to be trusted.
            </h2>

            <p>
              Open to AI engineering, generative
              AI, agentic systems, Responsible
              AI, research collaboration, and
              startup opportunities.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:kolanupakaanirudh710@gmail.com?subject=AI%20Engineering%20Opportunity">
              <BrainCircuit />

              <span>
                Discuss an opportunity
              </span>

              <ArrowRight />
            </a>

            <a href="mailto:kolanupakaanirudh710@gmail.com?subject=Research%20Collaboration">
              <GraduationCap />

              <span>
                Research collaboration
              </span>

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
            © 2026 AIWITHAK · Anirudh
            Kolanupaka
          </span>

          <span>
            AI Engineering · Product Building ·
            Responsible AI
          </span>
        </div>
      </footer>
    </main>
  );
}