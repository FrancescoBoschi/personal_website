import PageLayout from '../components/PageLayout';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'MoreThanTech',
    description: 'Full-stack web development for a technology consulting company. Built a modern, responsive website showcasing their services and expertise.',
    link: 'https://morethantech.it/',
    tech: ['Web Development', 'Full Stack'],
    gradient: 'from-blue-900 to-blue-700',
    logo: '/mtt_logo.jpg',
  },
  {
    id: 2,
    name: 'NextHardware',
    description: 'Developed the complete website for NextHardware, a leading Italian tech publication. Also served as an active reviewer of gaming peripherals, contributing detailed technical reviews and analysis.',
    link: 'https://www.nexthardware.com/',
    tech: ['Web Development', 'Content Creation', 'Tech Reviews'],
    gradient: 'from-red-900 to-red-700',
    logo: '/nexthardware_logo.png',
  },
  {
    id: 3,
    name: 'TBG Studio',
    description: 'Web development project for TBG Studio. Created a professional website to showcase their portfolio and creative work.',
    link: 'https://tbgstudio.it/who.php',
    tech: ['Web Development', 'UI/UX'],
    gradient: 'from-purple-900 to-purple-700',
    logo: '/tbg_logo.jpg',
  },
];

export default function Portfolio() {
  return (
    <PageLayout>
      <section className="bg-[#1e1e1f] rounded-2xl p-8 border border-[#2a2a2a]">
        <h2 className="text-3xl font-bold mb-8">
          Portfolio
          <span className="block w-12 h-1 bg-[#ffd700] mt-2"></span>
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Here are some of the public projects I&apos;ve worked on. Most of my recent work is proprietary and developed within my current company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-[#3a3a3a] hover:border-[#ffd700] transition-all"
            >
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="bg-[#1e1e1f] p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ffd700] transition-colors">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-[#2a2a2a] text-gray-400 border border-[#3a3a3a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
