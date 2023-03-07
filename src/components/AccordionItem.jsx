import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/AccordionItem.module.css';

import UserSvg from '/public/icons/user.svg'
export default function AccordionItem({ user }) {
    const [isActive, setIsActive] = useState(false);

    const getPhone = (phone) => {
        return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(
            6,
            10
        )}`;
    };

    const getFormattedDate = (isoDate) => {
        const dateObj = new Date(isoDate);
        const dateInfo = dateObj.toLocaleString('en-US').split(' ');
        const date = dateInfo[0].slice(0, dateInfo[0].length - 1);
        const time = dateInfo[1].slice(0, dateInfo[1].length - 3);
        return `${date} ${time} ${dateInfo[2]}`;
    };

    return (
        <div className={styles.accordionItem}>
            <div
                className={styles.accordionHeader}
                onClick={() => setIsActive(!isActive)}
            >
                <div className={styles.headerLeft}>
                  <UserSvg width={50} height={50} alt='user icon'/>
                  <div class={styles.headerText}>
                    <div className={styles.userName}>{`${user.firstName} ${user.lastName}`}</div>
                    <div className={styles.userRole}>{user.role}</div>
                    <div className={styles.userEmail}>{user.email}</div>
                  </div>
                </div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && (
                <div className={styles.accordionContent}>
                    <div className={styles.detailHeader}>Address</div>
                    <div className={styles.detailItem}>{`${user.street}, ${user.city}, ${user.state} ${user.zip}`}</div>
                    <div className={styles.detailHeader}>Phone</div>
                    <div className={styles.detailItem}>{getPhone(user.phone)}</div>
                    <div className={styles.detailHeader}>Created At</div>
                    <div className={styles.detailItem}>{getFormattedDate(user.createdAt)}</div>
                    <div className={styles.detailHeader}>Last Logged In</div>
                    <div className={styles.detailItem}>{getFormattedDate(user.lastLoggedIn)}</div>
                </div>
            )}
        </div>
    );
}

AccordionItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    lastLoggedIn: PropTypes.string.isRequired,
  })
}