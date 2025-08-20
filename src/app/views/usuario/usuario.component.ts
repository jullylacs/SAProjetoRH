import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  public usuario: Usuario = new Usuario(0, '', '', '', 'usuario'); // tipo padrão: usuario
  public usuarios: Usuario[] = [];

  constructor(private _usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this._usuariosService.getUsuarios().subscribe(
      (resposta) => {
        this.usuarios = resposta.map((item) => Usuario.fromMap(item));
      },
      (erro) => {
        alert('Erro ao listar usuários: ' + erro);
      }
    );
  }

  listarUsuarioPorId(usuario: Usuario): void {
    this.usuario = new Usuario(
      usuario.id,
      usuario.nome,
      usuario.email,
      usuario.senha,
      usuario.tipo
    );
  }

  cadastrarUsuario(): void {
    this._usuariosService.postUsuario(this.usuario).subscribe(
      () => {
        this.usuario = new Usuario(0, '', '', '', 'usuario');
        this.listarUsuarios();
      },
      (erro) => {
        alert('Erro ao cadastrar usuário: ' + erro);
      }
    );
  }

  atualizarUsuario(id: number): void {
    this._usuariosService.putUsuario(id, this.usuario).subscribe(
      () => {
        this.usuario = new Usuario(0, '', '', '', 'usuario');
        this.listarUsuarios();
      },
      (erro) => {
        alert('Erro ao atualizar usuário: ' + erro);
      }
    );
  }

  excluirUsuario(id: number): void {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this._usuariosService.deleteUsuario(id).subscribe(
        () => {
          this.usuario = new Usuario(0, '', '', '', 'usuario');
          this.listarUsuarios();
        },
        (erro) => {
          alert('Erro ao excluir usuário: ' + erro);
        }
      );
    }
  }
}
