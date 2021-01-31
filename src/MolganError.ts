export class MolganError extends Error {
  name: string = 'MolganError';
  type: string = 'error'
  date: Date = new Date();

  constructor(...params: any) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MolganError)
    }
  }
}