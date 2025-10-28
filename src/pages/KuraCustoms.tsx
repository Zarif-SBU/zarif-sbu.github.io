import {cn} from '../lib/utils'
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function KuraCustoms() {
  const techStack = [
    "Next.js",
    "Vercel",
    "Prisma ORM",
    "PostgreSQL",
    "Stripe",
    "Resend",
    "Shippo",
    "Cron Jobs",
    "shadcn/ui",
    "Tailwind CSS",
  ];

  const features = [
    "E-commerce platform with secure checkout using Stripe",
    "Inventory management system powered by Prisma and PostgreSQL",
    "Automated email confirmations using Resend",
    "Scheduled Cron Jobs for inventory updates",
    "Integrated shipping label creation via Shippo",
    "Responsive modern UI built with shadcn/ui and Tailwind CSS",
  ];
  return (
    
  <div className="flex">
    {/*Left section*/}
   <div className="w-1/4 flex flex-col mt-4">
      {/* Logo and Title Section */}
      <div className="flex flex-col items-center mb-6">
        <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer" className="group">
          <img src="/realKuraLogo.png" alt="Kura Customs logo" className="w-full max-w-[100px] transition duration-300 group-hover:brightness-95" />
        </a>
        <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer" className="mt-4">
          <h3 className={cn("text-3xl leading-relaxed text-foreground font-bold transition duration-300 hover:brightness-200")}>
            Kura Customs
          </h3>
        </a>
      </div>

      {/* Description */}
      <p className="text-lg text-muted-foreground text-center px-4 mb-6">
        An e-commerce site built by me and two college friends to share our
        hobby with a wider audience!
      </p>

      {/* Tech Stack */}
      <Separator className="mb-4" />
      <div className="px-4">
        <h4 className="text-lg font-bold mb-3 text-foreground">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-sm font-medium px-2 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
      {/* Right side content goes here */}
      <div className="flex-1 p-4 mt-8">   
        {/* Overview */}
        <h2 className="text-4xl font-semibold text-foreground">Overview</h2>
        <p className="text-lg leading-relaxed text-foreground">
            Kura Customs began as a small creative project among friends and evolved
            into a full-fledged e-commerce site. The platform was developed using{" "}
            <strong>Next.js</strong> and deployed via <strong>Vercel</strong> for
            scalability and performance. Our goal was to build a seamless online
            shopping experience — from product browsing to payment and shipping.
        </p>

        {/* Features */}
        <Separator className="" />
        <h2 className="text-2xl font-semibold text-foreground">Key Features</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-foreground">
            {features.map((f, idx) => (
            <li key={idx}>{f}</li>
            ))}
        </ul>

        {/* Role */}
        <Separator className="" />
        <h2 className="text-2xl font-semibold text-foreground">My Role</h2>
        <p className="text-lg leading-relaxed text-foreground">
            I focused on connecting and managing the backend with{" "}
            <strong>Prisma ORM</strong> and <strong>PostgreSQL</strong>, ensuring
            accurate product tracking and order synchronization. On the frontend, I
            designed and implemented the <strong>Landing Page</strong> and{" "}
            <strong>FAQ Page</strong>, optimizing them for clarity, responsiveness,
            and user engagement.
        </p>

        {/* Outcome */}
        <Separator className="" />
        <h2 className="text-2xl font-semibold text-foreground">Outcome</h2>
        <p className="text-lg leading-relaxed text-foreground">
            The final product is a polished and reliable e-commerce platform that
            automates much of the sales and fulfillment process while offering a
            modern, intuitive experience for users. Building Kura Customs helped me
            strengthen my full-stack development skills and my understanding of
            product design, teamwork, and technical deployment.
        </p>
        </div>
    </div>
  );
}

export default KuraCustoms;
