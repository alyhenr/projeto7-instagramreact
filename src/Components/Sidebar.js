import React, { useState } from 'react';

import userImg from '../assets/img/catanacomics.svg';
import edit from '../assets/img/pencil-outline.svg';
import badvibes from '../assets/img/bad.vibes.memes.svg';
import chibirdart from '../assets/img/chibirdart.svg';
import razoespa from '../assets/img/razoesparaacreditar.svg';
import adorable_animals from '../assets/img/adorable_animals.svg';
import smallcutecats from '../assets/img/smallcutecats.svg';

const Sidebar = () => {
    const [userName, setUserName] = useState("catanacomics");
    const [picProfile, setPicProfile] = useState(userImg);
    const suggestions = [
        ['bad.vibes.memes', badvibes], ['chibirdart', chibirdart],
        ['razoesparaacreditar', razoespa], ['adorable_animals', adorable_animals],
        ['smallcutecats', smallcutecats]
    ];

    return (
        <div className='sidebar'>
            <div className="user-info">
                <img
                    src={picProfile}
                    alt="user-img"
                    style={{ width: "56px", height: "56px", cursor: "pointer", borderRadius: "50%" }}
                    onClick={() => {
                        const newPicProfile = prompt("Digite o link da nova foto:");
                        if (newPicProfile) setPicProfile(newPicProfile);
                    }}
                    data-test="profile-image"
                />
                <h2 data-test="name">{userName}</h2>
                <img
                    src={edit}
                    alt="edit-name"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                    onClick={() => {
                        const newUserName = prompt("Digite seu nome:");
                        if (newUserName) setUserName(newUserName);
                    }}
                    data-test="edit-name"
                />
            </div>
            <div className="see-all">
                <h5>Sugestões para você</h5>
                <h5 className='strong'> Ver Tudo</h5>
            </div>
            <div className="suggestions">
                {suggestions.map((sug, index) => (
                    <div className="sug" key={`suggestion-${index}`}>
                        <div style={{ display: "flex" }}>
                            <img src={sug[1]} alt="suggestion" />
                            <div style={{ marginLeft: "10px" }}>
                                <h2>{sug[0]}</h2>
                                <h3>Segue você</h3>
                            </div>
                        </div>
                        <h5
                            style={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '12px',
                                color: '#139EF2',

                                cursor: 'pointer'
                            }}
                            onClick={(ev) => {
                                ev.target.textContent = ev.target.textContent === 'Seguindo'
                                    ?
                                    'Seguir' : 'Seguindo';
                            }}
                        >Seguir</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar