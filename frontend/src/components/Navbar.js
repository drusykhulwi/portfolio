import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Services', href: '#services', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contacts', href: '#contacts', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer to detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get section name from the element's id or data-section attribute
            const sectionName = entry.target.id || entry.target.getAttribute('data-section');
            if (sectionName) {
              setActiveSection(sectionName);
            }
          }
        });
      },
      {
        threshold: 0.3, // Reduced threshold for better detection
        rootMargin: '-10% 0px -10% 0px' // Adjusted margins
      }
    );

    // Observe all sections - try multiple approaches to find them
    const sections = ['home', 'about', 'services', 'projects', 'contacts'];
    const observedElements = [];

    sections.forEach((sectionId) => {
      // Try to find by ID first
      let element = document.getElementById(sectionId);
      
      // If not found by ID, try to find by data-section attribute
      if (!element) {
        element = document.querySelector(`[data-section="${sectionId}"]`);
      }
      
      // If still not found, try to find by class name or other selectors
      if (!element) {
        element = document.querySelector(`.${sectionId}-section`);
      }

      if (element) {
        observer.observe(element);
        observedElements.push(element);
        console.log(`Observing section: ${sectionId}`, element); // Debug log
      } else {
        console.warn(`Section not found: ${sectionId}`); // Debug log
      }
    });

    return () => {
      // Cleanup observer
      observedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleNavClick = (href, sectionName) => {
    setActiveSection(sectionName.toLowerCase());
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Disclosure as="nav" className="bg-primary fixed w-[100vw] top-0 z-50 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-white text-xl font-bold">KHULWAEL</span>
                </div>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href, item.name)}
                        className={classNames(
                          activeSection === item.name.toLowerCase() ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-primary-light hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
                        )}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="button"
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={classNames(
                    activeSection === item.name.toLowerCase() ? 'bg-secondary text-white' : 'text-white hover:bg-primary-light hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}