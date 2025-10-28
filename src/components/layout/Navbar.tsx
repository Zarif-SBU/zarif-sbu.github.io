'use client';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import {useLocation} from 'react-router-dom';

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 324 323' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  )
}
// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);
// Types
export interface NavbarNavItem {
  href?: string;
  label: string;
  active?: boolean;
}
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
//   logo?: React.ReactNode;
//   logoHref?: string;
  navigationLinks?: NavbarNavItem[];
//   signInText?: string;
//   signInHref?: string;

//   ctaText?: string;
//   ctaHref?: string;
//   onSignInClick?: () => void;
//   onCtaClick?: () => void;
}
// Default navigation links
const defaultNavigationLinks: NavbarNavItem[] = [
  { href: '/about', label: 'About Me', active: true },
  { href: '/resume', label: 'Resumes' },
  { href: '/Kura', label: 'Kura Customs' },
  { href: '/projects', label: 'Projects' },
  { href: '/comp-bio', label: 'Computational Bio' },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
    //   logo = <Logo />,
    //   logoHref = '#',
      navigationLinks = defaultNavigationLinks,
    //   signInText = 'Sign In',
    //   signInHref = '#signin',
    //   ctaText = 'Get Started',
    //   ctaHref = '#get-started',
    //   onSignInClick,
    //   onCtaClick,
      ...props
    },
    ref
  ) => {
    const {pathname} = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const [activeLink, setActiveLink] = useState<string>("");

    useEffect(() => {
      // Find the link that matches the current path
      const matchingLink =
        navigationLinks.find((link) => link.href === pathname)?.label ||
        navigationLinks[0].label; // fallback if none match
      setActiveLink(matchingLink);
    }, [pathname, navigationLinks]);

    const navigate = useNavigate();

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, []);
    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    
    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b-2 border-border px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-24 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2 ml-auto"> {/* Logo can be added here ml-auto to align to right */}
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          <button
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveLink(link.label);
                                navigate(link.href || '/');
                            }}
                            className={cn(
                              'flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                              activeLink === link.label && 'bg-accent text-accent-foreground'
                            )}
                          >
                            {link.label}
                          </button>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            {/* Main nav */}
            <div className="flex items-center gap-6 ml-auto">
              {/* Navigation menu */}
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveLink(link.label);
                            navigate(link.href || '/');
                          }}
                          className={cn(
                            // Base style
                            'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background m-2 px-6 py-6 text-lg font-semibold transition-colors cursor-pointer relative',
                            // Hover & focus color
                            'hover:text-accent-foreground focus:text-accent-foreground focus:outline-none',
                            // Animated underline effect
                            'before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-secondary before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100',
                            // Active link underline visible
                            activeLink === link.label
                              ? 'before:scale-x-100 text-secondary'
                              : 'text-foreground'
                          )}
                          data-active={activeLink === link.label}
                          >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
);
Navbar.displayName = 'Navbar';
export { Logo, HamburgerIcon };