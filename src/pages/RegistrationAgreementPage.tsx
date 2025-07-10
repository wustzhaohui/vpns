import React, { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'terms-of-service', title: 'LetsVPN Terms of Service' },
  { id: 'intellectual-property', title: 'Intellectual Property Rights' },
  { id: 'software-licensing', title: 'The Scope of Software Licensing' },
  { id: 'user-instructions', title: 'User Instructions' },
  { id: 'acceptable-use', title: 'Acceptable Use Policy' },
  { id: 'privacy-policy', title: 'Privacy Policy' },
  {
    id: 'software-updates',
    title: 'Software Replacement, Modification and Updates',
  },
  { id: 'subscriptions', title: 'Subscriptions' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'other-content', title: 'Other Content' },
];

const RegistrationAgreementPage: React.FC = () => {
  const [activeSection, setActiveSection] =
    useState<string>('terms-of-service');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

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
    sectionElements.forEach((el) => currentObserver?.observe(el));

    return () => {
      currentObserver?.disconnect();
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
                id="terms-of-service"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 scroll-mt-24"
              >
                LetsVPN Terms of Service
              </h1>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  These Terms of Service ("the Terms") govern your use of
                  LetsVPN Services, therefore we kindly ask you to carefully
                  read them when visiting LetsVPN website, before you register,
                  download, install and use LetsVPN Services, which include the
                  LetsVPN software, LetsVPN mobile applications and any services
                  that LetsVPN (“LetsVPN,” “we,” “us,” or “our” ) provides
                  through our software, application or otherwise (all of which
                  collectively are referred as the “LetsVPN Services”).
                </p>
                <p>
                  Please note that the Terms constitute a legally binding
                  agreement (the “Agreement”) between you and LetsVPN. By
                  visiting the website, registering for, installing and/or using
                  LetsVPN Services on any platform or device you agree to be
                  bound by these Terms. It is only under these Terms that
                  LetsVPN allows visitors / users (the “users”) to use LetsVPN
                  Services. If you do not agree to these Terms or any provisions
                  hereof, please do not install and do not use our software, our
                  mobile application and/or any of our products or services.
                </p>
              </section>

              <h2
                id="intellectual-property"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Intellectual Property Rights
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  The website and all of the materials contained within LetsVPN
                  are protected by intellectual property right laws. All of the
                  materials and content, include but not limited to the
                  graphics, design, scripts, logos, page headers, images, button
                  icons, appearance, downloads and any other information used to
                  promote or provide the Services. All copyright, trademarks,
                  design rights, patents and any other intellectual property
                  rights (whether registered or unregistered) for the Services
                  and all of the materials contained within our services are
                  either owned by us, licensed to us or we are entitled to use
                  it. All such rights are reserved.
                </p>
              </section>

              <h2
                id="software-licensing"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                The Scope of Software Licensing
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  A. Users can install, use, display and run the software on PC
                  and mobile phones (same account support different devices).
                </p>
                <p>
                  B. Reserved rights: All other rights not expressly authorized
                  are still owned by LetsVPN team. Users must obtain additional
                  written consent from LetsVPN team when using other rights.
                </p>
                <p>
                  C. Except as expressly provided in this Agreement, this
                  Agreement does not stipulate the relevant Terms of Service for
                  LetsVPN or other services of the partner using the Software.
                  For these services, there may be separate terms of service to
                  regulate the user. Please be aware of and confirm separately
                  when using LetsVPN Services. If the user uses the Services, it
                  is deemed to be an acceptance of the relevant Terms of
                  Service.
                </p>
              </section>

              <h2
                id="user-instructions"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                User Instructions
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  A. Users agree to obtain LetsVPN software and use LetsVPN
                  Services from official channels; bear all losses and
                  liabilities caused by him/herself, including but not limited
                  to: loss of account password, account dispute with others,
                  etc.
                </p>
                <div>
                  <p className="font-bold">B. LetsVPN Account</p>
                  <div className="pl-8 space-y-4 mt-4">
                    <p>
                      a. You understand that it is your responsibility to keep
                      your LetsVPN account information confidential. You may not
                      share your password or other account access information
                      with any other party, temporarily or permanently, and you
                      agree to accept responsibility for all activities that
                      occur under your account or password, whether or not
                      authorized by you. You agree to immediately notify us of
                      any unauthorized use of your account, username or
                      password, as the case may be.
                    </p>
                    <p>
                      b. If disputes occur between users regarding the ownership
                      of the account, LetsVPN will make an independent judgment
                      based on the initial personal registration data. If the
                      personal information is unauthentic, incomplete or
                      impossible to judge the true owner, LetsVPN Team has the
                      right to manage this disputable account. Relevant losses
                      and liabilities shall be borne by users.
                    </p>
                    <p>
                      c. If the user leaves his/her account unused for a long
                      time, LetsVPN has the right to manage this account.
                    </p>
                    <p>
                      d. Users acknowledge and agree that our accounts allow for
                      deletion. Upon choosing to delete an account, all
                      associated data will be permanently erased, and the
                      account cannot be recovered. Users are solely responsible
                      for any data loss or other consequences resulting from
                      deleting an account. Deleted accounts become inaccessible,
                      and users will be unable to log in or retrieve any
                      information associated with the account. Please consider
                      this action carefully.
                    </p>
                  </div>
                </div>
                <p>
                  C. In order to protect user information and account security,
                  account transfer and renting are prohibited. All disputes
                  arising out of or relating to the user’s private rental
                  (free/paid) account and the losses incurred shall be borne by
                  the user. Meanwhile, LetsVPN reserves the right to pursue
                  legal liability for users who violate this Agreement.
                </p>
                <p>
                  D. We do not log any user activity (sites visited, DNS
                  lookups, emails etc.) We only log access attempts to our
                  servers for the purposes of troubleshooting and improving the
                  Services. We do not get involved in any form of censorship. We
                  do not give your personal information to any third parties.
                </p>
              </section>

              <h2
                id="acceptable-use"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Acceptable Use Policy
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  A. You agree to use our Services for lawful purposes only and
                  to fully comply with the terms and conditions set forth in
                  this Acceptable Use Policy. By using our Services, You agree:
                </p>
                <div className="pl-8 space-y-4 mt-4">
                  <p>
                    a. NOT to delete all copyright information and contents on
                    this software and other copies;
                  </p>
                  <p>
                    b. NOT to modify, translate, reverse engineer, decompile,
                    disassemble, or create any derivative works based on LetsVPN
                    Services, including any of its files or documentation, or
                    any portion thereof, or determine or attempt to determine
                    any source code, algorithms, methods or techniques embodied
                    in the LetsVPN application or any portion thereof;
                  </p>
                  <p>
                    c. NOT to attempt to manipulate LetsVPN name, services or
                    products;
                  </p>
                  <p>
                    d. NOT to use our Services to violate the laws, regulations,
                    ordinances or other such requirements of any applicable
                    Federal, State or local government;
                  </p>
                  <p>
                    e. NOT to use the software for sending spam, port scanning,
                    scanning for open proxies or open relays, sending opt-in
                    email, unsolicited email or any type or version of email
                    sent in large quantities even if the email is ultimately
                    sent off of another server.
                  </p>
                  <p>
                    f. NOT to use the Services to host any website, other
                    content, links or advertisements of websites that: infringe
                    any copyright, trademark, patent, trade secret, or other
                    proprietary rights of any third party information.
                  </p>
                  <p>
                    g. NOT to cause any potential harm to the stability of
                    LetsVPN, network security and experience of other users
                    (including but not limited to): attempt to use the LetsVPN
                    to explore or attack other people's networks; attempt to
                    abuse various third-party network services using LetsVPN;
                    attempt to send a large number of spams using LetsVPN; try
                    to probe and analyze the communication protocol of LetsVPN;
                    lead to a high long-term occupancy rate of network exceeding
                    the system threshold,etc.. The unlimited use is ONLY
                    applicable to the normal use habits.
                  </p>
                </div>
                <p>
                  B. It is the users’ responsibilities to know and comprehend
                  any and all relevant laws related to any jurisdiction or venue
                  that concerns you and your actions. LetsVPN is not liable in
                  any way or form for actions done by its users including a
                  criminal liability and a civil liability for harm executed or
                  not executed beyond any money paid to LetsVPN for its services
                  by a concrete individual. Violations of this Acceptable Use
                  Policy or the Terms may result in termination of your account,
                  without any refund of amounts previously paid for the
                  Services. Additionally, you may be held responsible for any
                  and all damages incurred to LetsVPN, including any amounts
                  charged by any outside entity due to said violation(s),
                  including attorney's fees and costs without limitation.
                </p>
              </section>

              <h2
                id="privacy-policy"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Privacy Policy
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  LetsVPN’s core mission is to keep your information private. We
                  are committed to consumer privacy protection. LetsVPN does not
                  collect or log traffic data, browsing activity, email address,
                  phone number, or any personal information from individual
                  users connected to the Services.
                </p>
                <p>
                  Our software utilizes the third party diagnostics service
                  Fabric, for the purpose of identifying service issues and
                  problems inside our Services. The information collected is
                  generic in nature and does not contain personally identifiable
                  information.
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
                id="software-updates"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Software Replacement, Modification and Updates
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  LetsVPN has the right to replace, modify and update the
                  software for the purpose of enhancing user experiences. These
                  changes are designed to improve, enhance and further develop
                  the Services and may take the form of bug fixes, enhanced
                  functions, new software modules and completely new versions.
                  You agree to receive such updates (and permit LetsVPN to
                  deliver these to you) as part of your use of the Services.
                </p>
              </section>

              <h2
                id="subscriptions"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Subscriptions
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  By subscribing to the Services you agree to become a
                  subscriber for the period of licenses you choose. A full list
                  of subscription plans and pricing is available on the Site.
                  LetsVPN reserves the right to amend subscription fees or
                  institute new fees at any time upon reasonable advance notice
                  posted on the Site or sent via email. Any changes to the
                  pricing will not affect the Subscriber's current subscription
                  period and will become effective upon subscription renewal.
                  LetsVPN has the right to discontinue the Services if the user
                  refuses to pay or is in arrear on the payment.
                </p>
                <p>
                  Once the virtual product is sold, it can be regarded as
                  accepting our Terms of Service. The company does not accept
                  any unreasonable refund.
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
                  A. We do not make any warranty that the Services will meet
                  your requirements, or that it will be uninterrupted, timely,
                  secure, or error free, or that defects, if any, will be
                  corrected. You acknowledge that you access the Site and the
                  Services at your own discretion and risk.
                </p>
                <p>
                  B. The Services will attempt to be available at all times
                  except for limited periods for maintenance and repair. However
                  the Service may be subject to unavailability for a variety of
                  factors beyond our control including emergencies, third party
                  service failures, transmission, equipment or network problems
                  or limitations, interference, signal strength, and may be
                  interrupted, refused, limited or curtailed.
                </p>
                <p>
                  C. Third party service or technology may be involved in our
                  software with legal authorization. Any dispute arising out of
                  or relating to third party service or technology shall be
                  resolved by the third party. LetsVPN assumes no
                  responsibility. Please contact them directly if any support is
                  needed.
                </p>
              </section>

              <h2
                id="other-content"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24"
              >
                Other Content
              </h2>
              <section className="space-y-6 text-gray-700 text-[1.6rem] leading-relaxed">
                <p>
                  A. Any part or all of the terms of this Agreement will be
                  invalid and will not affect the validity of other terms.
                </p>
                <p>
                  B. We do not make any warranty that the Services will meet
                  your requirements because the actual locations, broadband
                  carriers, service coverage, speeds, and quality may vary.
                </p>
                <p>
                  C. LetsVPN reserves all right to interpret this Agreement.
                  Please reassure the Terms of usage Agreement above-mentioned
                  are fully read and understood. When you click on install
                  LetsVPN software, you are agreeing with all the Terms and
                  Conditions of the Services.
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

export default RegistrationAgreementPage;
