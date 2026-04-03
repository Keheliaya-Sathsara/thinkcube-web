import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Contact {
  sectionLabel?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  image?: string;
}

export interface Company {
  id: string;
  logo?: string;          // Main logo used in header
  cardlogo?: string;      // Special logo for the card section
  title?: string;
  subtitle?: string;
  banner?: string;
  headerone?: string;
  contentone?: string;
  contenttwo?: string;
  contentthree?: string;
  paragraphone?: string;
  paragraphtwo?: string;
  paragraphthree?: string;
  link?: string;
  cardparagraphthree?: string;
  contact?: Contact;
  showCard?: boolean;
  cardtitle?: string;     // Optional separate title for card
  cardheading?: string;   // Main heading for card
  cardsubtitle?: string;  // Subtitle for card
  cardlink?: string;      // Optional separate link for card
}

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private companies: Company[] = [
    {
      id: '11',
      logo: '/images/company/company_1.png',
      title: 'EPTT',
      subtitle:
        'Cutting-Edge Transportation Solutions Enabling Seamless Travel, Optimized Operations, and Smarter Mobility Across Urban and Intercity Networks',
      banner: '/images/transportation/Transportationbanner10.jpg',
      headerone: 'About',
      contentone: 'Premium Travel',
      contenttwo: 'Services That Go the',
      contentthree: 'Distance',
      paragraphone:
        'Travel in style with our modern fleet and experienced chauffeurs at your service 24/7.',
      cardparagraphthree: 'Visit Site',
      link: 'https://eptt.lk/',
      showCard: false,
      paragraphtwo:
        'Executive Premium Transport & Travels (EPTT) is a premier transport service provider based in Sri Lanka, offering high-quality, reliable, and professional travel solutions across the island. With a commitment to comfort, safety, and punctuality, we cater to a wide range of clients including tourists, corporate travelers, and locals. Our diverse fleet—from luxury sedans to spacious vans—is operated by experienced chauffeurs dedicated to delivering seamless travel experiences. Whether it is an airport transfer, a city tour, or a multi-day journey, EPTT ensures every ride is smooth and stress-free.',
      paragraphthree:
        'At EPTT, our mission is to redefine the standards of travel and transport in Sri Lanka. We combine personalized service with modern convenience—offering 24/7 availability, online booking, flexible payment options, and amenities like onboard Wi-Fi and child seats. As a trusted travel partner, we pride ourselves on building long-term relationships with our clients, rooted in reliability, transparency, and unmatched service quality. Discover Sri Lanka the comfortable way—with EPTT at the wheel.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@eptt.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '1',
      logo: '/images/transportation/thinkcube.png',
      title: 'Thinkcube Solutions',
      subtitle: 'Thinkcube Solutions delivers innovative, scalable software designed to optimize workflows, enhance data accuracy, and drive digital transformation across key industries.',
      banner: '/images/transportation/imagetwo.jpg',
      headerone: 'About',
      contentone: 'Innovating',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone: 'Empowering businesses and educators with cloud-based solutions that solve real-world challenges and scale with your vision.',
      cardparagraphthree: 'Visit Site',
      link: 'https://thinkcube.com/',
      showCard: false,
      paragraphtwo: 'ThinkCube is a Sri Lankan technology company driven by innovation and a passion for solving real-world problems through smart, cloud-based software solutions. With nearly a decade of experience, we specialize in developing user-centric products that enhance productivity, streamline workflows, and empower both individuals and organizations to thrive in the digital age.',
      paragraphthree: 'Our growing portfolio includes platforms like ezBiz, a mini-ERP for SMEs; LeapX, a versatile e-learning system; Hudlmo, a collaborative tool for virtual meetings and webinars; and Swisher, a hybrid SaaS/PaaS solution for rapid application development. At ThinkCube, we’re committed to continuous innovation, intuitive design, and accessible technology—ensuring our users can work smarter, from anywhere in the world.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'inquire@thinkcube.com',
        address: '521/11, Thimbirigasyaya Road, Colombo 5, Sri Lanka.',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '2',
      logo: '/images/company/cubenew.png',  // Main logo
      cardlogo: '/images/company/wainway.png',  // Special card logo
      title: 'Cubematrix',
      subtitle: 'We are an experienced IT company with expertise in various operating systems, networks, development platforms, and database management systems.',
      banner: '/images/transportation/imagetwo.jpg',
      headerone: 'About',
      contentone: 'Smart IT',
      contenttwo: 'Solutions That',
      contentthree: 'Power Your Business Forward',
      paragraphone: 'Empowering businesses with tailored IT services, innovative technologies, and seamless support.',
      cardparagraphthree: 'Visit Site',
      link: '#',
      showCard: true,
      paragraphtwo: 'Cube Matrix is a seasoned IT solutions provider specializing in operating systems, networks, development platforms, and database management systems. Our experienced team delivers tailored technology services to support businesses of all sizes—whether it’s system setup, software development, or network security. We pride ourselves on a customer-centric approach, adapting our solutions to meet each client\'s unique goals and challenges. ',
      paragraphthree: 'From maintaining existing infrastructure to deploying cutting-edge innovations, Cube Matrix is committed to streamlining your operations and enhancing performance. By keeping pace with the latest advancements in technology, we ensure your business remains efficient, secure, and competitive. Let us manage your tech needs while you focus on scaling your business. Connect with Cube Matrix today and explore how we can help drive your IT goals into action.',
      cardtitle: 'Sri Lanka’s Trusted Digital Lottery Platform',
      cardheading: 'Products',
      cardsubtitle: 'WIN WAY is the official digital platform authorized by the National Lotteries Board (NLB) for selling government-approved lottery tickets online. Designed to bring convenience and excitement together, WIN WAY allows you to securely purchase lottery tickets and participate in official NLB draws — all from the comfort of your home. Whether you\'re using our mobile-responsive websites www.winway.lk, www.884.lk, or our Android/iOS mobile apps, WIN WAY ensures a smooth, reliable, and safe lottery experience anytime, anywhere.',
      cardlink: 'https://winway.lk/',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'grouphr@kapital.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '3',
      logo: '/images/company/company_4.png',
      title: 'Medcube',
      subtitle:
        'At Medcube, we combine expertise and innovation to deliver reliable virtual solutions that empower businesses to work smarter, faster, and better.',
      banner: '/images/transportation/banner2.jpg',
      headerone: 'About',
      contentone: 'Innovating ',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone:
        'Empowering Your Business with Smart Virtual Solutions',
      cardparagraphthree: 'Visit Site',
      link: 'https://medcube.health/',
      showCard: false,
      paragraphtwo:
        'MedCube delivers expert virtual assistance, legal support, and billing solutions tailored to U.S.-based businesses, designed for efficiency, accuracy, and growth at every stage. MedCube is a trusted virtual support partner for U.S.-based businesses seeking reliable, cost-effective solutions. Our specialized services include legal virtual assistance, billing support, and remote staffing, delivered by highly trained professionals with a strong command of U.S. standards.',
      paragraphthree:
        'Whether you’re a law firm in need of well-drafted legal documents, a business navigating complex billing cycles, or a team looking to scale with virtual staff, MedCube helps you streamline operations without compromising quality. We combine precision, accountability, and client-first communication to support your goals around the clock. Our teams work overnight to match U.S. time zones, ensuring real-time support and consistent results. With MedCube, you don’t just outsource work—you gain a dedicated partner focused on helping you grow smarter, faster, and more efficiently.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'hr@medcube.health',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '4',
      logo: '/images/company/company_6.png',
      title: 'Kapital Corp ',
      subtitle:
        'KapitalCorp is a multidisciplinary enterprise delivering innovative, future-focused solutions across industries to drive growth, efficiency, and sustainable impact.',
      banner: '/images/transportation/Trading_banner.jpg',
      headerone: 'About',
      contentone: 'Shaping Tomorrow',
      contenttwo: 'with Smart, Scalable',
      contentthree: 'Solutions Across Industries ',
      paragraphone:
        'KapitalCorp empowers businesses and communities through innovative strategies, advanced technology, and a commitment to long-term, sustainable progress.',
      cardparagraphthree: 'Visit Site',
      link: 'https://www.kapitalcorp.lk/#/',
      showCard: false,
      paragraphtwo:
        'KapitalCorp is a multidisciplinary organization dedicated to delivering innovative, scalable solutions across key industries including transportation, technology, energy, healthcare, trading, and more. With a strong foundation in strategic thinking and digital transformation, we partner with businesses and governments to address complex challenges and unlock long-term growth.',
      paragraphthree:
        'Our diverse portfolio includes smart mobility systems, AI-driven software, sustainable energy initiatives, and digital health platforms—each tailored to meet the unique demands of the markets we serve. We combine global insight with local expertise to create solutions that are efficient, future-ready, and socially impactful. At KapitalCorp, we believe in progress with purpose—driving innovation while prioritizing sustainability, inclusivity, and resilience. Whether empowering communities or optimizing enterprise operations, our mission is clear: to shape smarter, more connected futures through transformative thinking and technology.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@kapitalcorp.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '5',
      logo: '/images/company/company_7.png',
      title: 'Kapital Energy Solution ',
      subtitle:
        'Kapital Energy Solutions delivers smart, sustainable power systems that drive energy efficiency, reduce environmental impact, and empower communities through innovative renewable technologies.',
      banner: '/images/transportation/Energy-solution-banner4.jpg',
      headerone: 'About',
      contentone: 'Powering Progress',
      contenttwo: 'with Smarter,',
      contentthree: 'Greener Energy Solutions',
      paragraphone:
        'Kapital Energy Solutions provides innovative, sustainable power systems designed to improve efficiency, lower emissions, and support long-term energy resilience.',
      cardparagraphthree: 'Visit Site',
      link: 'https://www.kapitalcorp.lk/#/',
      showCard: false,
      paragraphtwo:
        'Kapital Energy Solutions is at the forefront of driving clean, reliable, and future-ready energy systems. Our mission is to accelerate the transition to sustainable power through innovative technologies that reduce environmental impact while meeting the growing energy demands of communities and industries.',
      paragraphthree:
        'From rooftop solar installations and off-grid systems to integrated smart grids and energy storage, we deliver solutions that are both scalable and adaptable. One of our flagship projects includes installing solar panels across rural schools in Trincomalee, providing uninterrupted power for education and community development. We collaborate with public and private sector partners to ensure that every project is technically sound, economically viable, and environmentally responsible. At Kapital Energy Solutions, we believe energy is not just a utility—but a catalyst for progress, equity, and a greener future.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@kapitalenergy.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '6',
      logo: '/images/company/company_6.png',
      title: 'Kapital Corp ',
      subtitle:
        'Innovating solutions for efficient infrastructure and seamless logistics, ensuring the smooth movement of goods and people worldwide.',
      banner: '/images/transportation/Trading_banner.jpg',
      headerone: 'About',
      contentone: 'Innovating ',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone:
        'Empowering businesses and educators with cloud-based solutions that solve real-world challenges and scale with your vision.',
      cardparagraphthree: 'Visit Site',
      link: 'https://www.kapitalcorp.lk/#/',
      showCard: false,
      paragraphtwo:
        'Kapital Corp is a Sri Lankan technology company driven by innovation and a passion for solving real-world problems through smart, cloud-based software solutions. With nearly a decade of experience, we specialize in developing user-centric products that enhance productivity, streamline workflows, and empower both individuals and organizations to thrive in the digital age.',
      paragraphthree:
        'Our growing portfolio includes platforms like ezBiz, a mini-ERP for SMEs; LeapX, a versatile e-learning system; Hudlmo, a collaborative tool for virtual meetings and webinars; and Swisher, a hybrid SaaS/PaaS solution for rapid application development. At Kapital Corp, we are committed to continuous innovation, intuitive design, and accessible technology—ensuring our users can work smarter, from anywhere in the world.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@kapitalcorp.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '7',
      logo: '/images/company/company_6.png',
      title: 'Kapital Corp ',
      subtitle:
        'Innovating solutions for efficient infrastructure and seamless logistics, ensuring the smooth movement of goods and people worldwide.',
      banner: '/images/transportation/Trading_banner.jpg',
      headerone: 'About',
      contentone: 'Innovating ',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone:
        'Empowering businesses and educators with cloud-based solutions that solve real-world challenges and scale with your vision.',
      cardparagraphthree: 'Visit Site',
      link: 'https://www.kapitalcorp.lk/#/',
      showCard: false,
      paragraphtwo:
        'Kapital Corp is a Sri Lankan technology company driven by innovation and a passion for solving real-world problems through smart, cloud-based software solutions. With nearly a decade of experience, we specialize in developing user-centric products that enhance productivity, streamline workflows, and empower both individuals and organizations to thrive in the digital age.',
      paragraphthree:
        'Our growing portfolio includes platforms like ezBiz, a mini-ERP for SMEs; LeapX, a versatile e-learning system; Hudlmo, a collaborative tool for virtual meetings and webinars; and Swisher, a hybrid SaaS/PaaS solution for rapid application development. At Kapital Corp, we are committed to continuous innovation, intuitive design, and accessible technology—ensuring our users can work smarter, from anywhere in the world.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@kapitalcorp.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '8',
      logo: '/images/company/company_6.png',
      title: 'Kapital Corp ',
      subtitle:
        'Innovating solutions for efficient infrastructure and seamless logistics, ensuring the smooth movement of goods and people worldwide.',
      banner: '/images/transportation/Trading_banner.jpg',
      headerone: 'About',
      contentone: 'Innovating ',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone:
        'Empowering businesses and educators with cloud-based solutions that solve real-world challenges and scale with your vision.',
      cardparagraphthree: 'Visit Site',
      link: 'https://www.kapitalcorp.lk/#/',
      showCard: false,
      paragraphtwo:
        'Kapital Corp is a Sri Lankan technology company driven by innovation and a passion for solving real-world problems through smart, cloud-based software solutions. With nearly a decade of experience, we specialize in developing user-centric products that enhance productivity, streamline workflows, and empower both individuals and organizations to thrive in the digital age.',
      paragraphthree:
        'Our growing portfolio includes platforms like ezBiz, a mini-ERP for SMEs; LeapX, a versatile e-learning system; Hudlmo, a collaborative tool for virtual meetings and webinars; and Swisher, a hybrid SaaS/PaaS solution for rapid application development. At Kapital Corp, we are committed to continuous innovation, intuitive design, and accessible technology—ensuring our users can work smarter, from anywhere in the world.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@kapitalcorp.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '9',
      logo: '/images/company/company_6.png',
      title: 'Kapital Corp ',
      subtitle:
        'Innovating solutions for efficient infrastructure and seamless logistics, ensuring the smooth movement of goods and people worldwide.',
      banner: '/images/transportation/Trading_banner.jpg',
      headerone: 'About',
      contentone: 'Innovating ',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone:
        'Empowering businesses and educators with cloud-based solutions that solve real-world challenges and scale with your vision.',
      cardparagraphthree: 'Visit Site',
      link: 'https://www.kapitalcorp.lk/#/',
      showCard: false,
      paragraphtwo:
        'Kapital Corp is a Sri Lankan technology company driven by innovation and a passion for solving real-world problems through smart, cloud-based software solutions. With nearly a decade of experience, we specialize in developing user-centric products that enhance productivity, streamline workflows, and empower both individuals and organizations to thrive in the digital age.',
      paragraphthree:
        'Our growing portfolio includes platforms like ezBiz, a mini-ERP for SMEs; LeapX, a versatile e-learning system; Hudlmo, a collaborative tool for virtual meetings and webinars; and Swisher, a hybrid SaaS/PaaS solution for rapid application development. At Kapital Corp, we are committed to continuous innovation, intuitive design, and accessible technology—ensuring our users can work smarter, from anywhere in the world.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@kapitalcorp.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '10',
      logo: '/images/company/company_5.png',
      title: 'Kapital Leisure Adventure',
      subtitle:
        'Kapital Leisure crafts unforgettable experiences that blend Sri Lanka’s natural beauty, rich culture, and sustainable luxury hospitality.',
      banner: '/images/transportation/banner9.jpg',
      headerone: 'About',
      contentone: 'Elevating Leisure',
      contenttwo: 'with Authentic',
      contentthree: 'Sri Lankan Experiences',
      paragraphone:
        'Kapital Leisure delivers world-class hospitality and immersive activities that connect guests to the heart of Sri Lanka’s vibrant culture and stunning landscapes.',
      cardparagraphthree: 'Visit Site',
      link: 'https://www.kapitalcorp.lk/#/',
      showCard: false,
      paragraphtwo:
        'Kapital Leisure is dedicated to creating exceptional leisure experiences that celebrate Sri Lanka’s rich culture, natural beauty, and vibrant lifestyle. We develop and manage innovative destinations, resorts, and wellness retreats that blend luxury with authenticity, offering guests meaningful moments of relaxation, adventure, and cultural connection. As part of Sri Lanka’s most developed leisure industry, Kapital Leisure emphasizes sustainable tourism practices, supporting local communities and preserving the environment.',
      paragraphthree:
        'Our portfolio includes eco-friendly resorts, curated wellness programs, and immersive cultural activities that cater to both international travelers and local enthusiasts. By combining world-class hospitality with genuine Sri Lankan warmth, Kapital Leisure strives to set new standards for leisure and recreation—making every visit unforgettable and inspiring a deeper appreciation for the island’s unique charm.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'info@kapitalcorp.lk',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '12',
      logo: '/images/transportation/medcubeusa_logo.png',
      title: 'Medcube USA',
      subtitle: 'MedCubeUSA is a trusted virtual assistance provider specializing in legal billing, document management, and client communication to help law firms streamline operations and improve efficiency.',
      banner: '/images/transportation/medcubeusa.png',
      headerone: 'About',
      contentone: 'Your Trusted',
      contenttwo: 'Legal Virtual',
      contentthree: 'Assistant Partner',
      paragraphone:
        'MedCubeUSA provides expert virtual assistance tailored for legal teams, streamlining billing, document drafting, and client communications for maximum efficiency.',
      cardparagraphthree: 'Visit Site',
      link: 'https://medcubeusa.com/',
      showCard: true,
      paragraphtwo:
        'MedCubeUSA is a leading virtual assistance service dedicated to supporting legal professionals across the United States. Our team specializes in handling complex legal billing, drafting and organizing court and legal documents, and maintaining seamless communication with clients.',
      paragraphthree:
        'By outsourcing these essential but time-consuming tasks to MedCubeUSA, law firms can focus on delivering exceptional legal counsel while improving operational efficiency. Our virtual assistants are highly trained, detail-oriented, and well-versed in U.S. legal standards, ensuring accuracy and confidentiality in every task. Whether you need help with electronic claims submission, case file management, or timely client updates, MedCubeUSA offers reliable, cost-effective solutions designed to reduce overhead and streamline workflows. Partner with MedCubeUSA to empower your legal team to work smarter, faster, and with greater precision.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big job:',
        phone: '(626)788-0488',
        email: 'info@medcubeusa.com',
        address: '527 E Rowland St, Suite 100A, Covina, CA 91723, United States',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '13',
      logo: '/images/transportation/thinkcube_system.png',
      title: 'Thinkcube Systems',
      subtitle: 'Thinkcube is a technology-driven solutions provider specializing in smart software systems that streamline operations across healthcare, legal, and enterprise sectors. ',
      banner: '/images/transportation/imagetwo.jpg',
      headerone: 'About',
      contentone: 'Innovating',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone: 'Empowering businesses and educators with cloud-based solutions that solve real-world challenges and scale with your vision.',
      cardparagraphthree: 'Visit Site',
      link: 'https://thinkcube.com/',
      showCard: false,
      paragraphtwo: 'ThinkCube is a Sri Lankan technology company driven by innovation and a passion for solving real-world problems through smart, cloud-based software solutions. With nearly a decade of experience, we specialize in developing user-centric products that enhance productivity, streamline workflows, and empower both individuals and organizations to thrive in the digital age.',
      paragraphthree: 'Our growing portfolio includes platforms like ezBiz, a mini-ERP for SMEs; LeapX, a versatile e-learning system; Hudlmo, a collaborative tool for virtual meetings and webinars; and Swisher, a hybrid SaaS/PaaS solution for rapid application development. At ThinkCube, we’re committed to continuous innovation, intuitive design, and accessible technology—ensuring our users can work smarter, from anywhere in the world.',
      contact: {
        sectionLabel: 'Contact',
        title: 'Partner with a Team',
        subtitle: 'That Powers Innovation',
        description: 'From concept to launch, we are here to support your next big idea.',
        phone: '+94 11 259 9304',
        email: 'inquire@thinkcube.com',
        address: '521/11, Thimbirigasyaya Road, Colombo 5, Sri Lanka.',
        image: '/images/company/contact.png',
      },
    },
    {
      id: '14',
      logo: '/images/company/Group.png',  // Main logo
      cardlogo: '/images/company/logo.png',  // Special card logo
      title: 'Kapital Strategic Holding',
      subtitle: 'Kapital Strategic Holding connects industries, drives progress, and empowers growth through seamless, innovative solutions for partners and communities everywhere.',
      banner: '/images/transportation/imagetwo.jpg',
      headerone: 'About',
      contentone: 'Innovating',
      contenttwo: 'Simplicity Through',
      contentthree: 'Smart Software',
      paragraphone: 'Empowering organizations and communities with advanced, integrated services for sustainable growth.',
      cardparagraphthree: 'Visit Site',
      link: '',
      showCard: true,
      paragraphtwo: 'Kapital Strategic Holding is a leading Sri Lankan enterprise focused on driving innovation, operational excellence, and sustainable growth across diverse sectors. With expertise spanning media, technology, infrastructure, and advisory services, the company delivers tailored solutions that support development, empower communities, and enhance organizational performance.',
      paragraphthree: 'At its core, Kapital Strategic Holding is guided by a commitment to innovation, collaboration, and long-term value creation. By integrating advanced technologies with strategic thinking, the company helps partners adapt to evolving challenges and seize new opportunities. Its people-centric approach nurtures talent, encourages forward-thinking, and drives progress that uplifts both industry and society. Known for reliability, integrity, and impact-driven leadership, Kapital Strategic Holding continues to shape Sri Lanka’s future, creating lasting change through smart solutions and visionary execution.',
      cardtitle: 'Sri Lanka’s Premier Digital Sports Broadcasting Platform',
      cardheading: 'Sri Lanka’s Premier Digital Sports Broadcasting Platform',
      cardsubtitle: 'Talent TV is Sri Lanka’s trusted digital platform dedicated to delivering live sports, exclusive athlete stories, and event highlights to fans nationwide. Bringing excitement and national pride together, Talent TV offers instant access to games, interviews, and behind-the-scenes action—all from anywhere, on any device. Visit our website at www.talenttv.lk for smooth streaming, expert commentary, and engaging fan interaction at your convenience. Talent TV ensures a seamless, reliable, and quality viewing experience, so you never miss the best of Sri Lankan sports and rising talent.',
      cardlink: 'https://talenttv.lk/',
      contact: {
        sectionLabel: 'Contact',
        title: 'Connect with a Team',
        subtitle: 'That Drives Progress',
        description: 'Empowering your vision from the first spark to full-scale success.',
        phone: '+94 11 259 9304',
        email: 'info@talenttv.com',
        address: 'Marino Mall Tower, 6th Floor, 590 Galle Road, Colombo 03, Sri Lanka',
        image: '/images/company/contact.png',
      },
    }
  ];

  private companiesSubject = new BehaviorSubject<Company[]>(this.companies);
  public companies$ = this.companiesSubject.asObservable();

  private selectedCompanySubject = new BehaviorSubject<Company | null>(null);
  public selectedCompany$ = this.selectedCompanySubject.asObservable();

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }

  getCompanyById(id: string): Observable<Company | undefined> {
    const company = this.companies.find((c) => c.id === id);
    return of(company);
  }

  setSelectedCompany(company: Company | null): void {
    this.selectedCompanySubject.next(company);
  }

  getSelectedCompany(): Observable<Company | null> {
    return this.selectedCompany$;
  }

  addCompany(company: Company): void {
    this.companies.push(company);
    this.companiesSubject.next(this.companies);
  }

  updateCompany(id: string, updatedCompany: Partial<Company>): void {
    const index = this.companies.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.companies[index] = { ...this.companies[index], ...updatedCompany };
      this.companiesSubject.next(this.companies);
    }
  }

  deleteCompany(id: string): void {
    this.companies = this.companies.filter((c) => c.id !== id);
    this.companiesSubject.next(this.companies);
  }

  getCompaniesWithCards(): Observable<Company[]> {
    return of(this.companies.filter((company) => company.showCard === true));
  }
}
