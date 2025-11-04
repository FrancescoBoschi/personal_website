import PageLayout from './components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      {/* About Section */}
            <section id="about" className="bg-[#1e1e1f] rounded-2xl p-8 border border-[#2a2a2a]">
              <h2 className="text-3xl font-bold mb-6">
                About Me
                <span className="block w-12 h-1 bg-[#ffd700] mt-2"></span>
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                They say data never lies — but it sure loves to hide! I&apos;m Francesco, a Data Engineer who spends his days teaching machines to think and pipelines to flow smoothly. Think of me as a digital plumber, except instead of fixing leaks, I&apos;m making sure your data doesn&apos;t get lost in the cloud (literally).
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed">
                My journey started at <span className="text-[#ffd700]">Go Reply</span>, where I worked as a consultant for major Italian companies like RCS, RAI, and ENEL. I built end-to-end data solutions across the Google Cloud Platform stack and contributed to AI projects focused on video metadata generation and customer insights mining.
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Now at <span className="text-[#ffd700]">Technogym</span>, I architect and maintain the company&apos;s Data Platform on GCP, designing robust ETL pipelines that ingest, transform, and enrich data using Generative AI when needed. I work with BigQuery, Cloud Composer (Apache Airflow), and Vertex AI, and built a custom RAG-powered chatbot from scratch — because apparently, I enjoy late-night debugging sessions with AI hallucinations.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                When I&apos;m not wrangling data or negotiating with stubborn APIs, you&apos;ll find me at the gym. The irony of working at a fitness equipment company while spending most of my day at a desk isn&apos;t lost on me — but hey, someone&apos;s got to beta-test the equipment. Training is my reset button and my way of balancing code with occasionally lifting heavy things.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need someone to build a bulletproof data pipeline, teach a chatbot to sound less robotic, or just want to chat about tech trends and workout routines, let&apos;s connect and turn your data chaos into something that actually works.
              </p>

              <h3 className="text-2xl font-bold mb-6">What I&apos;m Doing</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Data Engineering - Full Width */}
                <div className="md:col-span-2 bg-[#2a2a2a] p-6 rounded-2xl border border-[#3a3a3a] hover:border-[#ffd700] transition-all">
                  <div className="text-[#ffd700] mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Data Engineering</h4>
                  <p className="text-gray-400 text-sm">
                    Architecting and managing Technogym&apos;s Data Platform on Google Cloud Platform. I design and develop robust ETL pipelines that transform raw data into actionable insights, processing and enriching information streams to empower data-driven decision-making across the organization. From ingestion to delivery, I ensure data quality and reliability for diverse business purposes.
                  </p>
                </div>

                {/* AI Engineering */}
                <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-[#3a3a3a] hover:border-[#ffd700] transition-all">
                  <div className="text-[#ffd700] mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">AI Engineering & Development</h4>
                  <p className="text-gray-400 text-sm">
                    Building intelligent applications that harness the power of artificial intelligence. From AI-enhanced data enrichment to sophisticated data-centric solutions like conversational chatbots and RAG (Retrieval-Augmented Generation) systems, I craft applications that seamlessly integrate AI capabilities to solve real-world problems.
                  </p>
                </div>

                {/* Full Stack Development */}
                <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-[#3a3a3a] hover:border-[#ffd700] transition-all">
                  <div className="text-[#ffd700] mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Full Stack Development</h4>
                  <p className="text-gray-400 text-sm">
                    Bringing creative ideas to life through end-to-end application development. I leverage modern frameworks and best practices to build responsive, scalable web applications for personal projects, exploring new technologies and pushing the boundaries of what&apos;s possible in web development.
                  </p>
                </div>
              </div>
            </section>
    </PageLayout>
  );
}
