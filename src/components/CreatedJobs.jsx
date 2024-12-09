import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";
import JobCard from "./JobCard";

const CreatedJobs = () => {
  const { user } = useUser();
  const {
    loading: loadingCreatedJob,
    data: createdJob,
    fn: fnCreatedJob,
  } = useFetch(getMyJobs, { recruiter_id: user.id });

  useEffect(() => {
    fnCreatedJob();
  }, []);

  if (loadingCreatedJob) {
    return (
      <div className="w-full flex justify-center items-center">
        <SyncLoader className="m-auto" width={"100%"} color="#36d7b7" />
      </div>
    );
  }
  return (
    <div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:px-4">
        {createdJob?.length ? (
          createdJob.map((job) => {
            return (
              <JobCard
                key={job.id}
                job={job}
                onJobSaved={fnCreatedJob}
                isMyJob
              />
            );
          })
        ) : (
          <div>No Jobs Found 😢</div>
        )}
      </div>
    </div>
  );
};

export default CreatedJobs;
