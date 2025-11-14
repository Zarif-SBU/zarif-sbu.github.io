// // import {cn} from '../lib/utils'
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Link2 } from 'lucide-react';

// function KuraCustoms() {
//   const techStack = [
//     "Next.js",
//     "Vercel",
//     "Prisma ORM",
//     "PostgreSQL",
//     "Stripe",
//     "Resend",
//     "Shippo",
//     "Cron Jobs",
//     "shadcn/ui",
//     "Tailwind CSS",
//   ];

//   const features = [
//     "E-commerce platform with secure checkout using Stripe",
//     "Inventory management system powered by Prisma and PostgreSQL",
//     "Automated email confirmations using Resend",
//     "Scheduled Cron Jobs for inventory updates",
//     "Integrated shipping label creation via Shippo",
//     "Responsive modern UI built with shadcn/ui and Tailwind CSS",
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row bg-background min-h-screen">
//       {/* Mobile Header */}
//       <div className="lg:hidden w-full bg-accent/5 border-b border-border p-6 animate-fadeIn">
//         <div className="flex items-start gap-4">
//           <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
//             <img src="/realKuraLogo.png" alt="Kura Customs logo" className="w-20 transition duration-300 hover:brightness-95" />
//           </a>
//           <div>
//             <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer">
//               <h2 className="text-2xl font-bold text-foreground transition duration-300 hover:text-accent-foreground hover:brightness-200">
//                 Kura Customs
//               </h2>
//             </a>
//             <p className="text-sm text-muted-foreground mt-1">
//               <strong>E-commerce site</strong> built by me and 2 friends to share our hobby with others!
//             </p>
//             <p className="text-sm font-medium text-foreground mt-2">
//               Full-Stack Developer
//             </p>
//           </div>
//           {/* Languages */}
//         <div className="mb-6">
//           <h4 className="text-base font-bold text-foreground mb-2">Languages</h4>
//           <div className="flex flex-wrap gap-1.5">
//             <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
//               TypeScript
//             </Badge>
//             <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
//               HTML
//             </Badge>
//             <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
//               CSS
//             </Badge>
//           </div>
//         </div>

//         {/* Tech Stack */}
//         <div>
//           <h4 className="text-base font-bold text-foreground mb-2">Tech Stack</h4>
//           <div className="flex flex-wrap gap-1.5">
//             {techStack.map((tech) => (
//               <Badge key={tech} variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
//                 {tech}
//               </Badge>
//             ))}
//           </div>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Sidebar - scrollable */}
//       <aside className="hidden lg:flex lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex-col w-1/5 bg-accent/5 border-r border-border pt-8 pb-6 px-6 overflow-y-auto animate-fadeIn">
//         {/* Logo and Title Section */}
//         <div className="flex flex-col items-center gap-2">
//           {/* Logo */}
//           <a
//             href="https://www.kuracustoms.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group"
//           >
//             <img
//               src="/realKuraLogo.png"
//               alt="Kura Customs logo"
//               className="w-full max-w-[150px] transition duration-300 group-hover:brightness-95"
//             />
//           </a>

//           {/* Title + Link icon */}
//           <div className="relative flex items-center justify-center hover:brightness-200 transition duration-300">
//             <a
//               href="https://www.kuracustoms.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl leading-relaxed text-foreground font-bold transition duration-300 hover:text-accent-foreground"
//             >
//               Kura Customs
//             </a>
//             <Link2
//               className="absolute -left-10 top-1/2 -translate-y-1/2 text-foreground hover:text-accent-foreground transition-colors"
//               size={30}
//             />
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-base text-muted-foreground text-center mb-8">
//           <strong>E-commerce site</strong> built by me and 2 friends to share our hobby with others!
//         </p>

