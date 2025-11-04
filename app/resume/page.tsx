import PageLayout from '../components/PageLayout';

export default function Resume() {
  return (
    <PageLayout>
      <section className="bg-[#1e1e1f] rounded-2xl p-8 border border-[#2a2a2a]">
        <h2 className="text-3xl font-bold mb-8">
          Resume
          <span className="block w-12 h-1 bg-[#ffd700] mt-2"></span>
        </h2>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-[#ffd700]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="relative border-l-2 border-[#2a2a2a] ml-3 pl-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">Alma Mater Studiorum - Università di Bologna</h4>
              <p className="text-gray-300 mb-2">Master&apos;s Degree (Laurea Magistrale LM), Computer Science and Engineering</p>
              <p className="text-[#ffd700] font-medium">2019 — 2022 • Grade: 110L/110</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">Alma Mater Studiorum - Università di Bologna</h4>
              <p className="text-gray-300 mb-2">Bachelor&apos;s Degree (Laurea triennale), Computer Science and Engineering</p>
              <p className="text-[#ffd700] font-medium">2016 — 2019 • Grade: 101/110</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">I.T.T. Blaise Pascal Cesena</h4>
              <p className="text-gray-300 mb-2">Computer Engineering</p>
              <p className="text-[#ffd700] font-medium">2012 — 2016</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="text-[#ffd700]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

          <div className="relative border-l-2 border-[#2a2a2a] ml-3 pl-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">Data Scientist - Customer Experience</h4>
              <p className="text-gray-300 mb-2">Technogym</p>
              <p className="text-[#ffd700] font-medium mb-2">Jan 2024 — Present</p>
              <p className="text-gray-400 italic mb-3">Cesena, Emilia-Romagna, Italia</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Architect and maintain the company&apos;s Data Platform on Google Cloud Platform (GCP), ensuring robust data infrastructure for enterprise-scale operations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Design and develop ETL pipelines using BigQuery, Cloud Composer (Apache Airflow), and Dataflow to ingest, transform, and enrich data streams.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Leverage Generative AI and Vertex AI to enhance data enrichment processes and extract actionable insights from complex datasets.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Built a custom RAG-powered chatbot from scratch, integrating Retrieval-Augmented Generation (RAG) systems to power GenAI-based chatbot designed for internal support and customer insights mining.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Collaborate with cross-functional teams to deliver data-driven solutions that empower business decision-making across the organization.</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">Cloud Consultant</h4>
              <p className="text-gray-300 mb-2">Go Reply</p>
              <p className="text-[#ffd700] font-medium mb-2">Jun 2022 — Dec 2024 • 2 yrs 7 mos</p>
              <p className="text-gray-400 italic mb-3">Milano, Italia</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Worked as a consultant for major Italian companies including RCS MediaGroup, RAI, and ENEL, delivering end-to-end data solutions tailored to enterprise needs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Built comprehensive data pipelines and solutions across the Google Cloud Platform ecosystem, including BigQuery, Cloud Composer, Dataflow, and Pub/Sub.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Contributed to AI projects focused on video metadata generation using computer vision and NLP, and customer insights mining through advanced analytics.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Designed and implemented scalable data architectures that enabled real-time analytics and improved data accessibility for business stakeholders.</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">Software Engineer</h4>
              <p className="text-gray-300 mb-2">MoreThanTech</p>
              <p className="text-[#ffd700] font-medium mb-2">Aug 2018 — Jun 2022 • 3 yrs 11 mos</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>External collaborator periodically participating in the development of web applications and bot solutions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Contributed to full-stack development projects, working with modern frameworks and technologies to deliver production-ready applications.</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">Full-stack Developer</h4>
              <p className="text-gray-300 mb-2">Alma Mater Studiorum - Università di Bologna (Contract)</p>
              <p className="text-[#ffd700] font-medium mb-2">May 2021 — Sep 2021 • 5 mos</p>
              <p className="text-gray-400 italic mb-3">Cesena, Emilia-Romagna, Italia</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Contract-based full-stack development role supporting university projects and research initiatives.</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-[#ffd700]"></div>
              <h4 className="text-xl font-semibold mb-2">Researcher</h4>
              <p className="text-gray-300 mb-2">Innopolis University - &quot;Artificial Intelligence in Game Development&quot; Department</p>
              <p className="text-[#ffd700] font-medium mb-2">May 2018 — Jun 2018 • 2 mos</p>
              <p className="text-gray-400 italic mb-3">Innopolis, Russia</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Researched and developed AI techniques for game development, focusing on intelligent agent behaviors and procedural content generation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffd700] flex-shrink-0 leading-relaxed">•</span>
                  <span>Collaborated with international researchers to explore the intersection of artificial intelligence and interactive entertainment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
