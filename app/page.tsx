"use client";

import { Rocket, Users, Code, TestTube, Zap, TrendingUp, Cpu, Globe } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const neurautomationTimeline = [
  {
    id: 1,
    title: "Fundação",
    date: "Jan 2024",
    content: "Início das operações da Neurautomation com foco em tecnologia e crescimento digital.",
    category: "Foundation",
    icon: Rocket,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Primeiros Clientes",
    date: "Fev 2024",
    content: "Aquisição dos primeiros clientes de performance e marketing digital.",
    category: "Growth",
    icon: Users,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Desenvolvimento Tech",
    date: "Mar 2024",
    content: "Implementação de soluções de automação e inteligência artificial.",
    category: "Technology",
    icon: Cpu,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Expansão E-commerce",
    date: "Abr 2024",
    content: "Desenvolvimento de estratégias para canais de e-commerce e vendas online.",
    category: "E-commerce",
    icon: Globe,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Otimização Performance",
    date: "Mai 2024",
    content: "Aperfeiçoamento de métricas e otimização de resultados para clientes.",
    category: "Performance",
    icon: TrendingUp,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 6,
    title: "Testes e Validação",
    date: "Jun 2024",
    content: "Testes de novas tecnologias e validação de soluções inovadoras.",
    category: "Innovation",
    icon: TestTube,
    relatedIds: [5, 7],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 7,
    title: "Escalabilidade",
    date: "Jul 2024",
    content: "Preparação para escala global e expansão de operações digitais.",
    category: "Scale",
    icon: Zap,
    relatedIds: [6],
    status: "pending" as const,
    energy: 20,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <RadialOrbitalTimeline timelineData={neurautomationTimeline} />
    </main>
  );
}