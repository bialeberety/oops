import { err, errHandler } from "./error";

describe("Basic error objects", () => {
	test("Create error object", () => {
		expect(err("Something went wrong", "test-0", "FETCH")).toMatchObject({
			from: "test-0",
			msg: "Something went wrong",
			type: "FETCH",
		});
	});

	test("Create error object with missing argmuments", () => {
		expect(err("Something went wrong")).toMatchObject({
			from: "global",
			msg: "Something went wrong",
			type: "DEFAULT",
		});
	});

	test("Error handler", () => {
		const localErr = errHandler("test-1");

		expect(err("Something went wrong", "test-1", "DEFAULT")).toMatchObject(localErr("Something went wrong"));
	});
});
