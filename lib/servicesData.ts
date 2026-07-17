import type { PageId } from "./PageContext";

export interface FeatureList {
  title: string;
  items: string[];
}

export interface ServiceDetailData {
  title: string;
  subtitle: string;
  intro: string;
  featureLists: FeatureList[];
}

export const SERVICE_DETAILS: Partial<Record<PageId, ServiceDetailData>> = {
  "software-dev": {
    title: "Software Development",
    subtitle: "AI-Ready Applications Built for Scale",
    intro:
      "We build custom software with AI-native architecture — scalable cloud applications, intelligent APIs, and modern microservices designed for the future of enterprise technology.",
    featureLists: [
      {
        title: "Our Services",
        items: [
          "Custom Enterprise Software Development",
          "Cloud-Native & AI-Ready Applications",
          "API Development and Integration",
          "Database Design and Management",
          "Legacy System Modernization",
          "Software Architecture Consulting",
          "Quality Assurance and Testing",
          "Ongoing Maintenance and Support",
        ],
      },
      {
        title: "Technologies",
        items: [
          "Python, TypeScript, Go, Rust, Java",
          "React, Next.js, Vue.js",
          "Node.js, FastAPI, Django, .NET",
          "PostgreSQL, MongoDB, Redis, Vector DBs",
          "AWS, Azure, GCP with AI services",
          "Docker, Kubernetes, Terraform",
        ],
      },
    ],
  },
  "web-design": {
    title: "Website Designing",
    subtitle: "Intelligent Web Experiences That Convert",
    intro:
      "We create stunning, AI-personalized websites that adapt to user behavior, load instantly, and drive measurable conversions for your business.",
    featureLists: [
      {
        title: "Our Services",
        items: [
          "AI-Personalized Responsive Design",
          "E-commerce with Smart Recommendations",
          "Landing Page Optimization",
          "UI/UX Design and Prototyping",
          "Brand Identity and Logo Design",
          "Website Redesign and Modernization",
          "Headless CMS Integration",
          "Core Web Vitals Optimization",
        ],
      },
    ],
  },
  "ai-automation": {
    title: "AI Automation",
    subtitle: "Intelligent Systems That Think & Act",
    intro:
      "Harness the full power of artificial intelligence — from custom LLM deployments to computer vision and predictive analytics that revolutionize your operations.",
    featureLists: [
      {
        title: "AI Services",
        items: [
          "Intelligent Process Automation (IPA)",
          "Custom AI Chatbots & Virtual Assistants",
          "Machine Learning Model Development",
          "Natural Language Processing Solutions",
          "Computer Vision Applications",
          "Predictive Analytics and Forecasting",
          "Document AI & Data Extraction",
          "Workflow Automation Integration",
        ],
      },
      {
        title: "Industries",
        items: [
          "Healthcare — Clinical AI, patient analytics",
          "Finance — Fraud detection, risk modeling",
          "E-commerce — Recommendations, demand forecasting",
          "Manufacturing — Quality control, predictive maintenance",
          "Customer Service — 24/7 AI support, sentiment analysis",
          "Marketing — Lead scoring, content generation",
        ],
      },
    ],
  },
  seo: {
    title: "SEO Services",
    subtitle: "AI-Powered Search Dominance",
    intro:
      "Our AI-enhanced SEO strategies analyze millions of data points to identify opportunities, optimize content, and deliver sustainable organic growth.",
    featureLists: [
      {
        title: "Complete SEO Solutions",
        items: [
          "AI-Powered SEO Audits",
          "Intelligent Keyword Research",
          "On-Page & Technical SEO",
          "Content Strategy with AI Insights",
          "Link Building and Outreach",
          "Local & E-commerce SEO",
          "Real-time Ranking Analytics",
        ],
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile Applications",
    subtitle: "AI-Enhanced Mobile Experiences",
    intro:
      "We build intelligent mobile apps with on-device AI, seamless UX, and cross-platform performance that users love and businesses rely on.",
    featureLists: [
      {
        title: "Development Services",
        items: [
          "Native iOS (Swift, SwiftUI)",
          "Native Android (Kotlin)",
          "Cross-Platform (React Native, Flutter)",
          "AI-Powered Mobile Features",
          "App UI/UX Design",
          "Backend and API Development",
          "App Store Optimization",
          "Maintenance and Updates",
        ],
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Data-Driven Growth at Scale",
    intro:
      "AI-powered marketing strategies that predict customer behavior, optimize campaigns in real-time, and deliver measurable ROI across every channel.",
    featureLists: [
      {
        title: "Marketing Services",
        items: [
          "AI-Optimized Social Media Marketing",
          "Programmatic PPC Advertising",
          "Content Marketing with AI Generation",
          "Email Marketing Automation",
          "Influencer Marketing Analytics",
          "Video Marketing Strategy",
          "Conversion Rate Optimization",
          "Marketing Analytics Dashboards",
        ],
      },
    ],
  },
};
