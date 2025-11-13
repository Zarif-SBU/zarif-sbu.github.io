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
    <div className="flex flex-col lg:flex-row bg-background min-h-screen">
      {/* Mobile Header */}
      <div className="lg:hidden w-full bg-accent/5 border-b border-border p-6 animate-fadeIn">
        <div className="flex items-start gap-4">
          <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <img src="/realKuraLogo.png" alt="Kura Customs logo" className="w-20 transition duration-300 hover:brightness-95" />
          </a>
          <div>
            <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer">
              <h2 className="text-2xl font-bold text-foreground transition duration-300 hover:text-accent-foreground hover:brightness-200">
                Kura Customs
              </h2>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>E-commerce site</strong> built by me and 2 friends to share our hobby with others!
            </p>
            <p className="text-sm font-medium text-foreground mt-2">
              Full-Stack Developer
            </p>
          </div>
          {/* Languages */}
        <div className="mb-6">
          <h4 className="text-base font-bold text-foreground mb-2">Languages</h4>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              TypeScript
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              HTML
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              CSS
            </Badge>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-base font-bold text-foreground mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
                {tech}
              </Badge>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar - scrollable */}
      <aside className="hidden lg:flex lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex-col w-1/5 bg-accent/5 border-r border-border pt-8 pb-6 px-6 overflow-y-auto animate-fadeIn">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center">
          <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer" className="group">
            <img src="/realKuraLogo.png" alt="Kura Customs logo" className="w-full max-w-[150px] transition duration-300 group-hover:brightness-95" />
          </a>
          <a href="https://www.kuracustoms.com/" target="_blank" rel="noopener noreferrer">
            <h3 className={cn("text-3xl leading-relaxed text-foreground font-bold transition duration-300 hover:text-accent-foreground mt-4 hover:brightness-200")}>
              Kura Customs
            </h3>
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground text-center mb-8">
          <strong>E-commerce site</strong> built by me and 2 friends to share our hobby with others!
        </p>

        {/* Role */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-foreground mb-2 underline">Role</h4>
          <p className="text-sm text-foreground">
            Full-Stack Developer
          </p>
        </div>
        {/* Languages */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-foreground mb-2 underline">Languages</h4>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              TypeScript
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              HTML
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
              CSS
            </Badge>
          </div>
        </div>
        {/* Tech Stack */}
        <div>
          <h4 className="text-lg font-bold text-foreground mb-2 underline">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="px-2 py-0.5 bg-accent/20 text-foreground text-xs rounded-md border border-accent/30 font-medium">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4 font-semibold text-foreground">Overview</h2>
            <p className="text-base lg:text-lg leading-relaxed text-foreground">
              Kura Customs began as a small creative project among friends and evolved
              into a full-fledged e-commerce project. The platform was developed using{" "}
              <strong>Next.js</strong> and deployed via <strong>Vercel</strong>. Our goal was to build a seamless online
              shopping experience — from product browsing to payment and shipping.
            </p>
          </section>

          {/* Features */}
          <Separator className="my-8" />
          <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl mb-4 font-semibold text-foreground">Key Features</h2>
            <ul className="list-disc list-inside text-base lg:text-lg leading-relaxed text-foreground space-y-2 ml-4">
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </section>

          {/* Role */}
          <Separator className="my-8" />
          <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl mb-4 font-semibold text-foreground">My Role</h2>
            <p className="text-base lg:text-lg leading-relaxed text-foreground">
              I focused on connecting and managing the backend with{" "}
              <strong>Prisma ORM</strong> and <strong>PostgreSQL</strong>, ensuring
              accurate product tracking and order synchronization. On the frontend, I
              designed and implemented the <strong>Landing Page</strong> and{" "}
              <strong>FAQ Page</strong>, optimizing them for clarity, responsiveness,
              and user engagement.
              I also wrote <strong>test cases</strong> and scenarios to ensure the reliability of our
              checkout and inventory systems.
            </p>
          </section>

          {/* Outcome */}
          <Separator className="my-8" />
          <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl mb-4 font-semibold text-foreground">Outcome</h2>
            <p className="text-base lg:text-lg leading-relaxed text-foreground">
              The final product is a polished and reliable e-commerce platform that
              automates much of the sales and fulfillment process while offering a
              modern, intuitive experience for users. Building Kura Customs helped me
              strengthen my full-stack development skills and my understanding of
              product design, teamwork, and technical deployment.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default KuraCustoms;