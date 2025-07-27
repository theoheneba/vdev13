import { Button } from "@/components/ui/button"
import { Diamond } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
      <div className="flex items-center space-x-2">
        <Diamond className="h-6 w-6 text-vibe-orange" />
        <span className="text-xl font-semibold text-white">Vibe</span>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:bg-vibe-button-bg">
          Sign up
        </Button>
        <Button className="bg-vibe-orange text-white hover:bg-vibe-orange/90">Sign in</Button>
      </div>
    </header>
  )
}
