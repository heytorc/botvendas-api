import { Request, Response } from 'express'

interface IValidateFiscalNumberParams {
  fiscalnumber: any
}

const validate = (request: Request<IValidateFiscalNumberParams>, response: Response) => {
  let { fiscalnumber } = request.params;

  if (typeof fiscalnumber !== 'string') return response.status(500).json({ isValid: false });

  fiscalnumber = fiscalnumber.replace(/[^\d]+/g, '')

  if (fiscalnumber.length !== 11 || !!fiscalnumber.match(/(\d)\1{10}/)) return response.status(500).json({ isValid: false });

  fiscalnumber = fiscalnumber.split('').map((el: string) => +el)

  const rest = (count: number) => (fiscalnumber.slice(0, count-12)
      .reduce( (soma: number, el: number, index: number) => (soma + el * (count-index)), 0 )*10) % 11 % 10

  return response.status(200).json({ isValid: rest(10) === fiscalnumber[9] && rest(11) === fiscalnumber[10] });
};

export default { validate }