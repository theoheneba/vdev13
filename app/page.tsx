import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen dotted-background">
      <Header />
      <HeroSection />
    </div>
  )
}
