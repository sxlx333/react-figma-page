import style from './Footer.module.css';
import logo from '../../assets/Title.svg';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';


export const Footer = () => {
    return (
        <>
        <footer>
            <div className={style.footerContainer}>
                <div  className={style.leftFooterInfoContainer}>
                    <img className={style.title} src={logo} alt="doctor care logo" />
                    <p className={style.doctorYear}>©2022 - DoctorCare.</p>
                    <p className={style.todosPara}>Todos os direitos reservados.</p>
                </div>
                <div className={style.logoLinks}>
                    <a href="#"><img src={instagram} alt="social logo" /></a>
                    <a href="#"><img src={facebook} alt="social logo" /></a>
                    <a href="#"><img src={youtube} alt="social logo" /></a>
                </div>
            </div>
        </footer>
        </>
       
        
    );
};