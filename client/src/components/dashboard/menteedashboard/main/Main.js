import "./Main.css";
// import hello from "../../assets/hello.jpg";
// import Chart from "../charts/Chart";

const Main = () => {
    return(
        <main>
            <div className="main__container">

            <div className="main__title">
                    {/* <img src={hello} alt="hello"/> */}
                    <div className="main__greeting">
                        <h1>Hello Mentee</h1>
                        {/* // <p>Welcome to your Admin Dashboard</p> */}
                       
                    </div>
                </div>
                <div className="ppt">
                   
                        <iframe src="https://fergussonedu.sharepoint.com/sites/MentoringSemesterI2020-2021/_layouts/15/Doc.aspx?sourcedoc={c4affcb6-be57-40dd-9162-9a2a93415042}&amp;action=embedview&amp;wdAr=1.4444444444444444" width="350px" height="266px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                </div>
                    

            </div>
        </main>
    )
}

export default Main;