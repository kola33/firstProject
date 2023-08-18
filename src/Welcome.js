import React from "react";
import {CiPhone} from 'react-icons/ci';
import {BiSolidUser} from 'react-icons/bi';
import {IoMdPhonePortrait} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {PiUserSquareBold} from 'react-icons/pi';
import {FcAlarmClock} from 'react-icons/fc';
import {GrMail} from 'react-icons/gr';
import {FcCallback} from 'react-icons/fc';
import {BiLogoFacebook} from 'react-icons/bi';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {RiWhatsappFill} from 'react-icons/ri';
import {FaTiktok} from 'react-icons/fa';
 
const Welcome = ()=>{
    return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Group Dreams</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">BUILD A DREAM <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">INSPIRE</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">COMMUNITY</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">MY DREAMS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">LOGIN</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">SIGNUP</a>
                </li>
                </ul>
                </div>
                </nav>

                <div className="container-fluid" >
                        <h3 className="dell" style={{"color":"blue","margin":"20px"}}>Contact lender</h3>
                            <div className="wish row" style={{"margin":"20px"}}>
                                <div className="col-md-5" style={{"background": "linear-gradient(#9f48f2, #8623e5)","border-radius":"10px"}}>
                                    <center><CiPhone className="img" style={{"color":"white"}}/></center>
                                </div>
                                <div className="col-md-7" style={{"background-color":"white"}}>
                                    <h4>Lenders Details</h4>
                                    <BiSolidUser className="icons1"/><label className="user1">Name:</label><br/>
                                    <IoMdPhonePortrait className="icons2"/><label className="user1">Phone Number:</label><br/>
                                    <MdEmail className="icons3"/><label className="user1">Email:</label><br/>
                                    <PiUserSquareBold className="icons4 "/><label className="user1">Unique Id:</label><br/>
                                </div>
                             </div>
                    <div className="dell1 containerfluid" style={{"background": "linear-gradient(#9f48f2, #8623e5)","margin":"20px","color":"white","border-radius":"10px"}}>
                        <div className="hp col-md-12"><br/>
                        <h4>Pre-approval certificate</h4>
                        <h4>#E394275</h4><br/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                <h3 style={{"color":"blue","margin":"20px"}}>Contact Broker / Lender</h3>
                    <div className="my row" style={{"margin":"15px"}}>
                    <div class="col-sm-4"> 
                            <div class="card-body" style={{"border-radius":"10px","background-color":"pink"}}>
                                <center><FcAlarmClock className="clock" style={{"height":"150px","width":"150px","margin":"10px"}}/></center>
                                <center><h5 style={{"padding":"15px"}}>SCHEDULED CALL</h5></center>
                            </div>
                    </div>

                    <div class="col-sm-4"> 
                            <div class="card-body" style={{"background-color":"#aeffbd","border-radius":"10px"}}>
                                <center><GrMail className="clock1" style={{"height":"150px","width":"150px","margin":"13px"}}/></center>
                                <center><h5 style={{"padding":"15px"}}>EMAIL</h5></center>
                            </div>
                    </div>

                    <div class="col-sm-4"  > 
                            <div class="card-body" style={{"border-radius":"10px","background-color":"#c9b4d1"}}>
                                <center><FcCallback className="clock2" style={{"height":"150px","width":"150px","margin":"13px"}}/></center>
                                <center><h5 style={{"padding":"15px"}}>CALL</h5></center>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="rare container-fluid">
                    <div className="row " style={{"background-color":"#5609ef"}}>
                        <div className="col-md-3">
                            <h3 style={{"color":"white","margin":"20px","padding":"15px"}}>COMPANY</h3>
                                <p className="para">About us</p>
                                <p className="para">Careers</p>
                                <p className="para">Partners</p>
                                <p className="para">Contact</p>
                        </div>

                        <div className="col-md-3">
                        <h3 style={{"color":"white","margin":"20px","padding":"15px"}}>RESOURCES</h3>
                                <p className="para">Resources Center</p>
                                <p className="para">Integration</p>
                                <p className="para">Partners</p>
                                <p className="para">Glossary</p>
                        </div>

                        <div className="col-md-3">
                            <p className="graph">Sign Up for Our Monthly Newsletter</p>
                            < hr className="line"/>
                            <div className="d-flex justify-content-between">
                            <p style={{"color":"white"}}>Email</p>
                            <button className="btn btn-primary rounded-pill">Subscribe</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src="apple.png.png" style={{"height":"90px"}}/>
                                <img src="google.png.png"  style={{"height":"140px"}}/>
                            </div>
                            <div className="icons d-flex">
                                <BiLogoFacebook style={{"color":"white","height":"40px","width":"40px","margin-left":"10px"}}/>
                                <BsTwitter style={{"color":"white","height":"40px","width":"40px","margin-left":"10px"}}/>
                                <AiFillInstagram style={{"color":"white","height":"40px","width":"40px","margin-left":"10px"}}/>
                                <RiWhatsappFill style={{"color":"white","height":"40px","width":"40px","margin-left":"10px"}} />
                                <FaTiktok style={{"color":"white","height":"40px","width":"40px","margin-left":"10px"}}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p className="last" style={{"color":"white"}}>License Agreement</p>
                        </div>
                        <div className="col-md-3">
                            <p className="last" style={{"color":"white"}}>Privacy Polilcy</p>
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                            <p className="last">Copyright @ 2022 Bluelakes,Inc.All rights reserved</p>
                        </div>
                    </div>
                </div> 
                                   
            </div>
    );
}

export default Welcome;