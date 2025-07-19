/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import type { navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
	{
		text: "Apercu",
		link: "/apercu/",
	},

	// mega menu
	{
		text: "Pages",
		megaMenuColumns: [
			{
				title: "Landing Pages",
				items: [
					{
						text: "Landing 1",
						link: "/",
						icon: "tabler/star",
					},
					{
						text: "Landing 2",
						link: "/examples/landing2",
						icon: "tabler/diamonds",
					},
					{
						text: "Landing 3",
						link: "/examples/landing3",
						icon: "tabler/circle",
					},
				],
			},
			{
				title: "Blog",
				items: [
					{
						text: "Post Layout 1",
						link: "/blog/tsconfig-paths-setup",
						icon: "tabler/edit-circle",
					},
					{
						text: "Post Layout 2",
						link: "/examples/blog-post-2",
						icon: "tabler/edit-circle",
					},
					{
						text: "Blog Index",
						link: "/blog",
						icon: "tabler/pencil",
					},
					{
						text: "Category Page",
						link: "/categories/development",
						icon: "tabler/category",
					},
					{
						text: "Categories Index",
						link: "/categories",
						icon: "tabler/category",
					},
				],
			},
			{
				title: "Projects",
				items: [
					{
						text: "Project Layout",
						link: "/projects/virtual-event-platform",
						icon: "tabler/edit-circle",
					},
					{
						text: "Projects Index 1",
						link: "/projects",
						icon: "tabler/layout",
					},
					{
						text: "Projects Index 2",
						link: "/examples/projects-index-2",
						icon: "tabler/layout",
					},
				],
			},
			{
				title: "Other",
				items: [
					{
						text: "MDX Page Elements",
						link: "/elements",
						icon: "tabler/wand",
					},
					{
						text: "Contact",
						link: "/contact",
						icon: "tabler/address-book",
					},
					{
						text: "Legal Pages",
						link: "/privacy-policy",
						icon: "tabler/lock-square",
					},
					{
						text: "Page not found",
						link: "/not-a-link",
						icon: "tabler/error-404",
					},
					{
						text: "RSS Feed",
						link: "/rss.xml",
						newTab: true,
						icon: "tabler/rss",
					},
				],
			},
		],
	},
	{
		text: "Projects",
		link: "/projects/",
	},
	{
		text: "Blog",
		link: "/blog/",
	},
	{
		text: "Resume",
		link: "/resume/",
	},
	// uncomment below to add a dropdown example
	// {
	// 	text: "Dropdown",
	// 	dropdown: [
	// 		{
	// 			text: "Elements",
	// 			link: "/elements/",
	// 		},
	// 		{
	// 			text: "Password Reset",
	// 			link: "/password-reset/",
	// 		},
	// 	],
	// },
];

export default navConfig;
