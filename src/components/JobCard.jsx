import { useUser } from "@clerk/clerk-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { saveJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";

const JobCard = ({
  job,
  isMyJob = false,
  SavedInit = false,
  onJobSaved = () => {},
}) => {
  
  const { user } = useUser();
  const [saved, setSaved] = useState(SavedInit);

  const {
    fn: fnSaveJob,
    data: savedJob,
    loading: loadingSaveJob,
  } = useFetch(saveJobs,{ alreadySaved: saved });

  const handleSaveJob = async () => {
    await fnSaveJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobSaved();
  };

  useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

  
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {job.title}
          {isMyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
            />
          )}
        </CardTitle>
        <CardContent className="flex flex-col gap-4 flex-1">
          <div className="flex justify-between">
            {job.company && <img src={job.company.logo_url} className="h-6" />}
            <div className="flex flex-row items-center gap-2">
              <MapPinIcon size={15} />
              {job.location}
            </div>
          </div>
          <hr />
          {job.description.substring(0, job.description.indexOf("."))}
        </CardContent>
        <CardFooter>
          <Link to={`/job/${job.id}`} className="flex-1">
            <Button variant="secondary" className="w-full">
              More Details
            </Button>
          </Link>
          {!isMyJob && (
            <button
              
              className="w-15"
              onClick={handleSaveJob}
              disabled={loadingSaveJob}
            >
              {saved ? (
                <Heart className="mx-2" size={20} stroke="red" fill="red" />
              ) : (
                <Heart className="mx-2" size={20} stroke="red" />
              )}
            </button>
          )}
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default JobCard;
