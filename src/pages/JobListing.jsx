import { getJobs } from "@/api/apiJobs";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { BarLoader, SyncLoader } from "react-spinners";
import JobCard from "@/components/JobCard";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLoction] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser();

  const {
    fn: fnJobs,
    data: jobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, location, company_id, searchQuery]);

  if (!isLoaded) {
    return (
      <div className="w-full flex justify-center items-center">
        <SyncLoader className="m-auto" width={"100%"} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Jobs
      </h1>
      {/* Add Filter here */}

      {loadingJobs && (
        <BarLoader className="mt-4 mx-auto" width={"100%"} color="#36d7b7" />
      )}

      {loadingJobs === false && (
        <div className="max-sm:px-2 grid mt-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs?.length ? (
            jobs.map((job) => {
              return (
                <JobCard key={job.id} job={job} SavedInit={job?.length > 0} />
              );
            })
          ) : (
            <div>No Jobs Found </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
