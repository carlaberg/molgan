import { MolganError } from "./MolganError";
export declare class Result<T> {
    isSuccess: boolean;
    isFailure: boolean;
    error: MolganError | undefined;
    private _value;
    private constructor();
    getValue(): T | undefined;
    static ok<U>(value?: U): Result<U>;
    static fail<U>(error: string): Result<U>;
}
