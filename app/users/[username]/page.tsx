 "use client";
 import AppLineChart from "@/components/AppLineChart";

import CardList from "@/components/CardList"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col gap-8 xl:flex-row">
        {/* LEFT */}
        <div className="w-full space-y-6 xl:w-1/3">
          {/* USER BADGES CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="mt-4 flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full border border-blue-500/50 bg-blue-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full border border-orange-500/50 bg-orange-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is popular in the community
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full border border-yellow-500/50 bg-yellow-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded by their contributions
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full border border-green-500/50 bg-green-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin user have access to all features and can manage users
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* INFORMATION CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="mt-4 space-y-4">
              <div className="mb-8 flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>Manuel Patrone</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>manuel.patrone@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Joined on 2025.01.01
            </p>
          </div>

          {/* CARD LIST CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full space-y-6 xl:w-2/3">
          {/* USER CARD CONTAINER */}
          <div className="space-y-2 rounded-lg bg-primary-foreground p-4">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/mpatrone"
                  alt="Manuel Patrone"
                />
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <h1 className="text-lg font-semibold">Manuel Patrone</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo minima vero accusantium iste laudantium repellendus
              natus dolor sapiente quibusdam assumenda. Tempora magni
              exercitationem unde fuga nobis facere debitis neque suscipit.
              Neque fugit suscipit aliquam cumque earum qui aut rerum blanditiis
              mollitia. Tenetur quis provident soluta consectetur pariatur
              eligendi error nihil odio. Mollitia, expedita possimus. Hic esse
              non voluptate eveniet accusantium!
            </p>
          </div>

          {/* CHART CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">
            <h1 className="text-lg font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
