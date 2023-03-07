import { useState } from 'react';

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
        <div className='accordionItem'>
            <div
                className='accordionHeader'
                onClick={() => setIsActive(!isActive)}
            >
                <div>{`${user.firstName} ${user.lastName}`}</div>
                <div>{user.role}</div>
                <div>{user.email}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && (
                <div className='accordionContent'>
                    <div>Address</div>
                    <div>{`${user.street}, ${user.city}, ${user.state} ${user.zip}`}</div>
                    <div>Phone</div>
                    <div>{getPhone(user.phone)}</div>
                    <div>Created At</div>
                    <div>{getFormattedDate(user.createdAt)}</div>
                    <div>Last Logged In</div>
                    <div>{getFormattedDate(user.lastLoggedIn)}</div>
                </div>
            )}
        </div>
    );
}
