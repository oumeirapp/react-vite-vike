import { usePageContext } from "vike-react/usePageContext";

export function Link({ href, className, children }: { href: string; className?: string; children: string }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a href={href} className={[className, isActive ? "is-active" : undefined].join(" ")}>
      {children}
    </a>
  );
}
