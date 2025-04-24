import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Github } from 'lucide-react';
import { Button } from './ui/Button';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="font-semibold text-xl">BoltUI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Components</NavLink>
            <NavLink href="#">Documentation</NavLink>
            <NavLink href="#">About</NavLink>
          </nav>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Button>
            <Button variant="outline" className="hidden md:inline-flex">
              Sign In
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="font-semibold text-xl">BoltUI</span>
              </div>
              <p className="text-gray-500">Beautiful UI components for React applications</p>
            </div>
            
            <div className="flex gap-8">
              <FooterLinkGroup title="Resources">
                <FooterLink href="#">Documentation</FooterLink>
                <FooterLink href="#">Components</FooterLink>
                <FooterLink href="#">Examples</FooterLink>
              </FooterLinkGroup>
              
              <FooterLinkGroup title="Company">
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </FooterLinkGroup>
              
              <FooterLinkGroup title="Legal">
                <FooterLink href="#">Privacy</FooterLink>
                <FooterLink href="#">Terms</FooterLink>
                <FooterLink href="#">License</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>© {new Date().getFullYear()} BoltUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}

function FooterLinkGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-blue-600 transition-colors"
    >
      {children}
    </a>
  );
}