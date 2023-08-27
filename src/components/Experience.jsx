function Experience({experience}) {
    if (experience === null) {
        return <div>
            <p>Experience</p>
        </div>
    }
    
    return (
        <div>
            <p>Experience</p>
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>DateW: {experience.dateW}</p>
        </div>
    )
}

export default Experience;