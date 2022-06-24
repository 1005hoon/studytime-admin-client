import "styled-components";

import { ColorsTypes } from "./app/GlobalStyle";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: ColorsTypes;
	}
}
