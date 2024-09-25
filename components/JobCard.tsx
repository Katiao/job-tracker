import { JobType } from "@/utils/types";
import { MapPin, Briefcase, CalendarDays, RadioTower } from "lucide-react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import JobInfo from "./JobInfo";
import DeleteJobButton from "./DeleteJobButton";

function JobCard({ job }: { job: JobType }) {
  const { id, position, company, mode, location, status, createdAt } = job;
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{position}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4 grid grid-cols-2 gap-4">
        <JobInfo icon={<Briefcase />} text={mode} />
        <JobInfo icon={<MapPin />} text={location} />
        <JobInfo icon={<CalendarDays />} text={date} />
        <Badge className="w-32  justify-center">
          <JobInfo
            icon={<RadioTower className="w-4 h-4" />}
            text={status}
          />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${id}`}>edit</Link>
        </Button>
        <DeleteJobButton id={id} />
      </CardFooter>
    </Card>
  );
}

export default JobCard;
