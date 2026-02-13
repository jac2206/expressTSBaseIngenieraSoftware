export class GenericController {
  constructor() {}

  getGeneric = async (_req: any, res: any) => {
    res.status(200).json("status");
  };
}