//         {/* Role */}
//         <div className="mb-4">
//           <h4 className="text-lg font-bold text-foreground underline">Role</h4>
//           <p className="text-base text-foreground">
//             Full-Stack Developer
//           </p>
//         </div>
//         {/* Languages */}
//         <div className="mb-4">
//           <h4 className="text-lg font-bold text-foreground mb-1 underline">Languages</h4>
//           <div className="flex flex-wrap gap-1.5">
//             <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
//               TypeScript
//             </Badge>
//             <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
//               HTML
//             </Badge>
//             <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
//               CSS
//             </Badge>
//           </div>
//         </div>
//         {/* Tech Stack */}
//         <div>
//           <h4 className="text-lg font-bold text-foreground mb-1 underline">Tech Stack</h4>
//           <div className="flex flex-wrap gap-1.5">
//             {techStack.map((tech) => (
//               <Badge key={tech} variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-sm rounded-md border border-accent/30 font-medium">
//                 {tech}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto animate-fadeIn">
//         <div className="max-w-352 mx-auto">
//           {/* Overview */}
//           <section className="mb-12">
//             <h2 className="text-3xl lg:text-4xl mb-4 font-semibold text-foreground">Overview</h2>
//             <p className="text-base lg:text-lg leading-relaxed text-foreground">
//               Kura Customs began as a small creative project among friends and evolved
//               into a full-fledged e-commerce project. The platform was developed using{" "}
//               <strong>Next.js</strong> and deployed via <strong>Vercel</strong>. Our goal was to build a seamless online
//               shopping experience — from product browsing to payment and shipping.
//             </p>
//           </section>

//           {/* Features */}
//           <Separator className="my-8" />
//           <section className="mb-12">
//             <h2 className="text-2xl lg:text-3xl mb-4 font-semibold text-foreground">Key Features</h2>
//             <ul className="list-disc list-inside text-base lg:text-lg leading-relaxed text-foreground space-y-2 ml-4">
//               {features.map((f, idx) => (
//                 <li key={idx}>{f}</li>
//               ))}
//             </ul>
//           </section>

//           {/* Role */}
//           <Separator className="my-8" />
//           <section className="mb-12">
//             <h2 className="text-2xl lg:text-3xl mb-4 font-semibold text-foreground">My Role</h2>
//             <p className="text-base lg:text-lg leading-relaxed text-foreground">
//               I focused on connecting and managing the backend with{" "}
//               <strong>Prisma ORM</strong> and <strong>PostgreSQL</strong>, ensuring
//               accurate product tracking and order synchronization. On the frontend, I
//               designed and implemented the <strong>Landing Page</strong> and{" "}
//               <strong>FAQ Page</strong>, optimizing them for clarity, responsiveness,
//               and user engagement.
//               I also wrote <strong>test cases</strong> and scenarios to ensure the reliability of our
//               checkout and inventory systems.
//             </p>
//           </section>

//           {/* Outcome */}
//           <Separator className="my-8" />
//           <section className="mb-12">
//             <h2 className="text-2xl lg:text-3xl mb-4 font-semibold text-foreground">Outcome</h2>
//             <p className="text-base lg:text-lg leading-relaxed text-foreground">
//               The final product is a polished and reliable e-commerce platform that
//               automates much of the sales and fulfillment process while offering a
//               modern, intuitive experience for users. Building Kura Customs helped me
//               strengthen my full-stack development skills and my understanding of
//               product design, teamwork, and technical deployment.
//             </p>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default KuraCustoms;


// import React from "react";


