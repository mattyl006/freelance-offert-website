import React from "react";
import "./UsesUav.scss";

function UsesUav() {
    return (
        <section className="UsesUav">
            <h2 className="UsesUav__header">
                Gdzie możesz wykorzystać filmy i ujęcia z drona?
            </h2>
            <div className="UsesUav__container">
                <article className="UsesUav__article">
                    <h3 className="UsesUav__article-header">
                        FILMY PROMOCYJNE LUB
                        REKLAMOWE
                    </h3>
                    <ul className="UsesUav__list">
                        <li className="UsesUav__item">
                            Reklamy dla firm
                        </li>
                        <li className="UsesUav__item">
                            Promocje wydarzeń
                        </li>
                        <li className="UsesUav__item">
                            Promocje miast
                        </li>
                        <li className="UsesUav__item">
                            ITD.
                        </li>
                    </ul>
                </article>
                <article className="UsesUav__article">
                    <h3 className="UsesUav__article-header">
                        OGŁOSZENIA
                        SPRZEDAŻOWE
                    </h3>
                    <ul className="UsesUav__list">
                        <li className="UsesUav__item">
                            Nieruchomości
                        </li>
                        <li className="UsesUav__item">
                            Samochodów
                        </li>
                        <li className="UsesUav__item">
                            Maszyn
                        </li>
                        <li className="UsesUav__item">
                            ITD.
                        </li>
                    </ul>
                </article>
                <article className="UsesUav__article">
                    <h3 className="UsesUav__article-header">
                        ZDJĘCIA Z POWIETRZA
                    </h3>
                    <ul className="UsesUav__list">
                        <li className="UsesUav__item">
                            Nieruchomości
                        </li>
                        <li className="UsesUav__item">
                            Działek
                        </li>
                        <li className="UsesUav__item">
                            Firm
                        </li>
                        <li className="UsesUav__item">
                            ITD.
                        </li>
                    </ul>
                </article>
                <article className="UsesUav__article">
                    <h3 className="UsesUav__article-header">
                        RELACJE Z WYDARZEŃ
                    </h3>
                    <ul className="UsesUav__list">
                        <li className="UsesUav__item">
                            Wesela
                        </li>
                        <li className="UsesUav__item">
                            Imprezy okolicznościowe
                        </li>
                        <li className="UsesUav__item">
                            ITD.
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default UsesUav;
