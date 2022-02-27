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
                        <h1>Hello Mentor</h1>
                        {/* // <p>Welcome to your Admin Dashboard</p> */}
                       
                    </div>
                </div>


                <div className="main__cards">
                    
                    <div className="card">
                        
                        <i className="fa fa-users fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Teams</p>
                            <span className="font-bold text-title">125</span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <i className="fa fa-user-graduate fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Mentees</p>
                            <span className="font-bold text-title">2175</span>
                        </div>
                    </div>

                    {/* <div className="card">
                        <i className="fa fa-user-secret fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Admin</p>
                            <span className="font-bold text-title">28</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-envelope fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Notification</p>
                            <span className="font-bold text-title">10</span>
                        </div>
                    </div> */}

                </div>

                <div className="charts">
                   
                <iframe src="https://fergussonedu-my.sharepoint.com/personal/ganesh_jadhav172_deccansociety_org/_layouts/15/Doc.aspx?sourcedoc={01a2f906-9495-423c-8502-f523c6fbcd1d}&amp;action=embedview&amp;wdAr=1.3333333333333333" width="610px" height="481px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                </div>
                    

            </div>
        </main>
    )
}

export default Main;