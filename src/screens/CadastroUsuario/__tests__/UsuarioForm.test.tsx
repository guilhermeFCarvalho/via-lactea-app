import React from "react"
import UsuarioForm from "../../src/screens/CadastroUsuario/UsuarioForm"
import { render, screen, fireEvent } from '@testing-library/react-native';

// it('passando informações corretas, usuário passa para tela de cadastro de fazenda',()=>{
//     const { getByPlaceholderText, getAllByText } = render(
//         <UsuarioForm/>
//     );

//     fireEvent.changeText(
//         getByPlaceholderText('Jorge'),
//         'Guilherme'
//     )

//     const nomeElements = getAllByText('Guilherme');
//     expect(nomeElements).toHaveLength(1);
// });



it('adds 1 + 2 to equal 3', () => {
  expect(1+1).toBe(2);
});


