import BookCard from '@components/Books/BookCard/BookCard';
import styles from './Profile.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '@hooks/app';

const { profileContainer, pic, img, settings } = styles;
function Profile() {
    const [imageFile, setImageFile] = useState('');
    const [file, setFile] = useState('');
    const imageHandler = (e: any) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        setImageFile(e.target.files[0]);
        console.log(file)
    }
    const { language } = useAppSelector(state => state.language);
    const { books } = useAppSelector(state => state.addBook);
    console.log(books)
    const booksCards = books.map((book => <BookCard {...book} />))

    const data = {
        file: imageFile,
        // username,
        // password,


    }

    return (
        <div className={profileContainer}>
            <Container>
                <div className={pic}>
                    <input id="img" type="file" onChange={imageHandler} />
                    <label htmlFor="img">
                        <div className={img}>
                            <img src={file} />
                            <label htmlFor="img">
                                <span>+</span>
                            </label>
                        </div>
                    </label>
                </div>
                <div className={settings}>
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="home" title={language === 'English' ? 'Settings' : 'الإعدادات'}
                        >
                        </Tab>
                        <Tab eventKey="profile" title=
                            {language === 'English' ? 'My Favorite' : 'مفضلتي'}
                        >
                            {language === 'English' ? 'My Favorite' : 'مفضلتي'}

                        </Tab>
                        <Tab eventKey="longer-tab" title=
                            {language === 'English' ? 'My Published Books' : 'كتبي المنشورة'}
                        >

                        </Tab>
                        <Tab eventKey="contact" title=
                            {language === 'English' ? 'My Saved Books' : 'كتبي المحفوظة'}

                        >

                        </Tab>
                    </Tabs>
                </div>

            </Container> </div >
    );
}

export default Profile;