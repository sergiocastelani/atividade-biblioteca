import { v4 as uuidv4 } from 'uuid';

export type BookClass = 'Épico' | 'Lírico' | 'Dramático';

export interface IBook {
  id: string,
  title: string,
  author: string,
  publishYear: Number,
  registrationDate: Date,
  class: BookClass,
  description: string
}

export class Book implements IBook {
  id = uuidv4();
  title = "";
  author = "";
  publishYear = 1900;
  registrationDate = new Date();
  class: BookClass = "Épico";
  description = "";
}

export function initialBooks() : IBook[] {
  return [
    {
      id: '2ec61d60-67e5-40c1-b8df-43053b05b51f',
      title: 'A Rainha Vermelha',
      author: 'Victoria Aveyard',
      publishYear:2010,
      registrationDate: new Date('10/10/2010'),
      class: 'Épico',
      description: 'Em A Rainha Vermelha o mundo é dividido em dois grupos: as pessoas com sangue vermelho e com sangue prateado, sendo este último formado por portadores de poderes sobrenaturais, que são considerados quase deuses.'
    },
    {
      id: '30b94032-02ca-4b5f-b9df-0c2a9fa3b54b',
      title: 'As Crônicas de Nárnia',
      author: 'C. S. Lewis',
      publishYear: 1950,
      registrationDate: new Date('10/10/2010'),
      class: 'Épico',
      description: 'A série se tornou um clássico da alta fantasia e é considerado um livro perfeito para ler em qualquer idade. Elementos de fantasia e realidade se misturam para esta excelente saga de descobertas, aventuras e redenção.'
    },
    {
      id: 'c90e4482-3857-4d6c-be30-a57d1753ff7f',
      title: 'Duna',
      author: 'Frank Herbert',
      publishYear: 1965,
      registrationDate: new Date('10/10/2010'),
      class: 'Épico',
      description: 'Antes mesmo de Star Wars existir, Frank Herbert criou um universo de batalhas intergalácticas misturando temas como religião, filosofia, ecologia, psicologia e economia.'
    },
    {
      id: '4c8e2624-132c-4251-a670-a13c671d647b',
      title: 'O Lar da Srta. Peregrine para Crianças Peculiares',
      author: 'Ransom Riggs',
      publishYear: 2010,
      registrationDate: new Date('10/10/2010'),
      class: 'Épico',
      description: 'Na história, acompanhamos Jacob Portman numa misteriosa ilha, onde ele descobre ser o lar de um grupo de órfãos com poderes bastante... peculiares. Mas, além dos novos amigos, a ilha também esconde um inimigo bastante bizarro e assustador!'
    },
    {
      id: '7aefe65d-fbf9-4366-abc0-d94cb30644aa',
      title: 'Trono de Vidro',
      author: 'Sarah J. Maas',
      publishYear: 2010,
      registrationDate: new Date('10/10/2010'),
      class: 'Épico',
      description: 'Ao longo desta série, acompanhamos Celaena, uma jovem que está presa na sombria mina de sal de Endovier. Quando está quase sem esperanças de um dia voltar a ser livre, ela recebe uma proposta que poderá mudar drasticamente a sua vida.'
    },
  ];
}