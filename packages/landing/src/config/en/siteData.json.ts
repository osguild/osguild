import type { SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "OS Guild",
	// Your website's title and description (meta fields)
	title: "Building software together",
	description:
		"Get real-world software engineering experience through open source software development.",

	// Your information for blog post purposes
	author: {
		name: "Brandon Ly",
		email: "brandon@osguild.io",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.png",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
