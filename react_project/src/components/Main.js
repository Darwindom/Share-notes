function Main() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="text">
                    <ul className="row button-list">
                        <li className="col-6"><a href="/create" type=" button" className="btn btn-primary">Create a note</a></li>
                        <li className="col-6"><a href="/note" type=" button" className="btn btn-primary">Watch a note</a></li>
                    </ul>
                </div>
                
                <div className="text-bot">
                    <p><b>ShareNotes</b> – Service for sharing notes. Create a note, send a link to the note and your friend can view it.
                    <br />
                    After viewing, the note will be deleted ( or after 15 minutes from the moment it was created ).</p>
                    <p>How to create a note? </p>
                    <ul>
                        <li>Follow the link</li>
                        <li>Enter the Text and press "Create"</li>
                        <li>Send the generated address to a friend</li>
                    </ul>
                    <p>How to read a note? Go to the provided URL, or enter the address here.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;