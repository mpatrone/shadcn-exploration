"use client"

import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { useState } from "react"
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const ToDoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">ToDo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button className="w-full">
                <CalendarIcon/>
                { date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar 
            mode="single"
            selected={date}
            onSelect={(date)=>{
              setDate(date)
              setOpen(false)
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="mt-4 max-h-100 overflow-y-auto">
        {/* LIST ITEM */}
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default ToDoList