export default function KuraCustomsPortfolio() {
  return (
    <div className="flex flex-col w-full min-h-screen text-foreground bg-background animate-fadeIn">
      {/* Top Banner */}
      <section className="w-full py-10 px-6 md:px-16 flex flex-col items-center text-center">
        <img src="/realKuraLogo.png" alt="Kura Customs Logo" className="h-50 mb-6 opacity-90"/>
        <h1 className="text-5xl font-bold mb-4">Kura Customs</h1>
        <p className="text-lg max-w-2xl opacity-90">
          A full-stack e-commerce platform built with Next.js and hosted on Vercel to share our hobby lego figurines with others!
        </p>
        <div className="flex gap-4 mt-8">
          <a href="https://kuracustoms.com" target="_blank" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition">
            Visit our Site
          </a>
          <a href="https://www.instagram.com/kuracustoms/" className="px-6 py-3 rounded-xl border shadow hover:bg-accent transition">
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-15 w-full px-6 md:px-16 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-2xl bg-accent/20 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3"> Challenge</h3>
            <p className="opacity-80">Turn a hobby into a fully automated online store with minimal manual work.</p>
          </div>
          <div className="p-6 rounded-2xl bg-accent/20 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3">Solution</h3>
            <p className="opacity-80">A full-stack platform with automated payments, shipping, and notifications.</p>
          </div>
          <div className="p-6 rounded-2xl bg-accent/20 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3">Impact</h3>
            <p className="opacity-80">Site recieved 500+ unique visitors since release on October 10th with 30+ orders made.</p>
          </div>
      </section>

      {/* demo */}
      <section className="w-full px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center justify-center pt-20" id="demo">
        <h2 className="text-4xl font-bold mb-4"> Desktop View</h2>
        <div key="1" className="overflow-hidden shadow-lg border-4 border-border rounded-2xl mb-20">
          <img src={"kuracustoms/all_pages.gif"} alt={"Demo 1"} className="w-full" />
        </div>
        <h2 className="text-4xl font-bold mb-4"> Desktop Checkout </h2>
        <div key="2" className="overflow-hidden shadow-lg border-4 border-border rounded-2xl mb-20">
          <img src={"kuracustoms/checkout.gif"} alt={"Demo 2"} className="w-full" />
        </div>
      </section>
      {/* Mobile Demo */}
      <section className="w-full px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center justify-center" id="demo">
          <h2 className="text-4xl font-bold mb-4"> Mobile View </h2>
          <div className="grid grid-cols-2 overflow-hidden lg:gap-x-50 md:gap-x-20 gap-x-10">
            <img src={"kuracustoms/m_pages.gif"} alt={"Demo 1"} className="w-full shadow-lg border-4 border-border rounded-2xl max-h-[700px]" />
            <img src={"kuracustoms/m_checkout.gif"} alt={"Demo 2"} className="w-full shadow-lg border-4 border-border rounded-2xl max-h-[700px]" />
          </div>
      </section>

      <section className="w-full px-6 md:px-16 py-20">
          {/* Architecture Section */}
          <div id="architecture" className="mb-16">
            <div className="text-center mb-4">
              <h2 className="text-4xl font-bold">System Architecture</h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                High-level overview of the backend services, APIs, and data flow.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
              <img
                src="kuracustoms/diagram.png"
                alt="System Architecture Diagram"
                className="w-full border-4 border-border rounded-2xl"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Core technologies and integrations that make the platform robust and scalable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Secure Checkout",
                  tech: "Stripe",
                  description: "Secure payment processing with support for multiple payment methods"
                },
                {
                  title: "Automated Shipping",
                  tech: "Shippo",
                  description: "Real-time shipping rates and label generation for efficient fulfillment"
                },
                {
                  title: "Inventory Sync",
                  tech: "Cron Jobs",
                  description: "Scheduled tasks for automatic inventory updates and stock management"
                },
                {
                  title: "Database Layer",
                  tech: "Prisma + PostgreSQL",
                  description: "Type-safe ORM with relational database for reliable data storage"
                },
                {
                  title: "Email Notifications",
                  tech: "Resend",
                  description: "Automated transaction emails for order recipt and and tracking info"
                },
                {
                  title: "Modern UI",
                  tech: "Tailwind + shadcn",
                  description: "Component-based design system for consistent, responsive interfaces"
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border bg-card shadow-md hover:shadow-lg hover:border-accent transition-all duration-300"
                >
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm font-semibold text-accent-foreground">{feature.tech}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* My role */}
      <section className="w-full px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-10">My Role</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            "Built backend using Prisma + PostgreSQL",
            "Implemented Stripe checkout + webhook handling",
            "Designed Landing + FAQ pages",
            "Wrote test cases and scenarios to evaluate inventory and checkout reliability",
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-primary/10 border shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="w-full px-6 md:px-16 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Challenges & Solutions</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            {
              c: "Stripe webhook reliability",
              s: "Added idempotency logic to avoid duplicate orders.",
            },
            {
              c: "Inventory inconsistencies",
              s: "Implemented system to reserve orders in checkout until purchased or if checkout expires.",
            },
            {
              c: "Shippo API failures",
              s: "Added retry logic + graceful fallback.",
            },
            {
              c: "Responsive design",
              s: "Mobile-first layout with flexible grid + Tailwind as 80% of visitors were mobile.",
            },
          ].map((pair, i) => (
            <div key={i} className="p-6 rounded-2xl bg-accent/20 shadow-md">
              <h3 className="text-xl font-bold mb-2">{pair.c}</h3>
              <p className="opacity-80">{pair.s}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
