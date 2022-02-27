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
                        <h1>Hello Admin</h1>
                        {/* // <p>Welcome to your Admin Dashboard</p> */}
                       
                    </div>
                </div>


                <div className="main__cards">
                    

                    <div className="card">
                        <i className="fa fa-user-secret fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Admin</p>
                            <span className="font-bold text-title">28</span>
                        </div>
                    </div>
                    <div className="card">
                        
                        <i className="fa fa-chalkboard-teacher fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Mentor</p>
                            <span className="font-bold text-title">125</span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <i className="fa fa-user-graduate fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Mentee</p>
                            <span className="font-bold text-title">2175</span>
                        </div>
                    </div>

                   

                    <div className="card">
                        <i className="fa fa-envelope fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Notification</p>
                            <span className="font-bold text-title">10</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                   
                        <iframe src="https://fergussonedu.sharepoint.com/sites/MentoringSemesterI2020-2021/_layouts/15/Doc.aspx?sourcedoc={c4affcb6-be57-40dd-9162-9a2a93415042}&amp;action=embedview&amp;wdAr=1.4444444444444444" width="350px" height="266px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                </div>
                    

            </div>
        </main>
    )
}

export default Main;