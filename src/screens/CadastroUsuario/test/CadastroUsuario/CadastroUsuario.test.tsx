import React from "react"
import UsuarioForm from "../../UsuarioForm"
import { render, screen, fireEvent } from '@testing-library/react-native';

it('passando informações corretas, usuário passa para tela de cadastro de fazenda',()=>{
    const view = render(
        <UsuarioForm/>
    );
    view.debug()
    // fireEvent.changeText(
    //     getByPlaceholderText('Jorge'),
    //     'Guilherme'
    // )
    
    // const nomeElements = getAllByText('Guilherme');
    // expect(nomeElements).toHaveLength(1);
});

