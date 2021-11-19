export type ErrType = "DEFAULT" | "FETCH" | "ARGUMENT" | "IF";
export interface Err {
	from: string;
	msg: string;
	type: ErrType;
}

export const err = (msg: string, from: string = "global", type: ErrType = "DEFAULT"): Err => {
	console.log(`
    ERROR     ${type}		${from}       ${msg}
  `);

	return { from, msg, type };
};

export type ErrHandlerFactory = (msg: string) => Err | ((msg: string, type: ErrType) => Err);
export const errHandler = (from: string): ErrHandlerFactory => {
	return (msg, type: ErrType = "DEFAULT") => {
		return err(msg, from, type);
	};
};
