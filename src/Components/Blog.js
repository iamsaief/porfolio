import React, { Component } from "react";

class Blog extends Component {
	render() {
		if (this.props.data) {
			var articles = this.props.data.articles.map((article) => {
				const articleThumb = `images/blog/${article.image}`;

				return (
					<div className="blog-item" key={Math.random()}>
						<a href={article.url}>
							<img alt={article.title} src={articleThumb} />
							<h4>{article.title}</h4>
						</a>
					</div>
				);
			});
		}

		return (
			<section id="blog">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out my latest articles</h1>

						<div id="blogs-wrapper" className="blogs-wrapper">
							{articles}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
