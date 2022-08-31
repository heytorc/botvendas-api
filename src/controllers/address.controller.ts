import { Request, Response } from 'express'
import ViaCepApi from '@/services/viacep';

interface IGetAddressByPostalCodeParams {
  postalcode: string
}

interface IViaCepResponse {
  error?: boolean;
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

const getAddressByPostalCode = async (request: Request<IGetAddressByPostalCodeParams>, response: Response) => {
  let { postalcode } = request.params;

  try {
    const { data } = await ViaCepApi.get<IViaCepResponse>(`/${postalcode}/json/`);
    
    return (data.error) ? response.status(500).json(data) : response.status(200).json(data);
  } catch (error) {
    return response.status(500).json(error);
  }
};

export default { getAddressByPostalCode }