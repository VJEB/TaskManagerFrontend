"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft } from 'lucide-react'
import { useActionState } from "react"
import Link from "next/link"
import { SubmitButton } from "./_components/SubmitButton"
import { create } from "./_actions/create"

export default function NewTask() {
    const [error, action] = useActionState(create, {});

  return (
    <div className="min-h-screen bg-background">
      <header className="flex h-16 items-center border-b px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <ChevronLeft className="h-5 w-5" />
          <span className="font-semibold">Back to Dashboard</span>
        </Link>
      </header>
      <main className="container mx-auto px-4 py-8">
        <form action={action}>
            <Card className="mx-auto max-w-2xl">
            <CardHeader>
                <CardTitle className="text-2xl">Create New Task</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                <Label htmlFor="title">Task Title</Label>
                <Input id="title" placeholder="Enter task title" />
                {error.title && <p className="text-destructive">{error.title}</p>}
                </div>
                <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    placeholder="Enter task description"
                    className="min-h-[100px]"
                />
                {error.description && <p className="text-destructive">{error.description}</p>}
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                <Button variant="outline">Cancel</Button>
                <SubmitButton />
                </div>
            </CardContent>
            </Card>
        </form>
      </main>
    </div>
  )
}