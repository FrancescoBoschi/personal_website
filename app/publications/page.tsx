import PageLayout from '../components/PageLayout';

const publications = [
  {
    id: 1,
    title: 'Enhancing Biomedical Scientific Reviews Summarization with Graph-based Factual Evidence Extracted from Papers',
    conference: "Proceedings of the 11th International Conference on Data Science, Technology and Applications - DATA",
    description: "Combining structured knowledge and neural language models to tackle natural language processing tasks is a recent research trend that catalyzes community attention. This integration holds a lot of potential in document summarization, especially in the biomedical domain, where the jargon and the complex facts make the overarching information truly hard to interpret. In this context, graph construction via semantic parsing plays a crucial role in unambiguously capturing the most relevant parts of a document. However, current works are limited to extracting open-domain triples, failing to model real-world n-ary and nested biomedical interactions accurately. To alleviate this issue, we present EASumm, the first framework for biomedical abstractive summarization enhanced by event graph extraction (i.e., graphical representations of medical evidence learned from scientific text), relying on dual text-graph encoders. Extensive evaluations on the CDSR dataset corroborate the importance of explicit event structures, with better or comparable performance than previous state-of-the-art systems.",
    date: 'July 2022',
    link: 'https://www.scitepress.org/Link.aspx?doi=10.5220/0011354900003269',
    image: 'bg-gradient-to-br from-green-900 to-green-700',
  },
  {
    id: 2,
    title: 'Promoting a Safe Return to University Campuses during the COVID-19 Pandemic: Crowdsensing Room Occupancy',
    conference: "GoodIT '21: Proceedings of the Conference on Information Technology for Social Good",
    description: "We describe the work behind a privacy-preserving, crowdsensing approach that promotes social distancing upon the return of students to University. Our main motivation is enabling visualizations that predict room occupancy based on the number of connected devices to particular access points, via anonymous reports about these predictions, and via an unenforced booking system that allows users to communicate their intents about room use.",
    date: 'September 2021',
    link: 'https://dl.acm.org/doi/10.1145/3462203.3475911',
    image: 'bg-gradient-to-br from-blue-900 to-blue-700',
  },
  {
    id: 3,
    title: 'Player perceptions of fairness in oddly shaped dice',
    conference: "FDG '18: Proceedings of the 13th International Conference on the Foundations of Digital Games",
    description: "Dice since the classical era have been some of the most popular object in games, with examples of six sized dice as we know them found in Egyptian grave goods and Roman burials. Over more than a millennium, they have seen diversification. How people have adjusted to, affected by, or embraced these modifications is a subject of this paper. The study presented investigates people's perception of fairness in a pair of dice with a 2D6 distribution. Three pair of dice were presented, each modeling the distribution and proven mathematically to be fair, to the participants and they were asked about their opinion regarding the fairness of these dice.",
    date: 'August 2018',
    link: 'https://dl.acm.org/doi/10.1145/3235765.3236389',
    image: 'bg-gradient-to-br from-purple-900 to-purple-700',
  },
];

export default function Publications() {
  return (
    <PageLayout>
      <section className="bg-[#1e1e1f] rounded-2xl p-8 border border-[#2a2a2a]">
        <h2 className="text-3xl font-bold mb-8">
          Publications
          <span className="block w-12 h-1 bg-[#ffd700] mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {publications.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl overflow-hidden border border-[#3a3a3a] hover:border-[#ffd700] transition-all group block"
            >
              <div className="bg-[#1e1e1f] p-6">
                <p className="text-sm text-gray-400 mb-2">{post.conference}</p>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#ffd700] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#ffd700] mb-4">{post.date}</p>
                <p className="text-gray-300 leading-relaxed">{post.description}</p>
                <div className="mt-4 flex items-center gap-2 text-[#ffd700] group-hover:gap-3 transition-all">
                  <span className="text-sm font-semibold">Read publication</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
