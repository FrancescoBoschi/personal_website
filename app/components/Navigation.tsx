'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#1e1e1f] rounded-2xl p-2 border border-[#2a2a2a]">
      <ul className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-6 py-3 rounded-xl font-medium transition-colors ${
                pathname === item.path
                  ? 'bg-[#2a2a2a] text-[#ffd700]'
                  : 'hover:bg-[#2a2a2a]'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
