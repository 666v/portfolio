
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Footer() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@Copyright 2024</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://files.edgestore.dev/0djuus218gslaxtv/publicFiles/_public/4154da5d-2eb1-4091-9171-e696f430040c.jpg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
               created and maintained by @ALI DARWESH
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
