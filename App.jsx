import './App.css';
import Form from './Form.jsx';
import JobCard from './JobCard.jsx';
import { useEffect, useState } from 'react';

export default function App() {
  //done for storage purpose
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('jobs');
    return saved ? JSON.parse(saved) : [];
  });

  const [sortType, setSortType] = useState("Newest");
  const [filterStatus, setFilterStatus] = useState("All");
  const [jobToEdit, setJobToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (newJob) => {
    if (jobToEdit) {
      setJobs(jobs.map((job) =>
        job.id === jobToEdit.id ? { ...newJob, id: jobToEdit.id } : job
      ));
      setJobToEdit(null);
    } else {
      const jobWithId = { ...newJob, id: Date.now() };
      setJobs([...jobs, jobWithId]);
    }
  };

  const editJob = (id) => {
    const job = jobs.find((job) => job.id === id);
    if (job) {
      setJobToEdit(job);
    }
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const clearalljob = () => {
    setJobs([]);
  };

  const filteredJobs = filterStatus === "All"
    ? jobs
    : jobs.filter((job) => job.status === filterStatus);

    const sortedJobs = [...filteredJobs].sort((a, b) => {
  if (sortType === "Newest") {
    return new Date(b.dat) - new Date(a.dat); // latest first
  } else if (sortType === "Oldest") {
    return new Date(a.dat) - new Date(b.dat); // oldest first
  }
  return 0;
});

  return (
    <>
      <Form
        setJob={addJob}
        clearall={clearalljob}
        setFilterStatus={setFilterStatus}
        jobToEdit={jobToEdit}
        setSortType={setSortType}
      />
      <div>
          {sortedJobs.map((job) => (
            <JobCard
              job={job}
              key={job.id}
              deleteJob={deleteJob}
              editJob={editJob}
            />
          ))}
      </div>
    </>
  );
}

