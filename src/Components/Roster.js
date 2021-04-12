// const formatGPA = (gpa) => {
//     return gpa.toFixed(2)
// } 

const Roster = ({enrolled, average}) => {
    return(
        <div>
            <h2>Enrolled</h2>
            <ul className="EnrolledList">
                {enrolled.map(enrollment => <li> {enrollment.name}: {enrollment.GPA.toFixed(2)}</li>
                )}
            </ul>
         
            <h3>Total Student Count: {enrolled.length}</h3>
            <h3>Average GPA: {average.toFixed(2)}</h3>
        </div>
    )
}

export default Roster; 