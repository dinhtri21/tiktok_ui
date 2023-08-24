import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image 
                className={cx('avatar')}
                alt="Hoa"
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7e9d92eaac2818600067935a20107c75~c5_100x100.jpeg?x-expires=1692896400&x-signature=s1S961PXSEXfZ2Edy1YtAVEXBXE%3D"
            />
           
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Đình Trí</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>#nguyendinhtri</span>
            </div>
        </div>
    );
}
export default AccountItem;
