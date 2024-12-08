import { getSavedJobs } from "@/api/apiJobs";
import JobCard from "@/components/JobCard";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";

const SavedJobs = () => {
  const { isLoaded } = useUser();
  const {
    loading: loadingSavedJob,
    error: errorSavedJob,
    data: savedJob,
    fn: fnSavedJob,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) fnSavedJob();
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJob) {
    return (
      <div className="w-full flex justify-center items-center">
        <SyncLoader className="m-auto" width={"100%"} color="#36d7b7" />
      </div>
    );
  }
  return (
    <div className="max-sm:mx-4 p-4">
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8 ">
        Post a Job
      </h1>
      {loadingSavedJob === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:px-4">
          {savedJob?.length ? (
            savedJob.map((saved) => {
              return (
                <JobCard
                  key={saved.id}
                  job={saved?.job}
                  SavedInit={true}
                  onJobSaved={fnSavedJob}
                />
              );
            })
          ) : (
            <div>No Saved Jobs Found </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
