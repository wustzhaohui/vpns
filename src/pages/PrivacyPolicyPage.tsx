import React, { useState, useEffect, useRef } from 'react';

const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('privacy-policy');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: 'privacy-policy', title: 'Privacy Policy' },
    { id: 'consent-age', title: 'Consent and Age Restrictions' },
    { id: 'info-security', title: 'Information Security' },
    { id: 'contact', title: 'How to Contact LetsVPN' },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -75% 0px', // When the top of the section is 25% from the top of the viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        sectionRefs.current[section.id] = el;
        observerRef.current?.observe(el);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Main Content */}
          <main className="w-full md:w-3/4 bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-md flex-grow">
            <article>
              <h1
                id="privacy-policy"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 scroll-mt-24"
              >
                Privacy Policy
              </h1>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  We are committed to consumer privacy protection. Lets VPN does
                  not collect or log traffic data, browsing activity, email
                  address, phone number, or any personal information from
                  individual users connected to the Services.
                </p>
                <p>
                  Our software utilizes the third party diagnostics service
                  Fabric, a Google service, for the purpose of identifying
                  service issues and problems inside our services. The
                  information collected is generic in nature and does not
                  contain personally identifiable information.
                </p>
                <p>
                  We use third party cookies, pixels and analytics tools to
                  track sales promotions and advertisements to target potential
                  users who need the value provided by the Services. The
                  information collected is generic in nature and does not
                  contain personally identifiable information.
                </p>
              </section>

              <h2
                id="consent-age"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Consent and Age Restrictions
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  By using the Site, Content, Apps, Software, or Services, you
                  agree to have your information handled as described in our
                  Terms of Service and Privacy Policy.
                </p>
              </section>

              <h2
                id="info-security"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Information Security
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  Lets VPN would like to remind you that you are yourself
                  responsible for the security of your data. We ask you to be
                  careful when using and storing personal data containing files
                  on your devices, as well as the devices itself. Please ensure
                  that nobody accesses and uses your devices without your
                  consent.
                </p>
                <p>
                  You shall be extra careful and not disclose your personal
                  information to unrelated third parties, since such information
                  may be used in different ways and against your interests,
                  including activities such as fraud, invasion of privacy,
                  identity theft, etc.
                </p>
                <p>
                  In order to ensure security of the personal data, Lets VPN
                  employs various administrative, technical and physical
                  security measures, however it is your responsibility to
                  exercise caution and reason when using the Lets VPN Services.
                  You will be personally responsible if such action violates any
                  third party's privacy or any other rights, or any applicable
                  law. Under no circumstances, Lets VPN is liable for the
                  consequences of your unlawful activities, your willful and
                  negligent activities violating applicable laws or third party
                  rights, as well as any circumstances, which may not have been
                  reasonably controlled or foreseen.
                </p>
              </section>

              <h2
                id="contact"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                How to Contact LetsVPN
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  If you have any questions regarding our Privacy Policy and how
                  we handle your information, please feel free to contact
                  LetsVPN at the following email address:letsvpn@rbox.me
                </p>
              </section>
            </article>
          </main>

          {/* Sidebar Navigation */}
          <aside className="hidden md:block w-1/4">
            <nav className="sticky top-24">
              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => handleLinkClick(e, section.id)}
                      className={`block py-2 text-[1.6rem] border-l-2 transition-all duration-200 ease-in-out ${
                        activeSection === section.id
                          ? 'pl-4 border-gray-800 text-gray-800 font-semibold'
                          : 'pl-4 border-transparent text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
