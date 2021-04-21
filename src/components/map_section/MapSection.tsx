import React from "react";
import SVGIcon1 from "./assets/icon_01.svg";
import SVGIcon2 from "./assets/icon_02.svg";
import SVGIcon3 from "./assets/icon_03.svg";
import Map from "../map/Map";
import "./MapSection.scss";

function MapSection(): JSX.Element {
	return (
		<section id="MapSection">
			<h2 className="MapSection--heading">Plan Your Visit</h2>
			<h3 className="MapSection--heading">In-Person Service</h3>
			<p className="MapSection--text">
				Sundays at 4:30 PM at Agape, Str. Constituţiei 4, Chișinău, Moldova
			</p>
			<div className="MapSection--icons">
				<div className="MapSection--icon">
					<figure className="MapSection--icon--image">
						<img src={SVGIcon1} alt="Illustration" />
					</figure>
					<p className="MapSection--icon--description">Nursery Available</p>
				</div>
				<div className="MapSection--icon">
					<figure className="MapSection--icon--image">
						<img src={SVGIcon2} alt="Illustration" />
					</figure>
					<p className="MapSection--icon--description">Kids Program</p>
				</div>
				<div className="MapSection--icon">
					<figure className="MapSection--icon--image">
						<img src={SVGIcon3} alt="Illustration" />
					</figure>
					<p className="MapSection--icon--description">Russian Translation</p>
				</div>
			</div>
			<div className="MapSection--map">
				<Map />
			</div>
		</section>
	)
}

export default MapSection;