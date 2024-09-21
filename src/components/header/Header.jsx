import style from './Header.module.css';
import logo from '../../assets/Title.svg';

export const Header = () => {
    return (
        <>
        <header className={style.headerContainer}>
            <img className={style.title} src={logo} alt="doctor care logo" />
            <nav className={style.navigationMenu}>
                <ul>
                    <li ><a className={style.active} href="#" >Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Depoimentos</a></li>
                </ul>
            </nav>
            <button className={style.headerButton}>AGENDAR CONSULTA</button>
        </header>
        </>
    );
};
