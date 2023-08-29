import React from 'react';
import "./NotFound.css";

function NotFound({ onBack }) {
    return (
        <div className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__description">Страница не найдена</p>
            <button className="not-found__back button" type='button' onClick={onBack}>Назад</button>
        </div>
    )
}

export { NotFound };