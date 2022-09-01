import { Request, Response } from 'express'
import fs from 'fs';

import adccApi from '@/services/adcc';

interface IAdccResponse {
  message: string;
  data: object
}

const pay = async (request: Request, response: Response) => {
  let { telefone } = request.query;

  try {
    telefone = `${telefone}`.replace(" ", "+")

    const { data }: { data: IAdccResponse } = await adccApi.post('/input/message', {
      "header": {
        "tenant": "x",
        "objectModelName": "TIM"
      },
      "data": {
        "evento": "201",
        "data": "2022-08-30T09:00:00-03:00",
        "nome": "Heytor",
        "cpf": "",
        telefone,
        "pais": "Brasil",
        "plano": "TIM Controle 5GB",
        "servico": "Internet",
        "velocidade": "9GB",
        "fidelidade": "12 meses",
        "valorComFidelidade": "49,90",
        "valorSemFidelidade": "59,90",
        "cartId": "123456"
      }
    })

    return response.status(200).json(data);
  } catch (error: any) {
    return response.status(500).json({ message: error.message });
  }
};

const payForm = (request: Request, response: Response) => {
  fs.readFile('pay-form.html', function (err, html) {
    if (err) {
      throw err;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  });
}

export default { pay, payForm }