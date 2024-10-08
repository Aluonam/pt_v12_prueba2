import Head from "next/head";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ModalProducts from "./components/apiModal/ModalProducts";
// import ReviewForm from "./components/reviewForm/ReviewForm";
import InputCounteLetters from "./components/inputCounterLetters/InputCounteLetters";
import FormPasswordModal from "./components/formPasswordModal/FormPasswordModal";
import ActualHour from "./components/actualHour/ActualHour";


// const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  
 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <main className={`${styles.main}`}>
        Hola mundo
        <ModalProducts></ModalProducts>
         {/* <ReviewForm></ReviewForm>  */}
        {/* <InputCounteLetters></InputCounteLetters> */}
        {/* <FormPasswordModal></FormPasswordModal> */}
        {/* <ActualHour></ActualHour> */}
      </main>
    </>
  );
}
