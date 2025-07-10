import './JobCard.css'
export default function JobCard({job,deleteJob,editJob})
{

    return (
        <>
        <div id="card">
            <div id="left">
            <p id="role">{job.rol}</p>
            <p  className="detail" id="company"><b>Company:</b> {job.comp}</p>
            <p className="detail" id="date"><b>Date:</b> {job.dat}</p>
            <p className="detail" id="notes"><b>Notes:</b> {job.note}</p>
            </div>
            <div id="right">
                <div id="offer" style={{color:"white", backgroundColor:  job.status === "Applied"
        ? "#2196f3" 
        : job.status === "Interviewing"
        ? "#ff9800"   
        : job.status === "Offered"
        ? "#4caf50" 
        : job.status === "Rejected"
        ? "#f44336" 
        : "gray"  }}>{job.status}</div>
                <button id="edit" onClick={()=>editJob(job.id)}>Edit</button>
                <button id="delete" onClick={() => deleteJob(job.id)}>Delete</button>

            </div>
        </div>
        </>
    )
}