import PropTypes from "prop-types";
import styles from './Preloader.module.scss'

const Preloader =(color, size)=> {

        return <div className={styles.ldsRing}>
            <div style={{ borderColor: `${color} transparent transparent transparent`, width: size, height: size }}> </div>
            <div style={{borderColor: `${color} transparent transparent transparent`, width: size, height: size }}> </div>
            <div style={{ borderColor: `${color} transparent transparent transparent`, width: size, height: size }}> </div>
            <div style={{ borderColor: `${color} transparent transparent transparent`, width: size, height: size }}> </div>
        </div>;
    }

Preloader.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
}

Preloader.defaultProps = {
    color: '#1870CB',
    size: 60,
}
export default Preloader;
