import PageLayout from '../components/PageLayout';

const blogPosts = [
  {
    id: 1,
    title: 'Flutter Vs. Flock: Cross-Platform Evaluation',
    description: 'Explore the differences between Flutter and Flock, a new fork focused on faster development and community-driven cross-platform innovation.',
    date: 'Nov 18, 2024',
    image: 'bg-gradient-to-br from-purple-900 to-black',
  },
  {
    id: 2,
    title: "Flutter's Impact On Future Cross-Platform Apps",
    description: "Explore Flutter's growing influence on cross-platform app development in 2024 and its future potential across mobile, web, and IoT platforms.",
    date: 'Nov 13, 2024',
    image: 'bg-gradient-to-br from-purple-600 to-purple-800',
  },
];

export default function Blog() {
  return (
    <PageLayout>
      <section className="bg-[#1e1e1f] rounded-2xl p-8 border border-[#2a2a2a]">
        <h2 className="text-3xl font-bold mb-8">
          Blog
          <span className="block w-12 h-1 bg-[#ffd700] mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden border border-[#3a3a3a] hover:border-[#ffd700] transition-all cursor-pointer group"
            >
              <div className={'aspect-video flex items-center justify-center text-4xl font-bold p-8 ' + post.image}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-2">{post.title.split(':')[0]}</div>
                  {post.title.split(':')[1] && (
                    <div className="text-lg md:text-xl">{post.title.split(':')[1]}</div>
                  )}
                </div>
              </div>
              <div className="bg-[#1e1e1f] p-6">
                <p className="text-sm text-gray-400 mb-2">Blog • {post.date}</p>
                <h3 className={'text-xl font-semibold mb-3 group-hover:text-[#ffd700] transition-colors ' + (post.id === 2 ? 'text-[#ffd700]' : '')}>
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
