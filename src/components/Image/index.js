import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallBack: custumFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handlError = () => {
        setFallBack(custumFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallBack || src}
            ref={ref}
            {...props}
            onError={handlError}
        />
    );
});

export default Image;
