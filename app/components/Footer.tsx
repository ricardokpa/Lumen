import type { NavItem } from './Header';

type FooterProps = {
  links: NavItem[];
  copyrightText: string;
};

export default function Footer({ links, copyrightText }: FooterProps) {
  return (
    <footer className="footer fade-up is-visible">
      <div className="container">
        <div className="footer-links">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}
