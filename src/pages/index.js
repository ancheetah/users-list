import styles from '@/styles/Home.module.css';
import users from '../users.json';
import AccordionItem from '../components/AccordionItem';

import GroupSvg from '/public/icons/group.svg';

export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <GroupSvg fill={'#2081C3'} alt='group' width={38} height={38} />
                <h1 style={{ fontWeight: 400, paddingLeft: '0.25em' }}>
                    Users
                </h1>
            </header>
            {users.map(user => <AccordionItem key={user.id} user={user} />)}
        </>
    );
}
