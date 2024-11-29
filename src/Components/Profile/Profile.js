import React, { useContext, useState } from "react";
import * as S from "./ProfileStyle"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Profile({ handleClose }) {
    const { clientData } = useContext(AuthContext)
    const [profileImage, setProfileImage] = useState(null); // Estado para a imagem

    const uploadProfilePicture = (image, id) => {
        const baseRoute = process.env.REACT_APP_BASE_ROUTE;

        const formData = new FormData();
        formData.append('file', image); // Adiciona a imagem ao FormData

        axios.post(`${baseRoute}client/${id}/uploadProfilePicture`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            });
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Obtém o arquivo selecionado
        if (file) {
            setProfileImage(file); // Define o arquivo no estado
            uploadProfilePicture(file, clientData.id); // Chama a função de upload
        }
    }

    return (
        <>
            <S.ProfileContainer>
                <S.ProfileContent>
                    <S.ProfilePictureArea>
                        <h5 onClick={handleClose}>x</h5>
                        <div className="ProfilePictureBox">
                            <img alt="Profile Picture" src={profileImage ? URL.createObjectURL(profileImage) : "developer-image.jpeg"} />
                        </div>
                        <input type="file" onChange={handleImageChange} accept="image/*" />
                        <span>Alterar</span>
                    </S.ProfilePictureArea>

                    <S.ProfileInfo>
                        <h1>Informações Pessoais</h1>

                        <S.InfoBox>
                            <span>Nome</span>
                            <input placeholder="Seu Nome Completo" value={clientData.name} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>CPF</span>
                            <input readOnly placeholder="000.000.000-00" value={clientData.id} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>Contato</span>
                            <input placeholder="DDD + Número" value={clientData.phone} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>Rua</span>
                            <input placeholder="Rua, Av..." value={clientData.address.street} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>Número</span>
                            <input placeholder="Ex: 1029" value={clientData.address.number} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>Bairro</span>
                            <input placeholder="Ex: Nova Iguaçul" value={clientData.address.neighborhood} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>Cidade</span>
                            <input placeholder="Ex: São José do Rio Preto" value={clientData.address.city} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>Estado</span>
                            <input placeholder="Ex: São Paulo" value={clientData.address.state} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>País</span>
                            <input placeholder="Ex: Brasil" value={clientData.address.country || ""} />
                        </S.InfoBox>

                        <S.InfoBox>
                            <span>CEP</span>
                            <input placeholder="Ex: 84021-291" value={clientData.address.zipcode || ""} />
                        </S.InfoBox>

                        <h6>Editar Informações</h6>
                    </S.ProfileInfo>
                </S.ProfileContent>
            </S.ProfileContainer>
        </>
    )
}