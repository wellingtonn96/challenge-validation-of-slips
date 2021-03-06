import { Request, Response } from "express";
import ValidateBarCodeService from "../services/ValidateBarCodeService";

class ValidationBarCodeController {
  public create(request: Request, response: Response) {
    try {
      const { barCode } = request.params;

      const validateBarCode = new ValidateBarCodeService();

      const validation = validateBarCode.execute(barCode);

      return response.json(validation);
    } catch (err) {
      return response.status(400).json({ erro: err.message });
    }
  }
}

export default ValidationBarCodeController;
