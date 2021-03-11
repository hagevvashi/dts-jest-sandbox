import { add } from "./index";

// @dts-jest:pass
add(1, 2);

// @ts-expect-error
add("1", "2");
