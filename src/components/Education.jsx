function Education({education}) {
    if (education === null) {
        return <div>
            <p>Education</p>
        </div>
    }
    
    return (
        <div>
            <p>Education</p>
            <p>School: {education.school}</p>
            <p>Degree: {education.degree}</p>
            <p>Date: {education.date}</p>
        </div>
    )
}

export default Education;