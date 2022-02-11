import React, { Component, useEffect } from 'react';
import '../screen/home/css/howitworks.css';
import Upload from "../assets/img/illustrations/upload-10.png";
import takeoff from "../assets/img/illustrations/5.jpeg";
import medium from "../assets/img/illustrations/low.jpg";
import Press from "../assets/img/illustrations/process111.jpeg";
import download from "../assets/img/illustrations/imagedownload.png";
import simple from "../assets/img/illustrations/gantt-charts .png";
import off from "../assets/img/illustrations/process10.jpeg";
import create from "../assets/img/illustrations/plus1.jpeg";
import login_front from "../assets/img/logo.png";
import Schedule from "../assets/img/illustrations/ ConstructionSchedule11.jpeg";
import { ModalBoxPri } from './Modal/ModalBox';
import LoginForm from './LoginForm';
import "./css/howItWorks.css";

function Howitworks() {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

	return (
		<>
			<section id="timeline">
				<h1 className="howit-h1">How It Works</h1>
				<div class="demo-card-wrapper">
					<div class="demo-card demo-card--step1">
						<div class="head">
							<div class="number-box">
								<span>01</span>
							</div>
							<h4>Login into Prediction3D</h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>Simply login into the Prediction3D portal from www.prediction3d.com/login.</p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksFirstCardImage"
									src={login_front}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step2">
						<div class="head">
							<div class="number-box">
								<span>02</span>
							</div>
							<h4>Create New Project </h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>From the portal, create new project and set the project pre-requisites including
								labor and type of project i.e. commercial, residential, industrial etc..
							</p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksSecondCardImage"
									src={create}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step3 mb1">
						<div class="head">
							<div class="number-box">
								<span>03</span>
							</div>
							<h4>Upload REVIT or AutoCAD File </h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>Simply upload your 2D or 3D AutoDesk REVIT or AutoDesk AutoCAD construction plans.
								We support .rvt, .dwg, .ifc, .pdf(with full meta-data), and .cad file formats. </p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksThirdCardImage"
									src={Upload}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>

					<div class="demo-card demo-card--step4">
						<div class="head">
							<div class="number-box">
								<span>04</span>
							</div>
							<h4>Select Preset Values</h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>Select quality finishing for your project i.e. low, medium, high, very
								high grade items such as doors, windows, fixtures, etc… </p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksFourthCardImage"
									src={medium}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step5">
						<div class="head">
							<div class="number-box">
								<span>05</span>
							</div>
							<h4>Select Construction Schedule</h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>Select construction schedule as an option and start date for our A.I.
								algorithm process</p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksFifthCardImage"
									src={Schedule}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step6">
						<div class="head">
							<div class="number-box">
								<span>06</span>
							</div>
							<h4>Press Process Button</h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>Our A.I. algorithms will automatically analyze the construction plan and develop a construction schedule and take-off
								estimate automatically. No other input is required by the user </p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksSixthCardImage"
									src={Press}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step7">
						<div class="head">
							<div class="number-box">
								<span>07</span>
							</div>
							<h4>Select Construction Take-Off Estimate </h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>Select construction take-off estimate as an option and
								select the start date for our A.I. algorithm process</p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksSeventhCardImage"
									src={takeoff}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step8">
						<div class="head">
							<div class="number-box">
								<span>08</span>
							</div>
							<h4>Download Construction Schedule  Take-Off Estimate</h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>You simply download both files from a link in your portal.
								As easy as downloading any file from the internet</p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksEighthCardImage"
									src={download}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step9">
						<div class="head">
							<div class="number-box">
								<span>09</span>
							</div>
							<h4>Process Takes Only Minutes</h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>The entire process for our A.I. algorithm to determine your construction schedule
								and take-off estimate only takes minutes and is available via two downloaded file.
								More accurate than a human generated schedule and take-off estimate
							</p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksNinthCardImage"
									src={off}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
					<div class="demo-card demo-card--step10">
						<div class="head">
							<div class="number-box">
								<span>10</span>
							</div>
							<h4>Gantt Chart</h4>
						</div>
						<div class="body">
							<p className='howItWorksPara'>View the construction schedule in a dynamic gantt chart</p>
							<div className="image-how">
								{/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
								<img
									id="howItWorksTenthCardImage"
									src={simple}
									className="img-fluid building "
									alt="..."
									data-aos-delay="100"
								/>
								<ModalBoxPri
									btn="Login"
									content={<LoginForm />}
									modalClass="ml-auto sign-in-btn"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);

}
export default Howitworks;