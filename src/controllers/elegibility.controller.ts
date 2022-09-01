import { Request, Response } from 'express'

interface IElegibilityParams {
  cartId: string;
  cartTransaction: string;
}

const getElegibility = async (request: Request<any, any, any, IElegibilityParams>, response: Response) => {
  let { cartId, cartTransaction } = request.query;

  return (cartId === '123456') ? response.status(200).json({ elegible: true }) : response.status(500).json({ elegible: false });
};

export default { getElegibility }