// Single Responsibility Principle
class UsuarioService {
  criarUsuario(nome) {
    console.log("Usuário criado:", nome);
  }
}

class EmailService {
  enviarBoasVindas(email) {
    console.log("E-mail enviado para:", email);
  }
}
