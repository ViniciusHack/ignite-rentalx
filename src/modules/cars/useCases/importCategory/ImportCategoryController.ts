import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.importCategoryUseCase.execute(file!);
    return response.send();
  }
}

export { ImportCategoryController };
