import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Sector {
  id: string;
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
  paragraphfour?: string;
  headertwo?: string;
  headerthree?: string;
  headerfour?: string;
  cardcontentone?: string;
  cardcontenttwo?: string;
  cardlogo?: string;
  cardparagraphone?: string;
  cardiconone?: string;
  cardicontwo?: string;
  cardiconthree?: string;
  cardiconfour?: string;
  cardparagraphtwo?: string;
  cardparagraphthree?: string;
  imageone?: string;
  sectorId?: string;
  link?: string;
  simplifiedTitle?: string;
  simplifiedSubtitle?: string;
  simplifiedPoints?: string[];
  previewTitle?: string;
  previewContent?: string[];
  partnerTitle?: string;
  partnerPoints?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SectorService {
  private sectors: Sector[] = [
    // {
    //   id: '1',
    //   title: 'Telecommunication & IT',
    //   subtitle:
    //     'Empowering connectivity and driving AI-driven digital transformation with cutting-edge telecom and IT solutions, bridging gaps and shaping a smarter future.',
    //   banner: '/images/transportation/banner1.jpg',
    //   headerone: 'About',
    //   contentone: 'AI-Driven Telecom',
    //   contenttwo: '& IT Solutions for a ',
    //   contentthree: 'Smarter, More Connected World',
    //   paragraphone:
    //     'Empowering industries with seamless, secure, and technology-driven telecommunication and IT solutions.',
    //   paragraphtwo:
    //     'KapitalCorp is transforming the digital landscape with AI-powered telecommunications and IT solutions that redefine connectivity, intelligence, and operational efficiency. We support enterprises, governments, and service providers with cutting-edge technologies designed to close the digital divide and fuel scalable, future-ready infrastructure. Our offerings span broadband expansion, enterprise networking, cloud integration, and secure communications, infused with artificial intelligence to power smarter systems. From predictive maintenance and intelligent automation to real-time data analytics and network optimization, we leverage AI to improve service reliability, user experience, and decision-making across platforms.',
    //   paragraphthree:
    //     'By integrating cloud computing, cybersecurity, and IoT frameworks, KapitalCorp builds robust digital environments that adapt to the evolving demands of modern life. Whether it’s deploying smart infrastructure in cities or enabling reliable connectivity in rural areas, we ensure seamless, secure, and inclusive access. More than just connectivity providers, we are strategic partners in digital transformation, accelerating progress and empowering industries to operate smarter, faster, and more sustainably. With every solution, we aim to reduce complexity, enhance intelligence, and build the technological foundation for a more connected, data-driven future. KapitalCorp’s telecom and IT solutions aren’t just built for today - they’re engineered for what’s next.',
    //   headertwo: 'Companies',
    //   headerthree: 'Our Companies in',
    //   headerfour: 'the IT Sector',
    //   paragraphfour:
    //     'Empowering seamless connectivity and digital innovation through customized telecommunication and IT solutions that drive progress.',
    // },
    {
      id: '2',
      title: 'Software & Business Process Outsourcing',
      subtitle:
        'Delivering intelligent BPO and custom software solutions that streamline operations, enhance efficiency, and drive scalable growth across global industries.',
      banner: '/images/transportation/banner2.jpg',
      headerone: 'About',
      contentone: 'Smart BPO &',
      contenttwo: 'Custom Software',
      contentthree: 'Solutions Built for Performance',
      paragraphone:
        'Empowering industries with efficient, scalable, and technology-driven Business Process Outsourcing solutions.',
      paragraphtwo:
        'At KapitalCorp, we offer a powerful combination of Business Process Outsourcing (BPO) and custom software solutions designed to streamline operations, reduce costs, and accelerate growth for businesses worldwide. Our services are built around flexibility, efficiency, and innovation, enabling organizations to focus on their core competencies while we manage the rest with precision and care. Through our BPO division, we provide end-to-end support in areas such as customer service, technical support, finance, HR, and back-office operations. Every process is optimized using automation, data analytics, and AI to ensure accuracy, speed, and consistency.',
      paragraphthree:
        'Complementing our BPO expertise, our software teams deliver tailored digital solutions from enterprise platforms to mobile applications and SaaS tools, engineered to meet unique business challenges. We focus on user experience, system integration, and scalability, ensuring that our technology grows with your business. Our deep industry knowledge and agile delivery model make us a trusted partner for startups, SMEs, and global enterprises alike. Whether it’s handling high-volume processes or building custom digital ecosystems, KapitalCorp is committed to driving transformation and measurable results. We don’t just outsource and code - we optimize, innovate, and empower businesses to perform at their best.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in the',
      headerfour: ' Software and BPO Sector',
      paragraphfour:
        'Delivering excellence through tailored BPO solutions and customized software development that optimize efficiency and elevate customer experiences across industries.',
    },
    {
      id: '3',
      title: 'Trading',
      subtitle:
        'KapitalCorp operates in the trading industry by offering end-to-end solutions, from importing and selling products to serving as a trusted local agent for global brands.',
      banner: 'images/transportation/banner3.png',
      headerone: 'About',
      contentone: 'Connecting Global',
      contenttwo: 'Markets to Local',
      contentthree: 'Opportunities',
      paragraphone:
        'Empowering traders with intelligent, scalable, and technology-driven market solutions.',
      paragraphtwo:
        'At KapitalCorp, our trading division bridges international markets with local demand, delivering comprehensive solutions that simplify import, distribution, and sales across diverse product categories. Acting as a reliable local agent for global brands, we ensure smooth market entry and sustained growth by navigating regulatory requirements, supply chain logistics, and customer engagement with expert precision. Our team leverages deep market knowledge and strong partnerships to source high-quality products from trusted manufacturers worldwide. From initial import to final delivery, we manage every step to guarantee efficiency, transparency, and compliance. We work closely with clients to tailor distribution strategies that maximize reach and profitability in local and regional markets. ',
      paragraphthree:
        'Beyond product sourcing, KapitalCorp’s trading solutions include inventory management, sales forecasting, and after-sales support, empowering businesses to optimize operations and respond swiftly to market dynamics. Whether dealing with consumer goods, industrial equipment, or specialized materials, we bring agility and trust to every transaction. By combining global insights with local expertise, KapitalCorp creates value for partners and customers alike, fostering sustainable trade relationships and driving economic growth. Our commitment is to be the go-to trading partner that delivers quality, reliability, and growth opportunities in an ever-evolving marketplace.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in',
      headerfour: 'the Trading Sector',
      paragraphfour:
        'Driving global commerce through strategic trading solutions, tailored to deliver value, agility, and growth across dynamic markets.',
    },
    {
      id: '4',
      title: 'Power & Energy',
      subtitle:
        'Driving the future of power and energy with innovative solutions, optimizing efficiency, reducing environmental impact, and unlocking sustainable growth for a brighter, cleaner tomorrow.',
      banner: '/images/transportation/banner4.jpg',
      headerone: 'About',
      contentone: 'Energy Solutions',
      contenttwo: 'that Power Progress',
      contentthree: 'Fuel a Sustainable Future',
      paragraphone: 'A Story: Solar Solutions for a Sustainable Future in Trincomalee',
      paragraphtwo:
        'At KapitalCorp, we are proud to lead sustainable energy initiatives that empower communities and transform lives. Our flagship Trincomalee project focuses on installing solar panels on the rooftops of rural schools across the region, providing reliable, clean energy to empower education in underserved areas. Access to consistent electricity in these schools means better lighting, extended study hours, and improved use of digital learning tools, enhancing educational outcomes for thousands of children. By harnessing the power of the sun, we reduce dependence on unreliable or costly grid power, cutting energy expenses and carbon emissions simultaneously.',
      paragraphthree:
        'The Trincomalee solar initiative is more than an energy project; it’s a commitment to environmental stewardship and social impact. Through collaboration with local stakeholders, we ensure installations are tailored to the specific needs of each school, maximizing efficiency and long-term sustainability. Our approach includes maintenance training for local teams, fostering community ownership, and creating green jobs. KapitalCorp’s solar program in Trincomalee exemplifies how renewable energy can be a catalyst for growth, lighting the way for brighter futures while advancing Sri Lanka’s clean energy goals. We are dedicated to expanding such impactful projects, powering not just schools but the wider community toward a greener, more resilient tomorrow.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in',
      headerfour: 'the Power & Energy Sector',
      paragraphfour:
        'Empowering sustainable growth through innovative power and energy solutions that fuel progress across every sector.',
    },
    {
      id: '5',
      title: 'Healthcare',
      subtitle:
        'Revolutionizing healthcare with innovative solutions, enhancing efficiency, improving patient outcomes, and driving sustainable growth for a healthier, brighter future.',
      banner: '/images/transportation/banner5.jpg',
      headerone: 'About',
      contentone: 'Healthcare Solutions',
      contenttwo: 'that Transform Lives',
      contentthree: 'and Drive a Healthier Future',
      paragraphone:
        'Transforming Healthcare Through Digital Innovation and Smart Hospital Solutions',
      paragraphtwo:
        'KapitalCorp is reshaping the healthcare landscape by introducing smart, technology-driven solutions that enhance hospital efficiency, patient care, and medical administration. In partnership with Thinkcube Systems, we led the successful implementation of a comprehensive Hospital Information Management System (HMS) at the University Hospital of Kothalawala Defense University (UHKDU). This all-in-one platform digitizes core hospital operations, including patient admissions, diagnostics, pharmacy, and records management, enabling seamless coordination between departments and delivering faster, more accurate care to patients. The HMS at UHKDU exemplifies our commitment to advancing healthcare institutions with reliable, scalable digital infrastructure. Real-time data access, streamlined workflows, and reduced administrative burdens empower medical professionals to focus on what matters most: patient outcomes.',
      paragraphthree:
        'Complementing this transformation, MedCubeUSA provides a robust suite of digital health solutions tailored for medical billing and operational efficiency. These platforms automate complex billing cycles, improve claim accuracy, and offer complete visibility across financial workflows, supporting healthcare providers with faster reimbursements and compliance-ready reporting. Together, these solutions mark a new chapter in healthcare innovation. KapitalCorp remains dedicated to equipping hospitals and clinics with future-ready systems that elevate care delivery, improve resource management, and support the growing demands of modern medical environments. Digital health isn’t the future - it’s the present, and we’re building it.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in',
      headerfour: 'the Healthcare Sector',
      paragraphfour:
        'Empowering better lives through innovative healthcare solutions tailored to enhance patient care and drive progress across every sector.',
    },
    {
      id: '6',
      title: 'Agriculture & Food Security',
      subtitle:
        'Transforming agriculture and food security with innovative solutions, boosting efficiency, improving yields, and driving sustainable growth for a healthier, hunger-free future.',
      banner: '/images/transportation/banner6.jpg',
      headerone: 'About',
      contentone: 'Agriculture & Food',
      contenttwo: 'Security Solutions',
      contentthree: 'that Feed the Future',
      paragraphone: 'Leading Innovation in Agriculture and Sustainable Food',
      paragraphtwo:
        'KapitalCorp is committed to advancing the agriculture and food sector through sustainable innovation, with a focus on delivering high-performance fertilizer solutions that improve yield, soil health, and long-term food security. As an industry-leading organization in the fertilizer space, we play a vital role in supporting farmers, agri-businesses, and food producers with the tools they need to grow more with less. Our fertilizers are developed using science-backed formulations that balance crop nutrition and environmental responsibility. From small-scale farms to large agricultural operations, we tailor solutions to meet diverse climate conditions, soil types, and crop requirements, ensuring maximum productivity and minimizing ecological impact.',
      paragraphthree:
        'Beyond fertilizers, we are building a broader ecosystem of support that includes farmer education, precision farming technologies, and sustainable cultivation practices. We partner with agricultural communities to promote smarter, greener methods that protect natural resources while securing food supply chains. In a world facing rising food demand and environmental challenges, KapitalCorp leads with purpose and innovation. We’re not just feeding fields—we’re cultivating resilience, improving livelihoods, and helping shape a more food-secure future. Our mission is rooted in growth: of crops, of communities, and a healthier planet.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in',
      headerfour: 'the Agriculture Sector',
      paragraphfour:
        'Empowering sustainable growth and nourishment through innovative agriculture solutions that strengthen food security across every region.',
    },
    {
      id: '7',
      title: 'Water & Irrigation',
      subtitle:
        'Shaping the future of water and irrigation with innovative solutions, enhancing efficiency, conserving resources, and driving sustainable growth for a greener, more resilient world',
      banner: '/images/transportation/banner7.jpg',
      headerone: 'About',
      contentone: 'Water Solutions that',
      contenttwo: 'Drive Sustainability',
      contentthree: 'Forward',
      paragraphone:
        'Empowering the water sector with intelligent, scalable, and technology-driven sustainability solutions.',
      paragraphtwo:
        'Kapital Corp’s Water & Irrigation Division is dedicated to delivering innovative, data-driven solutions that empower businesses, communities, and industries to navigate the evolving water landscape with confidence. We offer a comprehensive suite of water management services, including smart irrigation systems, water conservation strategies, infrastructure optimization, and sustainable resource management—each designed to enhance efficiency, reduce waste, and drive long-term sustainability. Our approach is rooted in technology and expertise, leveraging advanced analytics, AI-driven insights, and strategic execution to ensure resilience, scalability, and responsible water usage in every solution',
      paragraphthree:
        'With a team of industry specialists, a client-centric philosophy, and a commitment to sustainability, we serve a diverse range of stakeholders—from agricultural enterprises and municipal systems to industrial operations—by optimizing irrigation systems, achieving water conservation efforts, or enhancing water security. We prioritize building lasting partnerships through innovative, adaptable, and future-ready solutions.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in',
      headerfour: 'the Water & Irrigation Sector',
      paragraphfour:
        'Empowering sustainable resource management through advanced water and irrigation solutions that drive growth across every sector.',
    },
    {
      id: '8',
      title: 'Defense',
      subtitle:
        'Strengthening defense with innovative solutions, enhancing security, advancing strategy, and driving sustainable resilience for a safer, more secure future',
      banner: '/images/transportation/banner8.jpg',
      headerone: 'About',
      contentone:
        'Delivering advanced defense solutions engineered to fortify today’s security and safeguard tomorrow’s world.',
      contenttwo: '',
      contentthree: '',
      paragraphone:
        'Partnering with military, government, academia, and technology-driven solutions for a secure and resilient future.',
      paragraphtwo:
        'Modern defense requirements span a broad spectrum—from military warfare systems and internal security infrastructure to cyber warfare deterrents. In this evolving landscape, KapitalCorp stands at the forefront, delivering comprehensive solutions that address the multifaceted needs of today’s defense forces. Backed by a seasoned team, KapitalCorp has successfully executed numerous projects, collaborating with globally recognized leaders to deliver logistics networks, advanced support systems, and high-performance offensive tactical gear. Each solution is tailored to meet operational demands while ensuring reliability, efficiency, and technological superiority.',
      paragraphthree:
        'With a commitment to strengthening national security, KapitalCorp offers end-to-end support for defense establishments through Integrated Solutions, expert Consultancy, seamless Project Management & Implementation, and the Supply of World-Class Equipment. Whether it is modernizing infrastructure or deploying advanced defense technologies, KapitalCorp is equipped to deliver state-of-the-art systems that enhance preparedness, resilience, and strategic capability.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in',
      headerfour: 'the Defence Sector',
      paragraphfour:
        'Empowering national security through advanced defence solutions tailored to ensure resilience, readiness, and progress',
    },
    {
      id: '9',
      title: 'Leasure',
      subtitle:
        'KapitalCorp enhances the leisure industry by developing unique, experience-driven destinations and services that promote relaxation, wellness, and cultural engagement.',
      banner: '/images/transportation/banner9.jpg',
      headerone: 'About',
      contentone: 'Laser Adventures That',
      contenttwo: 'Thrill and Inspire',
      contentthree: '',
      paragraphone:
        'Curating World-Class Experiences in Sri Lanka’s Most Evolved Leisure Landscape',
      paragraphtwo:
        'KapitalCorp is proud to be at the forefront of Sri Lanka’s most evolved leisure industry, where natural beauty, cultural richness, and innovation converge to offer unforgettable experiences. From coastal retreats and jungle escapes to wellness resorts and adventure getaways, our leisure initiatives are designed to celebrate the essence of Sri Lanka while meeting the growing demand for world-class hospitality. Recognizing Sri Lanka as one of the most developed destinations in South Asia for leisure and experiential tourism, we invest in crafting unique offerings that cater to both local and international travelers. Whether it’s through eco-lodges immersed in nature, boutique properties rich in heritage, or curated wellness programs that restore balance and vitality, our approach is centered around quality, authenticity, and sustainability.',
      paragraphthree:
        'KapitalCorp’s leisure ventures also embrace modern lifestyle trends—integrating wellness, gastronomy, and immersive cultural activities to elevate the guest journey. We collaborate with local communities and artisans to ensure our developments enrich the destination while offering guests a genuine connection to place. In leading the leisure space, KapitalCorp aims not just to build resorts but to create spaces that inspire, rejuvenate, and leave a lasting impact. Our goal is simple: to make Sri Lanka a premier global destination for luxury, relaxation, and meaningful exploration.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in',
      headerfour: 'the Leasure Sector',
      paragraphfour:
        'Empowering memorable experiences through tailored leisure solutions that inspire enjoyment and drive growth across every destination.',
    },
    {
      id: '10',
      title: 'Transportation',
      subtitle:
        'Innovative Transportation Solutions for Seamless Travel, Efficient Operations, and Smarter Urban and Intercity Mobility Worldwide.',
      banner: 'images/transportation/transportation_1.png',
      headerone: 'About',
      contentone: 'Driving the Future ',
      contenttwo: 'of Transport',
      contentthree: '',
      paragraphone:
        'Empowering countries with reliable, efficient, and technologically mobility services.',
      paragraphtwo:
        'At KapitalCorp, we are redefining the future of mobility by offering smart, adaptable transportation solutions designed to meet the evolving needs of modern cities, businesses, and individuals. Our expertise spans international fare collection systems, end-to-end ticketing solutions, and both public and private transport services, making travel more seamless, efficient, and secure. We help governments and transit authorities modernize their public transportation networks through integrated, cashless payment systems that enhance passenger convenience and reduce operational overhead. Our advanced ticketing platforms ensure real-time tracking, data-driven route optimization, and improved service management for buses, trains, and ferries.',
      paragraphthree:
        'In the private mobility sector, we offer tailored solutions, including professional driver services with well-maintained vehicles, ideal for corporate clients, tourists, and daily commuters seeking comfort, reliability, and efficiency. Whether it is planning intercity logistics or last-mile connections, we combine technology and human expertise to ensure a smooth, connected travel experience. At the core of our transportation initiatives is a commitment to sustainability, safety, and smart infrastructure. With each project, we work closely with local stakeholders and global partners to promote inclusive mobility and scalable systems that benefit both communities and businesses. KapitalCorp moves people, ideas, and industries - one smart solution at a time.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in ',
      headerfour: 'the Transportation Sector',
      paragraphfour:
        'Our companies specialize in fare systems, ticketing, public transit, and private mobility solutions.',
    },
    {
      id: '11',
      title: 'Transportation',
      subtitle:
        'Innovative Transportation Solutions for Seamless Travel, Efficient Operations, and Smarter Urban and Intercity Mobility Worldwide.',
      banner: '/images/transportation/banner.jpg',
      headerone: 'About',
      contentone: 'Driving the Future ',
      contenttwo: 'of Transport',
      contentthree: '',
      paragraphone:
        'Empowering countries with reliable, efficient, and technologically mobility services.',
      paragraphtwo:
        'At KapitalCorp, we are redefining the future of mobility by offering smart, adaptable transportation solutions designed to meet the evolving needs of modern cities, businesses, and individuals. Our expertise spans international fare collection systems, end-to-end ticketing solutions, and both public and private transport services, making travel more seamless, efficient, and secure. We help governments and transit authorities modernize their public transportation networks through integrated, cashless payment systems that enhance passenger convenience and reduce operational overhead. Our advanced ticketing platforms ensure real-time tracking, data-driven route optimization, and improved service management for buses, trains, and ferries.',
      paragraphthree:
        'In the private mobility sector, we offer tailored solutions, including professional driver services with well-maintained vehicles, ideal for corporate clients, tourists, and daily commuters seeking comfort, reliability, and efficiency. Whether it is planning intercity logistics or last-mile connections, we combine technology and human expertise to ensure a smooth, connected travel experience. At the core of our transportation initiatives is a commitment to sustainability, safety, and smart infrastructure. With each project, we work closely with local stakeholders and global partners to promote inclusive mobility and scalable systems that benefit both communities and businesses. KapitalCorp moves people, ideas, and industries - one smart solution at a time.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in ',
      headerfour: 'the Transportation Sector',
      paragraphfour:
        'Our companies specialize in fare systems, ticketing, public transit, and private mobility solutions.',
    },
    {
      id: '12',
      title: 'Broadcasting',
      subtitle: 'Broadcasting connects people, empowers voices, and delivers inspiring content through seamless, innovative technology for communities everywhere.',
      banner: '/images/transportation/broadcasting_one.png',
      headerone: 'About',
      contentone: 'Broadcasting Solutions',
      contenttwo: 'that Unite, Inspire,',
      contentthree: 'and Shape Tomorrow',
      paragraphone: 'Strengthen solutions with intelligent solutions, and technology will help enhance our business and market future.',
      paragraphtwo: 'Kapital Corp’s Broadcasting Sector pioneers transformative media experiences, giving brands, creators, and communities the tools they need to shine in today’s fast-moving media world. Our expertise spans live event production, multi-channel content distribution, advanced broadcast infrastructure, and strategic digital consulting—each designed to amplify voices, extend reach, and spark lasting connections. Leveraging next-gen analytics, AI-driven insights, and flawless execution, we guarantee reliability and scalability for every project.',
      paragraphthree: 'Guided by a passionate, innovative team, client-first values, and a relentless drive for creative impact, we partner with broadcasters, companies, creatives, and organizers of all kinds. From powering thrilling live events and dynamic branded content to delivering rich viewer experiences, our approach is about building enduring partnerships and future-proof solutions. At Kapital Corp, broadcasting isn\'t just about transmission—it’s about bringing stories to life, connecting people, and shaping a bold, inspired future through technology, creativity, and vision.',
      headertwo: 'Companies',
      headerthree: 'Our Companies in the',
      headerfour: 'Defence Sector',
      paragraphfour: 'Exploratory services across People\'s Science Sciences solutions: support to secure resilience, creativity, and progress',
    }

  ];

  private companyCards: Sector[] = [
    {
      id: '1',
      sectorId: '1',
      cardcontentone: 'ThinkCube Solutions',
      cardcontenttwo: 'IT Company',
      cardlogo: '/images/transportation/Thinkcube-logo.png',
      cardparagraphone:
        'A proud subsidiary of ThinkCube, ThinkCube Telecom & IT is at the forefront of cutting-edge telecommunications and IT solutions, delivering seamless connectivity and transformative digital experiences. With a focus on innovation, reliability, and security, we empower businesses, communities, and individuals with next-generation communication technologies.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/imagetwo.jpg',
      link: '',
    },
    {
      id: '2',
      sectorId: '1', // Also belongs to sector 1
      cardcontentone: 'Cube Matrix',
      cardcontenttwo: 'IT Company',
      cardlogo: '/images/transportation/cubematrix.png',
      cardparagraphone:
        'A proud subsidiary of Cube Matrix, Cube Matrix Telecom & IT is a leader in cutting-edge telecommunications and IT solutions, driving seamless connectivity and digital transformation for businesses and individuals alike. With a commitment to speed, security, and innovation, we deliver world-class network infrastructure, IT services, and smart communication technologies.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/imageone.jpg',
      link: '',
    },
    {
      id: '3',
      sectorId: '2', // BPO sector
      cardcontentone: 'Medcube',
      cardcontenttwo: 'BPO Company',
      cardlogo: '/images/transportation/Medcube-logo.png',
      cardparagraphone:
        'As a trusted subsidiary of MedCube Pvt Ltd, MedCube BPO specializes in delivering world-class Business Process Outsourcing (BPO) solutions tailored for healthcare, finance, and corporate enterprises. With a commitment to efficiency, accuracy, and innovation, we streamline operations, enhance productivity, and optimize workflow management for businesses seeking excellence in outsourcing.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/Medcube-banner1.jpg',
      link: '',
    },
    {
      id: '12',
      sectorId: '2', // BPO sector
      cardcontentone: 'Medcube USA',
      cardcontenttwo: 'Software Company',
      cardlogo: '/images/transportation/Medcube-logo.png',
      cardparagraphone:
        'MedCubeUSA offers a smart, integrated suite of software solutions designed to optimize operations across legal, administrative, and healthcare sectors. From CycloneRCM for revenue cycle management and AeliusCase for streamlined legal case handling, to Sumxio for real-time business analytics and AeliusMD for efficient medical practice management, each platform is built to automate processes, improve accuracy, and drive smarter decision-making, helping businesses work faster, better, and at scale.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/medcubeusa.png',
      link: 'https://medcube.health/',
    },
    {
      id: '4',
      sectorId: '3', // Trading sector
      cardcontentone: 'Kapital Corp',
      cardcontenttwo: 'Group Company',
      cardlogo: '/images/transportation/Kapitalcorp.png',
      cardparagraphone:
        'As a dynamic subsidiary of Kapital Corp Pvt Ltd, Kapital Trading specializes in high-impact trading solutions that fuel business growth and market expansion. With a strategic focus on efficiency, reliability, and innovation, we navigate the complexities of global and domestic trade, ensuring seamless transactions and optimized supply chains.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/trading.png',
      link: 'https://www.kapitalcorp.lk/',
    },
    {
      id: '5',
      sectorId: '4', // Power & Energy sector
      cardcontentone: 'Kapital ES',
      cardcontenttwo: 'Energy Solution Comapny',
      cardlogo: '/images/company/energy.png',
      cardparagraphone:
        'A proud subsidiary of Kapital Corp, Kapital Energy Solutions is a leading provider of innovative and sustainable power and energy solutions. With a commitment to efficiency, reliability, and environmental responsibility, we specialize in delivering cutting-edge energy technologies that drive industries, empower businesses, and illuminate communities.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/Energy-solution-banner4.jpg',
      link: 'https://www.kapitalcorp.lk/',
    },
    // {
    //   id: '6',
    //   sectorId: '5',
    //   cardcontentone: 'Kapital Corp',
    //   cardcontenttwo: 'Group Company',
    //   cardlogo: '/images/transportation/Kapitalcorp.png',
    //   cardparagraphone:
    //     'A proud subsidiary of Kapital Corp, Kapital Healthcare is dedicated to revolutionizing the healthcare industry with cutting-edge medical solutions, patient-centric services, and world-class healthcare facilities. With a commitment to excellence, innovation, and compassionate care, we strive to enhance patient outcomes and redefine medical standards.',
    //   cardiconone: '/images/transportation/FB.png',
    //   cardicontwo: '/images/transportation/Insta.png',
    //   cardiconthree: '/images/transportation/link.png',
    //   cardiconfour: '/images/transportation/location.png',
    //   cardparagraphtwo: 'Colombo, Sri Lanka',
    //   cardparagraphthree: 'View More',
    //   imageone: '/images/transportation/Healthcare-banner5.jpg',
    //   link: 'https://www.kapitalcorp.lk/',
    // },
    {
      id: '12',
      sectorId: '5', // BPO sector
      cardcontentone: 'Medcube USA',
      cardcontenttwo: 'Software Company',
      cardlogo: '/images/transportation/Medcube-logo.png',
      cardparagraphone:
        'MedCubeUSA offers a smart, integrated suite of software solutions designed to optimize operations across legal, administrative, and healthcare sectors. From CycloneRCM for revenue cycle management and AeliusCase for streamlined legal case handling, to Sumxio for real-time business analytics and AeliusMD for efficient medical practice management, each platform is built to automate processes, improve accuracy, and drive smarter decision-making, helping businesses work faster, better, and at scale.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/medcubeusa.png',
      link: 'https://medcube.health/',
    },
    {
      id: '7',
      sectorId: '6', // Agriculture sector
      cardcontentone: 'Kapital Corp',
      cardcontenttwo: 'Group Company',
      cardlogo: '/images/transportation/Kapitalcorp.png',
      cardparagraphone:
        'A proud subsidiary of Kapital Corp, Kapital Agri & Food Solutions is committed to advancing agriculture and ensuring global food security through innovation, sustainability, and efficiency. With a deep-rooted focus on modern farming techniques, smart agri-solutions, and sustainable food production, we bridge the gap between agriculture and future-ready food systems.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/agriculture-banner6.jpg',
      link: 'https://www.kapitalcorp.lk/',
    },
    {
      id: '8',
      sectorId: '7', // Water & Irrigation sector
      cardcontentone: 'Kapital Corp',
      cardcontenttwo: 'Group Company',
      cardlogo: '/images/transportation/Kapitalcorp.png',
      cardparagraphone:
        'A proud subsidiary of Kapital Corp, Kapital Water & Irrigation is dedicated to revolutionizing water management and irrigation solutions with cutting-edge technology and sustainable practices. With a focus on efficiency, conservation, and reliability, we ensure the optimal use of water resources to support agriculture, industries, and communities.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/Waterbill-banner7.jpg',
      link: 'https://www.kapitalcorp.lk/',
    },
    {
      id: '9',
      sectorId: '8', // Defense sector
      cardcontentone: 'Kapital Corp',
      cardcontenttwo: 'Group Company',
      cardlogo: '/images/transportation/Kapitalcorp.png',
      cardparagraphone:
        'Kapital Defence Solutions (KDS), a strategic arm of Kapital Corp, operates at the forefront of advanced defense technologies and integrated security systems. Serving governments, defense agencies, and critical infrastructure sectors, KDS is dedicated to fortifying national resilience through innovation, precision engineering, and mission-critical intelligence.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/Defense.banner8.jpg',
      link: 'https://www.kapitalcorp.lk/',
    },
    {
      id: '10',
      sectorId: '9', // Leisure sector
      cardcontentone: 'Kapital LA',
      cardcontenttwo: 'Leaser Company',
      cardlogo: '/images/company/leisure.png',
      cardparagraphone:
        'A proud subsidiary of Kapital Corp, Kapital Leisure & Adventure redefines travel by blending luxury with exhilarating experiences. Whether it’s serene getaways, adrenaline-fueled adventures, or bespoke leisure retreats, we curate unforgettable journeys that cater to thrill-seekers and relaxation enthusiasts alike.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/Leaser-banner9.jpg',
      link: 'https://www.kapitalcorp.lk/',
    },
    {
      id: '11',
      sectorId: '10', // Transportation sector
      cardcontentone: 'EPTT',
      cardcontenttwo: 'Transport Company',
      cardlogo: '/images/transportation/EPTT.png',
      cardparagraphone:
        'Executive Premium Luxury Transport (EPPT), a proud subsidiary of Kapital Corp, specializes in high-end, chauffeur-driven transport services tailored for corporate executives, VIPs, and luxury travelers. With a fleet of premium vehicles and a focus on comfort, safety, and discretion, EPPT delivers a first-class travel experience designed to meet the highest standards of service and sophistication.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/Transportationbanner10.jpg',
      link: 'https://eptt.lk/',
    },
    {
      id: '13',
      sectorId: '1', // Transportation sector
      cardcontentone: 'Thinkcube Systems',
      cardcontenttwo: 'Software Company',
      cardlogo: '/images/transportation/thinkcubesys.png',
      cardparagraphone:
        'Executive Premium Luxury Transport (EPPT), a proud subsidiary of Kapital Corp, specializes in high-end, chauffeur-driven transport services tailored for corporate executives, VIPs, and luxury travelers. With a fleet of premium vehicles and a focus on comfort, safety, and discretion, EPPT delivers a first-class travel experience designed to meet the highest standards of service and sophistication.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/T._sys_img.png',
      link: 'https://eptt.lk/',
    },
    {
      id: '14',
      sectorId: '12',
      cardcontentone: 'Kapital Strategic Solutions',
      cardcontenttwo: 'Defense Solutions Provider',
      cardlogo: '/images/transportation/strategic_holdings.png',
      cardparagraphone:
        'Kapital Strategic Solutions, part of Kapital Group, provides intelligent defense solutions that strengthen security and protect the future. We deliver exploratory services across People\'s Science Sciences solutions, supporting secure resilience, creativity, and progress through innovative technology and strategic approaches.',
      cardiconone: '/images/transportation/FB.png',
      cardicontwo: '/images/transportation/Insta.png',
      cardiconthree: '/images/transportation/link.png',
      cardiconfour: '/images/transportation/location.png',
      cardparagraphtwo: 'Colombo, Sri Lanka',
      cardparagraphthree: 'View More',
      imageone: '/images/transportation/broadcasting_two.png',
      link: 'https://www.kapitagroup.com/',
    }

  ];

  private selectedSectorSubject = new BehaviorSubject<Sector | null>(null);

  constructor() { }

  getAllSectors(): Observable<Sector[]> {
    return of(this.sectors);
  }

  getAllCompanyCards(): Observable<Sector[]> {
    return of(this.companyCards);
  }

  getCompanyCardsBySectorId(sectorId: string): Observable<Sector[]> {
    const matchingCards = this.companyCards.filter((card) => card.sectorId === sectorId);
    return of(matchingCards);
  }

  getSectorById(id: string): Observable<Sector | undefined> {
    const sector = this.sectors.find((sector) => sector.id === id);
    return of(sector);
  }

  setSelectedSector(sector: Sector): void {
    this.selectedSectorSubject.next(sector);
  }

  getSelectedSector(): Observable<Sector | null> {
    return this.selectedSectorSubject.asObservable();
  }

  trackById(index: number, item: Sector): string {
    return item.id;
  }
}
