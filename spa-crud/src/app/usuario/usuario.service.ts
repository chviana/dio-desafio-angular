import { Injectable } from '@angular/core';

import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  getUsuarios(): Usuario[] {
    return USUARIOS;
  }

  getUsuarioById(id: number): Usuario {
    return USUARIOS.find((usuario: Usuario) => usuario.id === id)!;
  }

  salvar(usuario: Usuario): void {
    const index = USUARIOS.findIndex(
      (iterator: Usuario) => iterator.id === usuario.id
    );

    if (index > -1) {
      USUARIOS[index] = usuario;
    } else {
      usuario.id = USUARIOS.length + 1;
      usuario.timeStamp = Date.now();
      USUARIOS.push(usuario);
    }
  }

  excluir(usuario: Usuario): void {
    const index = USUARIOS.findIndex(
      (iterator: Usuario) => iterator.id === usuario.id
    );
    USUARIOS.splice(index, 1);
  }
}

const USUARIOS = [
  {
    id: 1,
    nome: 'James Tiberius Kirk',
    email: 'kirk@gmail.com',
    avatar: 'assets/images/avatar/james.jpeg',
    github: 'https://github.com/kirk',
    linkedin: 'https://www.linkedin.com/in/kirk',
    timeStamp: Date.now(),
  },
  {
    id: 2,
    nome: 'Spock',
    email: 'spock@gmail.com',
    avatar: 'assets/images/avatar/spock.jpeg',
    github: 'https://github.com/spock',
    linkedin: 'https://www.linkedin.com/in/spock',
    timeStamp: Date.now(),
  },
  {
    id: 3,
    nome: 'Montgomery Scott',
    email: 'scott@gmail.com',
    avatar: 'assets/images/avatar/scott.jpeg',
    github: 'https://github.com/scott',
    linkedin: 'https://www.linkedin.com/in/scott',
    timeStamp: Date.now(),
  },
  {
    id: 4,
    nome: 'Leonard McCoy',
    email: 'maccoy@gmail.com',
    avatar: 'assets/images/avatar/maccoy.jpeg',
    github: 'https://github.com/mccoy',
    linkedin: 'https://www.linkedin.com/in/mccoy',
    timeStamp: Date.now(),
  },
  {
    id: 5,
    nome: 'Pavel Chekov',
    email: 'chekov@gmail.com',
    avatar: 'assets/images/avatar/chekov.jpeg',
    github: 'https://github.com/chekov',
    linkedin: 'https://www.linkedin.com/in/chekov',
    timeStamp: Date.now(),
  },
  {
    id: 6,
    nome: 'Uhura',
    email: 'uhura@gmail.com',
    avatar: 'assets/images/avatar/uhura.jpeg',
    github: 'https://github.com/uhura',
    linkedin: 'https://www.linkedin.com/in/uhura',
    timeStamp: Date.now(),
  },
  {
    id: 7,
    nome: 'Hikaru Kato Sulu',
    email: 'sulu@gmail.com',
    avatar: 'assets/images/avatar/sulu.jpeg',
    github: 'https://github.com/sulu',
    linkedin: 'https://www.linkedin.com/in/sulu',
    timeStamp: Date.now(),
  },
];
