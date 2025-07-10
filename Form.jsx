import JobCard from './JobCard';
import './Form.css'
import { useState, useEffect } from 'react';


function Form({setJob,clearall,setFilterStatus, jobToEdit , setSortType})
{
    const [comp,setComp]=useState("");
    const [rol,setRol]=useState("");
    const [status,setStatus]=useState("Applied");
    const [dat,setDat]=useState("");
    const [note,setNote]=useState("");

    
useEffect(() => {
  if (jobToEdit) {
    setComp(jobToEdit.comp);
    setRol(jobToEdit.rol);
    setStatus(jobToEdit.status);
    setDat(jobToEdit.dat);
    setNote(jobToEdit.note);
  }
}, [jobToEdit]);

    function submitfunction(e)
{
    e.preventDefault();
     if (!comp.trim() || !rol.trim() || !dat.trim()) {
        alert("Please fill in all required fields: Company, Role, and Date.");
    return;
  }
    let job={
        comp,
        rol,
        status,
        dat,
        note
    };
    setJob(job);
    setComp("");
    setRol("");
    setStatus("Applied");
    setDat("");
    setNote("");

}
    return(
        <div id="formm">
        <h1 id="heading">🎯Job Application Tracker</h1>
        <form onSubmit={submitfunction} id="jobform">
            <input type="text" value={comp} class="formdesign"  onChange={(evt)=>setComp(evt.target.value)}   placeholder="Company"/>
            <input type="text" value={rol} class="formdesign" onChange={(evt)=>setRol(evt.target.value)} placeholder="Role"/>
            <select value={status} class="formdesign" onChange={(evt)=>setStatus(evt.target.value)}>
                <option>Applied</option>
                <option>Offered</option>
                <option >Interviewing</option>
                <option>Rejected</option>
            </select>
            <input type="date"  class="formdesign" value={dat} onChange={(evt)=>setDat(evt.target.value)} />
            <textarea  class="formdesign" value={note} placeholder="Notes" onChange={(evt)=>setNote(evt.target.value)}></textarea>
            <button type="submit" className="formdesign" id="submit">
  {jobToEdit ? "Update Job" : "Add Job"}
</button>
        </form>
        <div id="feature">
        <select id="filterone"onChange={(evt)=>setFilterStatus(evt.target.value)}>
            <option>All</option>
            <option>Applied</option>
            <option>Offered</option>
            <option >Interviewing</option>
            <option>Rejected</option>
        </select>
        <select id="sortone" onChange={(e) => setSortType(e.target.value)}>
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
        </select>
        <button  id="clear" onClick={clearall}>Clear All</button>
        </div>
        </div>
    )
}
export default Form;