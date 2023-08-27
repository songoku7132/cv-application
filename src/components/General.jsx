function General({general}) {
    if (general === null) {
        return <div>
            <p>General Info</p>
        </div>
    }
    
    return (
        <div>
            <p>General Info</p>
            <p>Name: {general.name}</p>
            <p>Email: {general.email}</p>
            <p>Phone: {general.phone}</p>
        </div>
    )
}

export default General;