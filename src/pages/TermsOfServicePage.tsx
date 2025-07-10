import React, { useState, useEffect, useRef } from 'react';

const TermsOfServicePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('general');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: 'general', title: 'General' },
    { id: 'letsvpn-service', title: 'LetsVPN Service' },
    { id: 'usage-policy', title: 'Usage Policy' },
    { id: 'disclaimers', title: 'Disclaimers' },
    { id: 'changes-to-terms', title: 'Changes to the Terms' },
    { id: 'last-but-not-least', title: 'Last but NOT Least' },
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
        rootMargin: '0px 0px -75% 0px',
        threshold: 0,
      }
    );

    const currentObserver = observerRef.current;

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        sectionRefs.current[section.id] = el;
        currentObserver?.observe(el);
      }
    });

    return () => {
      currentObserver?.disconnect();
    };
  }, [sections]);

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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
                Terms of Service
              </h1>

              <h2
                id="general"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                General
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  a) Our goal is to provide quality service to all customers.
                  Please read these terms of service carefully before you access
                  the site or the service.
                </p>
                <p>
                  b) These Terms of Service (“the Terms”) govern your use of the
                  LetsVPN and the associated website domains (the “Site”) and
                  related service (the “Services”), which are owned and operated
                  by the LetsVPN Team (“LetsVPN,” “our,” “we” or “us”). The
                  Terms constitute a legally binding agreement (the “Agreement”)
                  between you and the Lets VPN Team.
                </p>
              </section>

              <h2
                id="letsvpn-service"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                LetsVPN Service
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  a) You understand that we are providing you with a virtual
                  private network (or "VPN") service, which includes, but is not
                  limited to, the use of servers, transport, routers, IP
                  addresses and other equipment and protocols to transmit
                  information over our network (the "System"). You agree to
                  abide by the Terms with respect to your use of the Service.
                </p>
              </section>

              <h2
                id="usage-policy"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Usage Policy
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <div>
                  <p>a) BY USING Lets VPN SERVICE (the "Service") YOU AGREE:</p>
                  <div className="pl-8 space-y-4 mt-4">
                    <p>
                      a) NOT to use the system for sending spam, port scanning,
                      scanning for open proxies or open relays, sending opt-in
                      email, unsolicited email or any type or version of email
                      sent in large quantities even if the email is ultimately
                      sent off of another server.
                    </p>
                    <p>b) NOT to launch any pop-ups from our service.</p>
                    <p>
                      c) NOT to attack in any way shape or form any other
                      computer or network while on our service.
                    </p>
                    <p>
                      d) NOT to use the service for things that could hurt our
                      network or other people.
                    </p>
                  </div>
                </div>
                <p>
                  b) It is the user responsibility to know and comprehend any
                  and all relevant laws related to any jurisdiction or venue
                  that concerns you and your actions. Lets VPN is not liable in
                  any way or form for actions done by its users including a
                  criminal liability and a civil liability for harm executed or
                  not executed beyond any money paid to Lets VPN for its
                  services by a concrete individual.
                </p>
                <p>
                  c) Violations of this Usage Policy or the Terms may result in
                  termination of your account, without any refund of amounts
                  previously paid for the Service. Additionally, you may be held
                  responsible for any and all damages incurred to Lets VPN,
                  including any amounts charged by any outside entity due to
                  said violation(s), including attorney's fees and costs without
                  limitation.
                </p>
                <p>
                  d) Lets VPN enables you to download software, software updates
                  or patches, or other utilities and tools onto your mobile
                  phones or Internet-enabled device. Lets VPN("the Software")
                  grants to you a nonexclusive, limited license to use the
                  Software solely for the purpose stated by Lets VPN at the time
                  the Software is made available to you and in accordance with
                  these Terms. Modifying, distributing to unauthorized parties,
                  reverse engineering, or otherwise using the Software in any
                  way not expressly authorized by Lets VPN, is strictly
                  prohibited.
                </p>
              </section>

              <h2
                id="disclaimers"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Disclaimers
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  a) We strive to prevent interruptions to the Site and the
                  Service. However, these are provided on an “as is” and “as
                  available” basis, and we do not warrant, either expressly or
                  by implication, the accuracy of any materials or information
                  provided through the Site or Service, or their suitability for
                  any particular purpose.
                </p>
                <p>
                  b) Actual service coverage, speeds, locations and quality may
                  vary. The Service will attempt to be available at all times
                  except for limited periods for maintenance and repair. However
                  the Service may be subject to unavailability for a variety of
                  factors beyond our control including emergencies, third party
                  service failures, transmission, equipment or network problems
                  or limitations, interference, signal strength, and may be
                  interrupted, refused, limited or curtailed.
                </p>
                <p>
                  c) We do not make any warranty that the Service will meet your
                  requirements, or that it will be uninterrupted, timely,
                  secure, or error free, or that defects, if any, will be
                  corrected. You acknowledge that you access the Site and the
                  Service at your own discretion and risk.
                </p>
                <p>
                  d) We are not responsible for data, messages or pages lost,
                  not delivered, delayed or misdirected because of interruptions
                  or performance issues with the Service or communications
                  services or networks (e.g., T-1 lines or the Internet). We may
                  impose usage or Service limits, suspend Service, or block
                  certain kinds of usage in our sole discretion to protect users
                  or the Service. Network speed is an estimate and is no
                  indication of the speed at which your or the Service sends or
                  receives data. Actual network speed will vary based on
                  configuration, compression, network congestion and other
                  factors. The accuracy and timeliness of data received is not
                  guaranteed; delays or omissions may occur.
                </p>
                <p>
                  e) We do not log any user activity (sites visited, DNS
                  lookups, emails etc.) We only log access attempts to our
                  servers for the purposes of troubleshooting and improving the
                  Services. We do not get involved in any form of censorship. We
                  do not give your personal info to any third parties.
                </p>
              </section>

              <h2
                id="changes-to-terms"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Changes to the Terms
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  a) LetsVPN may update the Terms from time to time without
                  notice. Any changes in the Terms will be incorporated into a
                  revised Agreement that we will post on the Site. Unless
                  otherwise specified, such changes shall be effective when they
                  are posted. If we make material changes to these Terms, we
                  will aim to notify you via App or when you check on our
                  Website.
                </p>
              </section>

              <h2
                id="last-but-not-least"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Last but NOT Least
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  a) LetsVPN believes deeply in consumer privacy, security and
                  online freedom, according to which we manage and protect
                  consumer privacy and personal information. If you have any
                  question or inquiry, we are all here to support you via the
                  email address letsvpn@rbox.me
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

export default TermsOfServicePage;
