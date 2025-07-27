"use client"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowUp, Film, LayoutDashboard, ClipboardList, Folder, Youtube, ShoppingCart, Home, Music } from "lucide-react"
import { useActionState } from "react"
import { generateApp } from "@/app/actions"

export function HeroSection() {
  const [state, action, isPending] = useActionState(generateApp, null)

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 py-12 text-center md:px-6 lg:py-24">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build something with Vibe
        </h1>
        <p className="text-lg text-gray-300 md:text-xl">Create apps and websites by chatting with AI</p>
        <form action={action} className="relative w-full max-w-2xl mx-auto">
          <Textarea
            name="prompt" // Add name attribute for formData
            placeholder="What would you like to build?"
            className="min-h-[120px] w-full rounded-lg border border-vibe-input-border bg-vibe-input-bg p-4 text-white shadow-sm focus:border-vibe-orange focus:ring-vibe-orange resize-none pr-12"
            disabled={isPending} // Disable while pending
          />
          <div className="absolute bottom-4 left-4 text-sm text-gray-400">{"⌘ Enter"} to submit</div>
          <Button
            type="submit" // Change type to submit
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 rounded-full bg-vibe-button-bg text-white hover:bg-vibe-button-bg/80"
            disabled={isPending} // Disable while pending
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Submit</span>
          </Button>
        </form>
        {state && (
          <div className={`mt-4 text-center ${state.success ? "text-green-400" : "text-red-400"}`}>
            {state.message}
            {state.demoUrl && (
              <p>
                Demo URL:{" "}
                <a href={state.demoUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  {state.demoUrl}
                </a>
              </p>
            )}
            {state.files && state.files.length > 0 && (
              <div className="mt-2 text-left text-sm">
                <p>Generated Files:</p>
                <ul className="list-disc list-inside">
                  {state.files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 max-w-4xl mx-auto">
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <Film className="h-5 w-5" />
            <span>Build a Netflix clone</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <LayoutDashboard className="h-5 w-5" />
            <span>Build an admin dashboard</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <ClipboardList className="h-5 w-5" />
            <span>Build a kanban board</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <Folder className="h-5 w-5" />
            <span>Build a file manager</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <Youtube className="h-5 w-5" />
            <span>Build a YouTube clone</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <ShoppingCart className="h-5 w-5" />
            <span>Build a store page</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <Home className="h-5 w-5" />
            <span>Build an Airbnb clone</span>
          </Button>
          <Button className="flex items-center justify-center space-x-2 rounded-lg bg-vibe-button-bg px-4 py-2 text-white hover:bg-vibe-button-bg/80">
            <Music className="h-5 w-5" />
            <span>Build a Spotify clone</span>
          </Button>
        </div>
      </div>
    </main>
  )
}
