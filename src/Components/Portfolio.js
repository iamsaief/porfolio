import React, { Component } from "react";

class Portfolio extends Component {
	render() {
		if (this.props.data) {
			var projects = this.props.data.projects.map(function(projects) {
				var projectImage = "images/portfolio/" + projects.image;

				return (
					<div key={projects.title} className="columns portfolio-item">
						<div className="item-wrap">
							<div>
								<img alt={projects.title} src={projectImage} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>{projects.title}</h5>
										<p>{projects.category}</p>
										<span className="links">
											<a href={projects.url}>live demo</a>
											I&nbsp;
											<a href={projects.repository}>git repo</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			});
		}

		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out Some of My Works.</h1>

						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							{projects}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
