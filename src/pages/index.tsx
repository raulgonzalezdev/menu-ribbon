import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
//import Ribbon from "ribbon-chakra";
import Ribbon from "../components/Ribbon/ribbon"
import {ribbonTabs} from "../components/ribbonTabs"
import styles from '../styles/Home.module.css';

const StyledBoxMainContainer = ({ children }) => (
  <div className={styles.mainContainer}>
    {children}
  </div>
);

const StyledBoxContent = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
);

const Home = (props) => {
  const router = useRouter();

  const handleButtonClick = (button) => {
    console.log("Clicked button:", button);
    router.push(`/page/${button}`);
  };

  return (
    <>
       {/* <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <div className={styles.container}>
        <StyledBoxMainContainer>
          <div className={styles.contentWrapper}>
            <StyledBoxContent>
              <div className={styles.ribbonContainer}>  */}
                <Ribbon  onButtonClick={handleButtonClick} />
              {/* </div>
              {props.children}
            </StyledBoxContent>
          </div>
        </StyledBoxMainContainer>
      </div>  */}
    </>
  );
};

export default Home;

