import BowTiedFocus from "@images/testimonials/BowTiedFocus.jpg";
import Aniket from "@images/testimonials/aniket_p.jpg";
import Connor from "@images/testimonials/connor.webp";
import Damiano from "@images/testimonials/damiano.jpg";
import David from "@images/testimonials/david-g-davedev.png";
import TravisB from "@images/testimonials/travis-b.png";

import type { TestimonialItem } from "../types/configDataTypes";

export const testimonialData: TestimonialItem[] = [
	{
		avatar: Connor,
		name: "Connor D",
		title: "Developer",
		testimonial: `Cosmic Themes offers more than stunning templates built on a rock-solid Astro
     foundation—it fosters a vibrant community. With value-added perks like Discord and GitHub 
     invites, Cosmic Themes is a no-brainer for anyone launching a new Astro project.
      `,
	},

	{
		avatar: Damiano,
		name: "Damiano L",
		title: "C++ Developer",
		testimonial: `Cosmic Themes provides some of the best Astro themes out there. They are well designed, easy to customize and, 
    most importantly, the team is very responsive concerning support and feature requests. Using their themes allows you to focus on content creation.
      `,
	},
	{
		avatar: David,
		name: "David G",
		title: "Web Developer",
		testimonial: `It's the cleanest template standup experience ever! I've never used Astro, but looking at the demo, code, it
    should be fairly simple pickup on top of my existing React and NextJS experience.
      `,
	},
	{
		avatar: TravisB,
		name: "Travis B",
		title: "Developer",
		testimonial: `Cosmic themes are for webdevs and marketers who don't want to waste time reinventing the wheel. 
    Their themes have great examples of some of the creative things you can accomplish with Astro. 
      `,
	},
	{
		avatar: Aniket,
		name: "Aniket P",
		title: "Data Scientist",
		testimonial: `I'm not a front-end dev, but I wanted to rebuild my personal site with Astro. If you're in the same shoes,
      I can't recommend enough Cosmic Themes.
      `,
	},

	{
		avatar: BowTiedFocus,
		name: "BowTiedFocus",
		title: "Freelance Web Developer",
		testimonial: `The theme is ridiculously well put together and documented.
      I learned a ton about Astro engineering by studying it, and I've already used some of the components
      for my web design clients. Plus, it shaved hours off my dev time.
      `,
	},
];

export default testimonialData;
