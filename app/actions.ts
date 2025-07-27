"use server"

import { v0 } from "v0-sdk"

export async function generateApp(prevState: any, formData: FormData) {
  const prompt = (formData.get("prompt") as string) || ""

  if (!prompt) {
    return { success: false, message: "Prompt cannot be empty." }
  }

  // IMPORTANT: Check if the V0_API_KEY is set before attempting to use the SDK.
  // This helps provide a clearer error message if the environment variable is missing.
  if (!process.env.V0_API_KEY) {
    console.error("V0_API_KEY is not set in environment variables.")
    return { success: false, message: "API Key missing. Please configure V0_API_KEY in your environment variables." }
  }

  try {
    const chat = await v0.chats.create({
      message: prompt,
    })

    const files = chat.files?.map((file) => ({ name: file.name, content: file.content }))
    const demoUrl = chat.demo

    return {
      success: true,
      message: "App generation successful!",
      files,
      demoUrl,
    }
  } catch (error) {
    console.error("Error generating app:", error)
    // Provide a more user-friendly message for API errors
    return { success: false, message: "Failed to generate app. Please check your V0_API_KEY and try again." }
  }
}
