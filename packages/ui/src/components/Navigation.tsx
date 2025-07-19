import { Box, Grid } from "@radix-ui/themes";

export function Navigation() {
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<Grid
				columns={{ initial: "1", md: "2" }}
				gap="6"
				width="auto"
				className="relative flex h-16 items-center justify-between"
			>
				<Box height="64px">
					<h1>Box 1</h1>
				</Box>
				<Box height="64px">
					<h1>Box 2</h1>
				</Box>
			</Grid>
		</div>
	);
}
